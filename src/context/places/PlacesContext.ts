import { createContext } from 'react';

export interface PlacesContextProps {
	isLoading: true;
	userLocation?: [number, number];
}

export const PlacesContext = createContext<PlacesContextProps>(
	{} as PlacesContextProps
);
