// 1)Homepage
// 2)Restaurant
// 3)Search
// 4)Cart Modal
// 5)Checkout
// 6)Login Signup

restaurants: [{}, {}, {}];

const RestaurantSchema = {
  id: "",
  name: "",
  city: "",
  image: "",
  ratings: "",
  cheapestPrice: 0,
  deliveryTime: 0,
  menu: [
    {
      category: "burger",
      foodItems: ["id1", "id2"],
    },
    {
      category: "pizza",
      foodItems: ["id1", "id2"],
    },
    {
      category: "momo",
      foodItems: ["id1", "id2"],
    },
  ],
};

const DishSchema = {
  id: "",
  name: "",
  image: "",
  ratings: "",
  price: 0,
  restaurant: [],
  desc: "",
  veg: true,
};

const CartSchema = {
  username: "",
  cartItems: [
    {
      dishId: "",
      restaurantId: "",
      price: "",
      totalPrice: "",
      quantity: "",
    },
  ],
};

const UserSchema = {};
