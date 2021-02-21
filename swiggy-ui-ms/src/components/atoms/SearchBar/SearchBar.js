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
const SearchBar = ({ children }) => {
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
};

export default SearchBar;
