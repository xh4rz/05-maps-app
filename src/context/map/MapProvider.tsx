import { useContext, useEffect, useReducer } from 'react';
import { Map, Marker, Popup } from 'mapbox-gl';
import { MapContext } from './MapContext';
import { mapReducer } from './mapReducer';
import { PlacesContext } from '../';
import { directionsApi } from '../../apis';
import { DirectionsResponse } from '../../interfaces/directions';

export interface MapState {
	isMapReady: boolean;
	map?: Map;
	markers: Marker[];
}

const INITIAL_STATE: MapState = {
	isMapReady: false,
	map: undefined,
	markers: []
};

interface Props {
	children: JSX.Element | JSX.Element[];
}

export const MapProvider = ({ children }: Props) => {
	const [state, dispatch] = useReducer(mapReducer, INITIAL_STATE);

	const { places } = useContext(PlacesContext);

	useEffect(() => {
		state.markers.forEach((marker) => marker.remove());

		const newMarkers: Marker[] = [];

		for (const place of places) {
			const [lng, lat] = place.geometry.coordinates;

			const popup = new Popup().setHTML(
				`<h6>${place.properties.name}</h6> <p>${place.properties.full_address}</p>`
			);

			const newMarker = new Marker()
				.setPopup(popup)
				.setLngLat([lng, lat])
				.addTo(state.map!);

			newMarkers.push(newMarker);
		}

		dispatch({ type: 'setMarkers', payload: newMarkers });
	}, [places]);

	const setMap = (map: Map) => {
		const myLocationPopup = new Popup().setHTML(
			`<h4>Aquí estoy </h4> <p>En algún lugar del mundo</p>`
		);

		new Marker({ color: '#61DAFB' })
			.setLngLat(map.getCenter())
			.setPopup(myLocationPopup)
			.addTo(map);

		dispatch({ type: 'setMap', payload: map });
	};

	const getRouteBetweenPoints = async (
		start: [number, number],
		end: [number, number]
	) => {
		const resp = await directionsApi.get<DirectionsResponse>(
			`/${start.join(',')};${end.join(',')}`
		);

		const { distance, duration, geometry } = resp.data.routes[0];

		let kms = distance / 1000;
		kms = Math.round(kms * 100);
		kms /= 100;

		const minutes = Math.floor(duration / 60);

		console.log({ kms, minutes });
	};

	return (
		<MapContext.Provider
			value={{
				...state,
				// Methods
				setMap,
				getRouteBetweenPoints
			}}
		>
			{children}
		</MapContext.Provider>
	);
};
