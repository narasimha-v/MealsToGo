import { Lato_400Regular, useFonts as useLato } from '@expo-google-fonts/lato';
import {
	Oswald_400Regular,
	useFonts as useOswald
} from '@expo-google-fonts/oswald';
import * as firebase from 'firebase';
import React from 'react';
import { ThemeProvider } from 'styled-components/native';
import { Navigation } from './src/infrastructure/navigation';
import { theme } from './src/infrastructure/theme';
import { FavouritesContextPropvider } from './src/services/favourites';
import { LocationContextProvider } from './src/services/location';
import { RestaurantsContextProvider } from './src/services/restaurants';
import { AuthenticationContextProvider } from './src/services/authentication';

const firebaseConfig = {
	apiKey: 'AIzaSyCuMxLyX3f4SO5H_GjtbhYZw_JUqf0MIKI',
	authDomain: 'mealstogo-ef5e0.firebaseapp.com',
	projectId: 'mealstogo-ef5e0',
	storageBucket: 'mealstogo-ef5e0.appspot.com',
	messagingSenderId: '21096260239',
	appId: '1:21096260239:web:9df26703aae5eaa21206fa'
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

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
			<AuthenticationContextProvider>
				<FavouritesContextPropvider>
					<LocationContextProvider>
						<RestaurantsContextProvider>
							<Navigation />
						</RestaurantsContextProvider>
					</LocationContextProvider>
				</FavouritesContextPropvider>
			</AuthenticationContextProvider>
		</ThemeProvider>
	);
}
