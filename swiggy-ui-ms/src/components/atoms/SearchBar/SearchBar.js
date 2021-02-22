/**
 *
 * SearchBar
 *
 */
import React from 'react';
import { TextField } from '@material-ui/core';
import { Autocomplete } from '@material-ui/lab';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
	Div,
	InnerDiv,
	MainImg,
	Logo,
	Search,
	City,
	CardContainer,
	Card,
	CardImg
} from '../../templates/Landing/landing.style';
class SearchBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			visible: false
		};
	}

	handleInputChange = (e) => {
		// const history = useHistory();
		axios({
			method: 'get',
			url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${e.target.value}.json`,
			params: {
				access_token: ''
			}
		})
			.then((res) => {
				this.setState({
					data: res.data.features
				});
				// console.log(res);
				this.getLocation(res.data.features);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	getLocation = (data) => {
		data.map((item, i) => {
			if (i === 0) {
				var long = item.center[0];
				var lat = item.center[1];
				var temp = item.place_name.split(', ');
				var area = temp[0];
				temp.shift();
				var place_name = temp.join(', ');

				const Coordinates = {
					lat,
					long,
					area,
					place_name
				};
				// console.log(Coordinates);
				localStorage.setItem('Coordinates', JSON.stringify(Coordinates));
			}
		});
	};
	render() {
		return (
			<Search className="row " style={{ border: '1px solid #fc8019' }}>
				<div className="col-10 text-left align-self-center">
					<div className="row">
						<Autocomplete
							className="col-lg-9 col-md-8 col-sm-8 mr-0  text-left form-control-plaintext form-control-lg ml-2  text-muted font-weight-bold"
							freeSolo
							id="free-solo-2-demo"
							disableClearable
							options={this.state.data.map((place) => place.place_name)}
							renderInput={(params) => (
								<TextField
									className="text-left form-control-plaintext form-control-lg text-muted font-weight-bold"
									id="outlined-helperText"
									placeholder="Enter Your delivery location"
									onChange={this.handleInputChange}
									{...params}
									InputProps={{
										...params.InputProps,
										type: 'search'
									}}
									// variant='outlined'
									fullWidth
									style={{
										// border:'1px solid red',
										fontSize: '20px'
									}}
								/>
							)}
						/>
						<button type="button" className="col-2  btn btn-sm align-self-center text-right ml-4">
							Locate Me
						</button>
					</div>
				</div>
				<button
					type="button"
					className="col-2 btn btn-lg"
					onClick={this.goTo}
					style={{
						height: '100%',
						color: 'white',
						backgroundColor: '#fc8019',
						borderRadius: '0px'
					}}
				>
					<h6 className="font-weight-bold">FIND FOOD</h6>
				</button>
			</Search>
		);
	}
}

export default SearchBar;
