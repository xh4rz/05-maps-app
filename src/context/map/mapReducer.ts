import { MapState } from './MapProvider';
import { Map } from 'mapbox-gl';

type MapAction = {
	type: 'setMap';
	payload: Map;
};

export const mapReducer = (state: MapState, action: MapAction): MapState => {
	switch (action.type) {
		// case value:

		//     break;

		default:
			return state;
	}
};
