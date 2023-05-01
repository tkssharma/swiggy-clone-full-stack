import { useEffect, useRef } from "react";
import {
	Box,
	Drawer,
	DrawerOverlay,
	DrawerContent,
	DrawerHeader,
	DrawerBody,
	Button,
	Text,
	DrawerCloseButton,
	Image,
	Input,
	useToast,
} from "@chakra-ui/react";
import { signInWithPopup, signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";
import { firebaseAuth, provider } from "../../firebase/firebase";
import { useDisclosure } from "@chakra-ui/react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { useNavigate } from "react-router-dom";
import { registerSuccess } from "../../redux/auth/auth.slice";
import { createAddress } from "../../redux/user/user.slice";

function AddressForm({ open }: any) {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const firstRender = useRef(0);
	const navigate = useNavigate();
  const dispatch = useDispatch();

	const [address, setAddress] = useState({
		city: "",
		state: "",
		street: ""
	});

  const createNewAddress = () => {
    dispatch(createAddress({
      ...address,
      "country": "INDIA",
      "pincode": "6789876",
      "street": "street",
      "name": "full address"
    }))
    onClose()
  }

	useEffect(() => {
		if (firstRender.current > 1) {
			console.log("inside open", firstRender.current);
			if (isOpen) onClose();
			else onOpen();
		}
		firstRender.current++;
	}, [open]);
	return (
		<Box>
			<Drawer
				onClose={onClose}
				isOpen={isOpen}
				size={"md"}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />

					<DrawerHeader></DrawerHeader>
          <DrawerBody>
	
							<>
								<Box
									display={"flex"}
									justifyContent={"space-between"}
									w={"80%"}
									mt={"5%"}>
									<Box>
										<Text
											color={"black"}
											fontSize={"20px"}>
											Add new Address
										</Text>
									<Input
										placeholder={"City"}
										padding={"34px"}
                    margin={"10px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
										value={address.city || ""}
										name='city'
										onChange={(e) =>
											setAddress((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										mt={"40px"}
									/>
									<Input
										placeholder={"State"}
										padding={"34px"}
                    margin={"10px"}
                    value={address.state || ""}
										name='state'
										onChange={(e) =>
											setAddress((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
										mb={"24px"}
									/>
                  <Input
										placeholder={"User Address"}
										padding={"34px"}
                    margin={"10px"}
                    value={address.street || ""}
										name='street'
										onChange={(e) =>
											setAddress((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
										mb={"24px"}
									/>
									<Button
										fontSize={"14px"}
										colorScheme={"#fc8019"}
										fontWeight={"bold"}
										color={"white"}
                    margin={"10px"}
										borderRadius={"0px"}
										onClick={createNewAddress}
										w={"100%"}
										bg={"#fc8019"}
										padding={"27px"}>
										Add Address
									</Button>
									</Box>
                  </Box>
              </>
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
export default AddressForm;
