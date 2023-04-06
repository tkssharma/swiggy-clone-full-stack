import React from "react";
import styles from "../styles/footer.module.css";

const Footer = () => {
	return (
		<div className={styles.main_container}>
			<div className={styles.container}>
				<div>
					<h4>COMPANY</h4>
					<p>About us</p>
					<p>Team</p>
					<p>Carrers</p>
					<p>Swiggy Blogs</p>
					<p>Bug Bounty</p>
					<p>Swiggy One</p>
					<p>Swiggy Instamart</p>
					<p>Swiggy Corporate</p>
					<p>Swiggy Genie</p>
				</div>

				<div>
					<h4>CONTACT</h4>
					<p>Help & Support</p>
					<p>Partner With us</p>
					<p>Ride with us</p>
				</div>

				<div>
					<h4>LEGAL</h4>
					<p>Terms & Conditions</p>
					<p>Refund & Cancillation</p>
					<p>Privacy Policy</p>
					<p>Cookie Policy</p>
					<p>Offers Terms</p>
					<p>Fishing & Fraud</p>
					<p>Corporate-Swiggy Money Codes Terms & Conditions</p>
					<p>Corporate-Swiggy Discount Voucher Terms & Conditions</p>
				</div>

				<div className='flex flex-col gap-12'>
					<a
						href={
							"https://apps.apple.com/in/app/id989540920?referrer=utm_source%3Dswiggy%26utm_medium%3Dhomepage"
						}>
						<img
							src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-AppStore_lg30tv'
							alt=''
						/>
					</a>
					<a
						href={
							"https://play.google.com/store/apps/details?id=in.swiggy.android&referrer=utm_source%3Dswiggy%26utm_medium%3Dheader&pli=1"
						}>
						<img
							src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_200,h_65/icon-GooglePlay_1_zixjxl'
							alt=''
						/>
					</a>
				</div>
			</div>
			{/* <div style={{backgroundColor:"white",flexDirection:"column"}}><hr/></div> */}
			<hr className={styles.hr} />
			<div className={styles.container}>
				<div>
					<h4>WE DELIVER TO</h4>
					<p>Abohar</p>
					<p>Adilabad</p>
					<p>Adityapur</p>
					<p>Adoni</p>
					<p>Agartala</p>
					<p>Agra</p>
					<p>Ahmedabad</p>
					<p>Ahmednagar</p>
					<p>Aizawl</p>
					<p>Ajmer</p>
					<p>Akola</p>
					<p>Alappuzha</p>
					<p>Aligarh</p>
				</div>

				<div style={{ marginTop: "50px" }}>
					<p>Delhi</p>
					<p>Deoghar</p>
					<p>Deoria</p>
					<p>Dewas</p>
					<p>Dhanbad</p>
					<p>Dhar</p>
					<p>Dharamshala</p>
					<p>Dharapuram</p>
					<p>Dharmapuri</p>
					<p>Dharwad</p>
					<p>Dholpur</p>
					<p>Dhule</p>
					<p>Dhuri</p>
				</div>

				<div style={{ marginTop: "50px" }}>
					<p>Khatauli-2</p>
					<p>Khopoli</p>
					<p>Kishanganj</p>
					<p>Kishangarh</p>
					<p>Kochi</p>
					<p>Kodaikanal</p>
					<p>Kohima</p>
					<p>Kokrajhar</p>
					<p>Kolar</p>
					<p>Kolhapur</p>
					<p>Kolkata</p>
				</div>

				<div style={{ marginTop: "50px" }}>
					<p>Puri</p>
					<p>Purnea</p>
					<p>Purulia</p>
					<p>Pusad</p>
					<p>Puttur</p>
					<p>Puttur-Karnataka</p>
					<p>Rae-Bareli</p>
					<p>Raghunathpur</p>
				</div>
			</div>
			<hr className={styles.hr} />
			<div className={styles.container}>
				<div>
					<img
						src='https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_284/Logo_f5xzza'
						width='150px'
					/>
				</div>
				<div style={{ color: "white", fontSize: "20px", fontWeight: "700" }}>
					© 2023 Swiggy
				</div>
			</div>
		</div>
	);
};

export default Footer;
