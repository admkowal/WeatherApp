import { FETCH_CURRENT_WEATHER } from '../actions';

export default (state = [], action) => {

	switch (action.type) {

		case FETCH_CURRENT_WEATHER:
			return [action.payload.data, ...state];

    	default:
      		return state;

	}

};
