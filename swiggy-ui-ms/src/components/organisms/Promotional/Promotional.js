import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Img = styled.img`
	cursor: pointer;
	display: block;
	width: 250px;
	height: 250px;

	&:hover {
		transform: scale(1.05);
		transition: transform 0.5s cubic-bezier(0.215, 0.61, 0.355, 1);
		backface-visibility: visible;
	}
`;

const Wrapper = styled.header`
	max-width: 100%;
	min-width: 100%;
	position: relative;
	margin: auto;
	margin-top: 60px;
	padding: 20px 0;
	background: #fff;
`;

const settings = {
	dots: false,
	infinite: false,
	speed: 500,
	slidesToShow: 4,
	slidesToScroll: 1
};

function Promotions() {
	return (
		<Wrapper>
			<div style={{ background: '#171a29', padding: '30px 20px' }}>
				<div className="container my-3">
					<Slider {...settings}>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jkcbdbr3qdjuzgjepkjx"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/xax7qfs6dbmzdmzxq1dh"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/c59djn2nskqlf0ork6wc"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/qd0mwkv1mk3bxyy3x5fm"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/rl8zesrkte88twzgbma5"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/lgxbfmjfi9ba7sqbliek"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/ztpd5q9awnmmnefczn5x"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/jcjcvebiczqe5jr2vijo"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rs4krvosxjt6i5wyefvy"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/rng/md/carousel/production/kmewp8efed0ev7yvfyx6"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/e8qsywpath9uli7tnikc"
								alt="promotion img"
							/>
						</div>
						<div className="col">
							<Img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_520,h_520/marketing-dashboard/carousel/bmp2yqaaqouptllxmkei"
								alt="promotion img"
							/>
						</div>
					</Slider>
				</div>
			</div>
		</Wrapper>
	);
}

export default Promotions;