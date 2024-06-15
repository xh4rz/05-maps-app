import axios from 'axios';

const searchApi = axios.create({
	baseURL: 'https://api.mapbox.com/search/geocode/v6/forward',
	params: {
		limit: 5,
		language: 'es',
		access_token:
			'pk.eyJ1IjoieGg0cnoiLCJhIjoiY2x2cnE5YWpkMGplMjJqbnV2dzdicW9zNiJ9.qKdD4f7Omb_wo1Si9t4HxQ'
	}
});

export default searchApi;
