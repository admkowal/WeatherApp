import { FETCH_FORECAST_WEATHER } from '../actions';

export default (state = [], action) => {

	switch (action.type) {

		case FETCH_FORECAST_WEATHER:
			return [action.payload.data, ...state];

    	default:
      		return state;

	}

};
