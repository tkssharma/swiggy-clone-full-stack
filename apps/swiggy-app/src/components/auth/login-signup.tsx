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
function LoginSignup({ open, loadlogin }: any) {
	const [switchLogin, setSwitchLogin] = useState(loadlogin);
	const [loginState, setLoginState] = useState({
		email: "",
		password: "",
	});

	const [signupState, setSignupState] = useState({
		email: "",
		username: "",
		password: "",
	});

	const navigate = useNavigate();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const auth = useSelector((state: any) => state.auth.auth.isAuth);
	const error = useSelector((state: any) => state.auth.auth.error);
	const registerLoading = useSelector(
		(state: any) => state.auth.register.registerLoading
	);
	const registerStatus = useSelector(
		(state: any) => state.auth.register.registerStatus
	);
	const registerError = useSelector(
		(state: any) => state.auth.register.registerError
	);
	const firstRender = useRef(0);
	const dispatch = useDispatch();
	const toast = useToast();
	const [trackSignup, setTrackSignup] = useState(0);

	async function handleLogin() {
		if (!loginState.email || !loginState.password) {
			toast({
				title: "Please fill all the details...",
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} 
    const {email, password} = loginState
    signInWithEmailAndPassword(firebaseAuth, email, password)
    .then(() => {
    })
    .catch((error: any) => {
      console.error("Error signing in with password and email", error);
    });
	}

  async function handleGoogleSignup(){
    await signInWithPopup(firebaseAuth, provider)
    .then((result) => {
      console.log(result)
    }).catch((error) => {
      console.log(error);
    });
  }   


	async function handleSignup() {
		if (
			!signupState.email ||
			!signupState.username ||
			!signupState.password
		) {
			toast({
				title: "Please fill all the details...",
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		} else {
	
      const {email, password} = signupState;
      createUserWithEmailAndPassword(firebaseAuth, email, password)
      .then(() => {
        dispatch(registerSuccess);
      })
      .catch((error: any) => {
        console.error("Error signing in with password and email", error);
      });
		}
		setTrackSignup(trackSignup + 1);
	}

	useEffect(() => {
		if (firstRender.current > 1) {
			console.log(firstRender.current);
			if (auth) {
				toast({
					title: "Login successful!!",
					status: "success",
					duration: 2000,
					isClosable: true,
					position: "top",
				});
				onClose();
				setLoginState({
					email: "",
					password: "",
				});
			} else {
				error &&
					toast({
						title: error,
						status: "error",
						duration: 2000,
						isClosable: true,
						position: "top",
					});
			}
		}

		firstRender.current++;
	}, [auth, error]);

	useEffect(() => {
		if (firstRender.current > 1) {
			console.log("inside open", firstRender.current);
			if (isOpen) onClose();
			else onOpen();
		}
		firstRender.current++;
	}, [open]);

	useEffect(() => {
		if (
			registerStatus === 201 &&
			registerLoading === false &&
			registerError === false
		) {
			toast({
				title: "Register successful!!",
				status: "success",
				duration: 2000,
				isClosable: true,
				position: "top",
			});

		} else if (
			registerStatus !== 201 &&
			registerLoading === false &&
			registerError !== false
		) {
			toast({
				title: registerError,
				status: "error",
				duration: 2000,
				isClosable: true,
				position: "top",
			});
		}
	}, [registerLoading, registerError, registerStatus]);

	//signup switch
	const handlespanSignUp = () => {
		setSwitchLogin(false);
	};

	const handlespanClick = () => {
		setSwitchLogin(true);
	};
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
						{switchLogin ? (
							<>
								<Box
									display={"flex"}
									justifyContent={"space-between"}
									w={"50%"}
									mt={"5%"}>
									<Box>
										<Text
											color={"black"}
											fontSize={"33px"}>
											Login
										</Text>
										<Text>
											or{" "}
											<span
												onClick={handlespanSignUp}
												style={{
													color: "#fc8019",
													cursor: "pointer",
													fontSize: "14px",
												}}>
												create an account
											</span>
										</Text>
									</Box>
									<Box w={"28%"}>
										<Image
											src={
												"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
											}></Image>
									</Box>
								</Box>
								<Box w={"80%"}>
									<Input
										placeholder={"User Email"}
										padding={"34px"}
                    margin={"10px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"text"}
										value={loginState.email || ""}
										name='email'
										onChange={(e) =>
											setLoginState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										mt={"40px"}
									/>
									<Input
										placeholder={"User Password"}
										padding={"34px"}
                    margin={"10px"}
										name='password'
										onChange={(e) =>
											setLoginState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										value={loginState.password}
										borderRadius={"0px"}
										w={"100%"}
										type={"password"}
										mb={"24px"}
									/>
									<Button
										fontSize={"14px"}
										colorScheme={"#fc8019"}
										fontWeight={"bold"}
										color={"white"}
                    margin={"10px"}
										borderRadius={"0px"}
										onClick={handleLogin}
										w={"100%"}
										bg={"#fc8019"}
										padding={"27px"}>
										Login
									</Button>

                  <Button
										colorScheme={"#fc8019"}
										fontSize={"14px"}
										fontWeight={"bold"}
                    margin={"10px"}
										color={"white"}
										borderRadius={"0px"}
										w={"100%"}
										bg={"#fc8019"}
										padding={"27px"}
										onClick={handleGoogleSignup}>
										Login Using Google
									</Button>
									<Text
										mt={"5px"}
										fontSize={"12px"}>
										By clicking on Login, I accept the Terms & Conditions &
										Privacy Policy
									</Text>
								</Box>
							</>
						) : (
							<>
								<Box
									display={"flex"}
									justifyContent={"space-between"}
									w={"80%"}
									mt={"5%"}>
									<Box>
										<Text
											color={"black"}
											fontSize={"33px"}>
											Sign up
										</Text>
										<Text>
											<span
												onClick={handlespanClick}
												style={{
													color: "#fc8019",
													cursor: "pointer",
													fontSize: "14px",
												}}>
												login to your account
											</span>
										</Text>
									</Box>
									<Box w={"28%"}>
										<Image
											src={
												"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/Image-login_btpq7r"
											}></Image>
									</Box>
								</Box>
								<Box w={"72%"}>
									<Input
										placeholder={"email"}
										padding={"34px"}
                    margin={"10px"}

										borderRadius={"0px"}
										w={"100%"}
										name='email'
										value={signupState.email || ""}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
										type={"text"}
										mt={"40px"}
									/>

									<Input
										placeholder={"username"}
										padding={"34px"}
										borderRadius={"0px"}
                    margin={"10px"}

										w={"100%"}
										type={"text"}
										name='username'
										value={signupState.username}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
									/>
									<Input
										placeholder={"Password"}
										padding={"34px"}
										borderRadius={"0px"}
										w={"100%"}
										type={"password"}
                    margin={"10px"}

										name='password'
										value={signupState.password}
										onChange={(e) =>
											setSignupState((p) => ({
												...p,
												[e.target.name]: e.target.value,
											}))
										}
									/>
									<Text
										color={"#5D8ED5"}
										mt={"25px"}
										mb={"16px"}
										fontSize={"16px"}>
										Have a referral code?
									</Text>

									<Button
										colorScheme={"#fc8019"}
										fontSize={"14px"}
										fontWeight={"bold"}
										color={"white"}
										borderRadius={"0px"}
                    margin={"10px"}
										w={"100%"}
										bg={"#fc8019"}
										padding={"27px"}
										onClick={handleSignup}>
										Signup
									</Button>
                  <Button
										colorScheme={"#fc8019"}
										fontSize={"14px"}
										fontWeight={"bold"}
                    margin={"10px"}
										color={"white"}
										borderRadius={"0px"}
										w={"100%"}
										bg={"#fc8019"}
										padding={"27px"}
										onClick={handleGoogleSignup}>
										Login Using Google
									</Button>
									<Text
										mt={"5px"}
										fontSize={"12px"}>
										By creating an account, I accept the Terms & Conditions &
										Privacy Policy
									</Text>
								</Box>
							</>
						)}
					</DrawerBody>
				</DrawerContent>
			</Drawer>
		</Box>
	);
}
export default LoginSignup;
