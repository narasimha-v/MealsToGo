import { Camera } from 'expo-camera';
import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { Text } from '../../../components/typography/';

const ProfileCamera = styled(Camera)`
	height: 100%;
	width: 100%;
`;

export const CameraScreen = () => {
	const [hasPermission, setHasPermission] = useState(null);
	const cameraRef = useRef();

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

	return (
		<ProfileCamera
			ref={(r) => (cameraRef.current = r)}
			type={Camera.Constants.Type.front}
		/>
	);
};
