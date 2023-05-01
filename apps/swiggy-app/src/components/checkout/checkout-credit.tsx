import { Button, useToast } from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useSelector } from "react-redux";
import { authSelector } from "../../redux/auth/auth.slice";
import { ExternalApis } from "../../api";


export default function CheckoutCredit({ cart, address }: any) {
  const [firstName, setFirstName] = useState("");
  const [loading, setLoading] = useState(false);
  const stripe = useStripe();
  const [cardNumber, setCardNumber] = useState("");
  const [cvv, setCvv] = useState("");
  const { token } = useSelector(authSelector);
  const [expiry, setExpiry] = useState("");
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const toast = useToast();

  const elements = useElements();

  const handleSubmit = async (e: any) => {

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }
    const config = {
      headers: {
        Authorization: `Bearer ${token}`
      }
    };
    e.preventDefault()
    const cardElement = elements?.getElement(CardElement);
    const order = await ExternalApis.createOrder({ cart : {...cart, address_id: address.id} }, config)
    ExternalApis.createPayment(
      {
        cart: { ...cart, order_id: order.id }
      },config)
      .then((res) => {
        return new Promise((resolve, reject) => {
          setLoading(true);
          stripe?.createPaymentMethod({
            type: 'card',
            card: cardElement!
          })
            .then(paymentMethod => {
              console.log(paymentMethod);
              const data = {
                clientSecret: res.client_secret,
                paymentMethodId: paymentMethod.paymentMethod?.id
              }
              resolve(data)
            })
            .catch(err => reject(err))
        })
          .then((response: any) => {
            return stripe?.confirmCardPayment(response.clientSecret, {
              payment_method: response.paymentMethodId,
            })
              .then(res => {
                setLoading(false);
                console.log(res)
                ExternalApis.updatePaymentStatusSuccess({ cart: { ...cart, order_id: order.id } }, config)
                  .then((data) => {
                    navigate("/thankyou")
                  })
              })
              .catch(err => {
                ExternalApis.updatePaymentStatusFailed({ cart: { ...cart, order_id: order.id } }, config)
                setLoading(false);
              });
          })
      })
  };

  return (
    <>
      <div className='text-xl font-semibold'>
        <h1>Add new card</h1> <br />{" "}
      </div>
      <div className='grid grid-cols-5 content-center gap-1'>
        <div>
          <p
            className='text-xs '
            style={{ paddingTop: "15px" }}>
            WE ACCEPT
          </p>
        </div>
        <div>
          <img
            src='https://www.freepnglogos.com/uploads/mastercard-png/mastercard-logo-png-transparent-svg-vector-bie-supply-0.png'
            width='50px'
            height='50px'
            alt=' '
          />
        </div>
        <div>
          <img
            src='https://www.freepnglogos.com/uploads/visa-inc-png-18.png'
            height='50px'
            width='50px'
            style={{ paddingTop: "15px" }}
            alt=''
          />
        </div>
        <div>
          <img
            src='https://upload.wikimedia.org/wikipedia/commons/c/cb/Rupay-Logo.png'
            height='50px'
            style={{ paddingTop: "12px" }}
            width='50px'
            alt=''
          />
        </div>
        <div>
          <img
            src='https://hindubabynames.info/downloads/wp-content/themes/hbn_download/download/banking-and-finance/zeta-logo.png'
            height='50px'
            width='50px'
            alt=''
          />
        </div>
      </div>
      <hr style={{ border: "1px solid black" }} /> <br />
      <div>
        <form
          className='flex flex-col'
          onSubmit={handleSubmit}>
          <CardElement />
          <Button
            type="submit"
            fontSize={"14px"}
            colorScheme={"#fc8019"}
            fontWeight={"bold"}
            color={"white"}
            margin={"10px"}
            borderRadius={"0px"}
            w={"100%"}
            disabled={!elements}
            bg={"#fc8019"}
            padding={"27px"}>
            Pay
          </Button>
        </form>
      </div>
    </>
  );
}
