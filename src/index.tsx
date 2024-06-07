import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

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
