import axios from 'axios';

const directionsApi = axios.create({
	baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
	params: {
		alternatives: false,
		geometries: 'geojson',
		overview: 'simplified',
		steps: false,
		access_token:
			'pk.eyJ1IjoieGg0cnoiLCJhIjoiY2x2cnE5YWpkMGplMjJqbnV2dzdicW9zNiJ9.qKdD4f7Omb_wo1Si9t4HxQ'
	}
});

export default directionsApi;
