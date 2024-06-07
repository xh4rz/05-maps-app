import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"

mapboxgl.accessToken =
	'pk.eyJ1IjoieGg0cnoiLCJhIjoiY2x2cnE5YWpkMGplMjJqbnV2dzdicW9zNiJ9.qKdD4f7Omb_wo1Si9t4HxQ';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

if (!navigator.geolocation) {
	alert('Tu navegador no tiene opción de Geolocation');
	throw new Error('Tu navegador no tiene opción de Geolocation');
}

root.render(
	<React.StrictMode>
		<MapsApp />
	</React.StrictMode>
);
