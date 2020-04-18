import React, {useRef} from 'react';
import PropTypes from 'prop-types';
import {RNCamera} from 'react-native-camera';
import Icon from 'react-native-vector-icons/MaterialIcons';
import api from '~/services/api';

import {CameraView, CameraButton} from './styles';

export default function Camera({deliveryId, setImageFile}) {
  const camera = useRef(null);

  async function savePicture(image) {
    const file = new FormData();

    const extension = image.uri.split('/Camera/')[1].split('.')[1];

    file.append('file', {
      uri: image.uri,
      type: `image/${extension}`,
      name: `order-confirmation-${deliveryId}.${extension}`,
    });

    const response = await api.post('files', file, {
      headers: {'Content-Type': 'multipart/form-data'},
    });

    const {id, url} = response.data;

    setImageFile({id, url});
  }

  async function takePicture() {
    if (camera) {
      const options = {quality: 0.5, base64: true};
      const data = await camera.current.takePictureAsync(options);
      savePicture(data);
    }
  }

  return (
    <CameraView
      ref={camera}
      type={RNCamera.Constants.Type.back}
      flashMode={RNCamera.Constants.FlashMode.off}
      port
      androidCameraPermissionOptions={{
        title: 'Permission to use camera',
        message: 'We need your permission to use your camera',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}
      androidRecordAudioPermissionOptions={{
        title: 'Permission to use audio recording',
        message: 'We need your permission to use your audio',
        buttonPositive: 'Ok',
        buttonNegative: 'Cancel',
      }}>
      <CameraButton onPress={takePicture}>
        <Icon name="photo-camera" size={30} style={{color: 'white'}} />
      </CameraButton>
    </CameraView>
  );
}

Camera.propTypes = {
  deliveryId: PropTypes.string.isRequired,
  setImageFile: PropTypes.func.isRequired,
};
