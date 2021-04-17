import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Login from '../../organisms/LoginDrawer';
import Location from '../../organisms/LocationDrawer';

const Wrapper = styled.div`
	overflow: hidden;
	padding: 10px 0;
	margin: 0;
	box-sizzing: border-box;
	font-family: sans-serif;

	.logo-container {
		padding: 10px;
	}

	.nav-item {
		padding: 10px 10px;
		.nav-link {
			text-decoration: none;
			color: #333;
			font-size: 1.1rem;
			font-weight: 500;
			&:hover {
				color: #fc8019;
			}
		}
	}
	box-shadow: 0 15px 40px -20px rgba(40, 44, 63, 0.15);
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	height: 80px;
	background: #fff;
	z-index: 1000;
`;

const Address = styled.button`
	border: 0px;
	margin: auto 0px;
	background: #fff;
	color: #686b78;
	font-size: 14px;
	font-weight: 300;
	line-height: 1.2;
	letter-spacing: 0;
	text-overflow: ellipsis;
	overflow: hidden;
	white-space: nowrap;
	&:hover {
		cursor: pointer;
		color: #fc8019;
	}
`;
const Row = styled.div`
	max-width: 1200px;
	min-width: 1200px;
	position: relative;
	margin: 0 auto;
	height: 80px;
`;

const SVG = styled.svg`
	stroke: currentColor;
	fill: #fc8019;
	stroke-width: 0;
	&:hover {
		transform: scale(1.05);
	}
`;

function CustomerName({ name }) {
	if (name.length < 2) {
		return <Login />;
	} else {
		return (
			<Link to="/my-account" type="button" className="nav-link btn btn-lg align-self-center text-capitalize">
				<i className="fa fa-user mr-1" /> {name}
			</Link>
		);
	}
}

function Navigator() {
	const [ name, setName ] = useState('');
	const [ placeName, setPlaceName ] = useState('');

	useEffect(() => {
		if (localStorage.getItem('customerData') == null) {
			setName('');
		} else {
			setName(JSON.parse(localStorage.getItem('customerData')).name);
		}

		if (localStorage.getItem('Coordinates') == null) {
			setPlaceName('Delhi, India');
		} else {
			setPlaceName(JSON.parse(localStorage.getItem('Coordinates')).place_name);
		}
	}, []);
	console.log(name);

	return (
		<Wrapper className="container-fluid shadow">
			<Row className="row header-nav">
				<div className="col-lg-6  mt-0">
					<div className="logo-container-fluid">
						<ul className="list-inline">
							<li className="list-inline-item">
								<Link to="/Restaurants" type="button" className="btn btn-lg">
									<SVG viewBox="0 0 16 25" height="49" width="34" fill="#fc8019">
										<path
											d="M15.5397581,11.1409928 C15.6509608,10.509712 15.5235868,10.0243137 15.1951696,9.77089093 C14.7011461,9.38969453 13.9591625,9.18240372 12.1918981,9.18240372 C10.8843181,9.18240372 9.48050894,9.18382005 8.88067307,9.18351656 C8.824972,9.17259055 8.62352934,9.10693329 8.6159428,8.86342483 L8.60775734,4.99753828 C8.60755774,4.75352397 8.80231214,4.55503473 9.04308494,4.55452889 C9.28425707,4.55412423 9.47990987,4.75190531 9.4801096,4.99571727 C9.4801096,4.99571727 9.48609894,7.09432117 9.48669787,7.84012275 C9.48669787,7.91215351 9.52822427,8.08029271 9.69013694,8.12409793 C10.745764,8.40908477 16.0819961,8.20068119 15.9990433,7.22017265 C15.5462467,3.15296419 12.1495732,0 8.02559027,0 C6.72689454,0 5.497376,0.313010053 4.40860776,0.868112227 C1.80303074,2.22496121 -0.0474859557,4.9636474 0.000928137643,8.12703176 C0.0352672176,10.3690901 1.49467783,14.3542524 2.38809268,14.9457747 C2.7998621,15.2186215 3.34210002,15.1176569 5.7669976,15.1176569 C6.86664654,15.1176569 7.89062974,15.1212989 8.39383694,15.1236259 C8.44614414,15.1335401 8.72045734,15.1971741 8.72045734,15.4525191 L8.726846,18.391212 C8.72744507,18.6353275 8.53249094,18.8337155 8.2913188,18.8338167 C8.050546,18.8342213 7.85499294,18.6366427 7.85459374,18.3927295 C7.85459374,18.3927295 7.8760556,17.2135293 7.8760556,16.7737573 C7.8760556,16.6719836 7.88334267,16.4971673 7.59006307,16.3649424 C6.6241768,15.929824 3.48764179,16.1924529 3.31165404,16.6725905 C3.24427359,16.8573211 3.5949514,17.5713563 4.13479358,18.4869157 C5.93330254,21.3601537 7.6990696,23.6004924 7.98456307,23.9589263 C8.00223174,23.9744048 8.0192016,23.9886693 8.03437467,24 C8.26985694,23.7099548 14.5488164,16.7550415 15.5397581,11.1409928 Z"
											id="Swiggy_Filled"
										/>
									</SVG>
								</Link>
							</li>
							<li className="list-inline-item ">
								<Location />
							</li>
							<Address
								className="list-inline-item text-truncate text-capitalize"
								style={{ maxWidth: '230px' }}
							>
								{placeName}
							</Address>
							<li className="list-inline-item">
								<button type="button" className="btn btn-sm">
									<i className="fas fa-chevron-down" style={{ color: '#fc8019' }} />
								</button>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-lg-6">
					<div className="container">
						<nav className="d-flex">
							<div className="nav-item ">
								<Link className="nav-link">
									<i className="fa fa-search" /> Search
								</Link>
							</div>
							<div className="nav-item">
								<Link className="nav-link">
									<i className="fa fa-home" /> Help
								</Link>
							</div>
							<div className="nav-item text-capitalize">
							    <Login />
							</div>
							<div className="nav-item">
								<button
									type="button"
									class="btn"
									data-toggle="modal"
									data-target="#CartModal"
									className="nav-link"
									style={{
										border: 'none',
										background: 'white'
									}}
								>
									<i className="fa fa-shopping-cart" /> Cart
								</button>
							</div>
						</nav>
					</div>
				</div>
			</Row>
		</Wrapper>
	);
}

export default Navigator;
