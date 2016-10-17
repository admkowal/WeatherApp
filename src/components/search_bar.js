import React from 'react';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();


const SearchBar = () => {

	return (
		<div>
    		<MuiThemeProvider>
    			<TextField
                    className="searchbar_input"
          			hintText="Choose a city..."
          			floatingLabelText="Get current weather data and 5 day forecast for any city"
          			floatingLabelFixed={true}
        		/>
            </MuiThemeProvider>
            <MuiThemeProvider>
                <FloatingActionButton
                    className="searchbar_btn"
                    secondary={true}>

                    <ContentAdd />
                </FloatingActionButton>
        	</MuiThemeProvider>
        </div>
	);
};

export default SearchBar;