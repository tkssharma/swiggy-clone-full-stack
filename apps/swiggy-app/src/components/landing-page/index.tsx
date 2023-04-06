import React, { useState, useRef } from "react";
import { Box, Image, Button, Text, Input } from "@chakra-ui/react";
import LandingImage from "./images/landingPageImage1.png";
import { useDisclosure } from "@chakra-ui/react";
import Logo from "./images/LogoImage.png";
import BannerImage1 from "./images/bannerImage1.png";
import BannerImage2 from "./images/bannerImage2.png";
import BannerImage3 from "./images/bannerImage3.png";
import Banner2Image1 from "./images/banner2play1.png";
import Banner2Image2 from "./images/banner2play2.png";
import Banner2Image3 from "./images/banner2mobile1.png";
import Banner2Image4 from "./images/banner2mobile2.png";
import { Link } from "react-router-dom";

function LandingPage({ setOpenLoginSignup, setLoadLogin }: any) {
	//   const [istrue, setIstrue] = useState(true);
	const { isOpen, onOpen, onClose } = useDisclosure();

	const loginhandler = () => {
		setOpenLoginSignup((p: any) => !p);
		setLoadLogin((p1:any) => p1);
	};
	const signuphandler = () => {
		setOpenLoginSignup((p: any) => !p);
		setLoadLogin((p1: any) => !p1);
	};

	return (
		<Box>
			<Box
				w={"100%"}
				height={"510px"}
				display={"flex"}>
				<Box
					w={"55%"}
					height={"510px"}
					mt={"5%"}>
					<Box
						display={"flex"}
						width='80%'
						justifyContent={"space-between"}
						m={"auto"}>
						<Link to={"/"}>
							<Image
								ml={"95px"}
								w={"185px"}
								height={"54px"}
								src={Logo}
								alt={"logo"}></Image>
						</Link>
						<Box>
							<Button
								borderRadius={"0px"}
								color={"black"}
								bg={"none"}
								colorScheme={"none"}
								m={"5px"}
								onClick={loginhandler}>
								Login
							</Button>

							<Button
								borderRadius={"0px"}
								w={"115px"}
								colorScheme={"black"}
								color={"white"}
								bg={"black"}
								onClick={signuphandler}>
								SignUp
							</Button>
		
						</Box>
					</Box>
					<Box
						textAlign={"left"}
						w={"60%"}
						m={"auto"}
						mt='6%'>
						<Text
							fontWeight={"semibold"}
							fontSize={"37px"}>
							Hungry ?
						</Text>
						<Text
							fontSize={"24px"}
							opacity={"0.8"}>
							Order food from favourite restaurants near you.
						</Text>
					</Box>
					<Box
						w={"70%"}
						ml={"20%"}
						mt='40px'>
						<Box display={"flex"}>
							<Input
								borderRadius={"none"}
								padding={"30px"}
								placeholder={
									"Enter Delivery Location                                                         📌 Locate me"
								}
							/>
							<Button
								fontSize={"16PX"}
								colorScheme={"#FC8019"}
								borderRadius={"none"}
								padding={"30px"}
								bg={"#FC8019"}>
								FIND FOOD
							</Button>
						</Box>
						<Text
							opacity={"0.7"}
							fontSize={"15px"}
							mt='24px'
							textAlign={"left"}>
							POPULAR CITIES IN INDIA
						</Text>
						<Text
							fontWeight={"semibold"}
							opacity={"0.7"}
							fontSize={"16px"}
							mt='24px'
							textAlign={"left"}>
							Ahmedabad Bangalore Chennai Delhi Gurgaon Hyderabad Kolkata Mumbai
							Pune & more.
						</Text>
					</Box>
				</Box>
				<Box w={"45%"}>
					<Image
						w={"100%"}
						height={"590px"}
						src={LandingImage}
					/>
				</Box>
			</Box>

			<Box
				display={"flex"}
				bg={"#2b1e16"}
				w={"100%"}
				height={"380px"}
				mt={"80PX"}
				justifyContent={"space-around"}>
				<Box
					color={"white"}
					w='32%'
					textAlign={"center"}>
					<Image
						ml={"38%"}
						height={"206px"}
						w={"112px"}
						src={BannerImage1}
						mb={"35px"}
					/>
					<Text
						fontWeight={"semibold"}
						fontSize={"20px"}
						mb={"10px"}>
						No Minimum Order
					</Text>
					<Text
						fontSize={"15px"}
						opacity={"0.6"}>
						Order in for yourself or for the group, <br /> with no restrictions
						on order value
					</Text>
				</Box>
				<Box
					color={"white"}
					w='32%'
					textAlign={"center"}>
					<Image
						ml={"38%"}
						height={"206px"}
						w={"112px"}
						src={BannerImage2}
						mb={"35px"}
					/>
					<Text
						fontWeight={"semibold"}
						fontSize={"20px"}
						mb={"10px"}>
						Live Order Tracking
					</Text>
					<Text
						fontSize={"15px"}
						opacity={"0.6"}>
						Know where your order is at all times,
						<br /> from the restaurant to your doorstep
					</Text>
				</Box>
				<Box
					color={"white"}
					w='32%'
					textAlign={"center"}>
					<Image
						height={"206px"}
						ml={"35%"}
						w={"114px"}
						src={BannerImage3}
						mb={"35px"}
					/>
					<Text
						fontWeight={"semibold"}
						fontSize={"20px"}
						mb={"10px"}>
						Lightning-Fast Delivery
					</Text>
					<Text
						fontSize={"15px"}
						opacity={"0.6"}>
						Experience Swiggy's superfast delivery <br /> for food delivered
						fresh & on time
					</Text>
				</Box>
			</Box>

			<Box
				w={"80%"}
				height={"450px"}
				margin={"auto"}
				display={"flex"}
				justifyContent={"space-between"}>
				<Box
					w={"50%"}
					textAlign={"left"}
					mt={"8%"}>
					<Text
						w={"60%"}
						mb={"24px"}
						lineHeight={"40px"}
						fontWeight={"bold"}
						fontSize={"40px"}>
						Restaurants in your pocket
					</Text>
					<Text
						opacity={"0.8"}
						fontSize={"20px"}>
						Order from your favorite restaurants & track <br /> on the go, with
						the all-new Swiggy app.
					</Text>

					<Box
						display={"flex"}
						gap={"5px"}
						mt={"40px"}>
						<Image
							w={"170px"}
							height={"54px"}
							src={Banner2Image1}
						/>
						<Image
							w={"170px"}
							height={"54px"}
							src={Banner2Image2}
						/>
					</Box>
				</Box>
				<Box
					w={"50%"}
					display={"flex"}
					justifyContent={"space-around"}>
					<Image src={Banner2Image3} />
					<Image src={Banner2Image4} />
				</Box>
			</Box>
		</Box>
	);
}

export default LandingPage;
