import React from 'react';
import { Sparklines, SparklinesBars } from 'react-sparklines';

export default ({ weatherData, style }) => {

  	return (
    	<div>
      		<Sparklines data={weatherData}>
      			<SparklinesBars style={style} />
      		</Sparklines>
    	</div>
  	);
}