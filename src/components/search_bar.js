import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import { fetchWeather } from '../actions';


const SearchBar = ({ fetchWeather }) => {

    let inputTerm = "";

    const onInputChange = (e) => inputTerm = e.target.value;

    const onSubmit = (e) => fetchWeather(inputTerm);


	return (
		<div>
    		<MuiThemeProvider>
    			<TextField
                    onChange={onInputChange}
                    className="searchbar_input"
          			hintText="Choose a city..."
          			floatingLabelText="Get current weather data and 5 day forecast for any city"
          			floatingLabelFixed={true}
        		/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <FloatingActionButton
                    onClick={onSubmit}
                    className="searchbar_btn"
                    secondary={true}>

                    <ContentAdd />
                </FloatingActionButton>
        	</MuiThemeProvider>
        </div>
	);
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchBar);