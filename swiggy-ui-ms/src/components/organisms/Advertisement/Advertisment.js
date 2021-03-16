/**
 *
 * Advertisment
 *
 */
import React from 'react';
import PropTypes from 'prop-types';

const Advertisement = ({ children }) => {
	return (
		<div style={{ fontFamily: 'sans-serif', position: 'relative' }} className="container-fluid">
			<div className="row">
				<div className="col-lg-5 mt-4" style={{ marginLeft: '8%' }}>
					<div
						style={{
							fontSize: '40px',
							fontWeight: '600',
							width: '350px',
							lineHeight: '1',
							letterSpacing: '-.45px',
							padding: '5%',
							marginTop: '10%',
							fontFamily: 'sans-serif',
							textAlign: 'left'
						}}
					>
						Restaurants in your pocket
					</div>
					<div
						className="text-muted"
						style={{
							fontSize: '20px',
							width: '400px',
							fontWeight: '300',
							marginLeft: '25px',
							paddingBottom: '60px',
							textAlign: 'left'
						}}
					>
						Order from your favorite restaurants & track on the go, with the all-new Swiggy app.
					</div>
					<div className="row" style={{ marginLeft: '2%' }}>
						<div className="col-4">
							<img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/play_ip0jfp"
								alt="googleplay"
								className="img-fluid"
							/>
						</div>
						<div className="col-4">
							<img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_108/iOS_ajgrty"
								alt="apple"
								className="img-fluid mb-5"
							/>
						</div>
						<div className="mb-5" />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="row">
						<div className="col-lg-6">
							<img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/pixel_wbdy4n"
								alt="image1"
								className="img-fluid"
							/>
						</div>
						<div className="col-lg-6" style={{ position: 'absolute', bottom: 0, right: 0 }}>
							<img
								src="https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_768,h_978/iPhone_wgconp_j0d1fn"
								alt="image2"
								className="img-fluid"
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Advertisement;
