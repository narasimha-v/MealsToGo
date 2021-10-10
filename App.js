import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald
} from '@expo-google-fonts/oswald';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { FavouritesContextPropvider } from './src/services/favourites';
import { LocationContextProvider } from './src/services/location';
import { RestaurantsContextProvider } from './src/services/restaurants';

export default function App() {
	const [oswaldLoaded] = useOswald({
		Oswald_400Regular
	});

	const [latoLoaded] = useLato({
		Lato_400Regular
	});

	if (!oswaldLoaded || !latoLoaded) {
		return null;
	}

	return (
		<ThemeProvider theme={theme}>
			<FavouritesContextPropvider>
				<LocationContextProvider>
					<RestaurantsContextProvider>
						<Navigation />
					</RestaurantsContextProvider>
				</LocationContextProvider>
			</FavouritesContextPropvider>
		</ThemeProvider>
	);
}
