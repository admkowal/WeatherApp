import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

export default ({ weatherData, color }) => {

  	return (
    	<div>
      		<Sparklines data={weatherData}>
        		<SparklinesLine color={color} />
      		</Sparklines>
    	</div>
  	);
}