import AsyncStorage from '@react-native-async-storage/async-storage';
import { Camera } from 'expo-camera';
import React, { useContext, useEffect, useRef, useState } from 'react';
import { TouchableOpacity, View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/';
import { AuthenticationContext } from '../../../services/authentication';

const ProfileCamera = styled(Camera)`
	height: 100%;
	width: 100%;
`;

export const CameraScreen = ({ navigation }) => {
	const [hasPermission, setHasPermission] = useState(null);
	const cameraRef = useRef();
	const { user } = useContext(AuthenticationContext);

	useEffect(() => {
		(async () => {
			const { status } = await Camera.requestPermissionsAsync();
			setHasPermission(status === 'granted');
		})();
	}, []);

	if (hasPermission === null) {
		return <View />;
	}

	if (hasPermission === false) {
		return <Text>No access to camera</Text>;
	}

	const snap = async () => {
		if (cameraRef) {
			const photo = await cameraRef.current.takePictureAsync();
			AsyncStorage.setItem(`${user.uid}-photo`, photo.uri);
			navigation.goBack();
		}
	};

	return (
		<TouchableOpacity onPress={snap}>
			<ProfileCamera
				ref={(r) => (cameraRef.current = r)}
				type={Camera.Constants.Type.front}
			/>
		</TouchableOpacity>
	);
};
