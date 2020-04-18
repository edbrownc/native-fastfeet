import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Alert} from 'react-native';
import {useSelector} from 'react-redux';
import {Container, SendButton, ImagePreview, CameraButton} from './styles';
import DeliveriesBackground from '~/components/DeliveriesBackground';
import Camera from '~/components/Camera';
import api from '~/services/api';

export default function ConfirmDelivery({navigation, route}) {
  const {id: deliveryId} = route.params;
  const courierId = useSelector(state => state.auth.courier.id);

  const [imageFile, setImageFile] = useState(null);

  async function handleSend() {
    if (!imageFile) {
      Alert.alert(
        'Signature required',
        'Please include a signature to confirm the delivery.'
      );
    } else {
      try {
        await api.put(`/couriers/${courierId}/activeorders/${deliveryId}`, {
          signature_id: imageFile.id,
          end_date: new Date(),
        });

        // Resets navigation state so it updates the deliveries in the main page
        navigation.reset({
          index: 0,
          routes: [{name: 'Deliveries'}],
        });

        Alert.alert(
          'Delivery confirmed',
          'The delivery was successfully updated!'
        );
      } catch (error) {
        Alert.alert(
          'Error confirming delivery',
          'There was an error confirming your delivery, try again later.'
        );
      }
    }
  }

  return (
    <DeliveriesBackground>
      <Container>
        {imageFile ? (
          <>
            <ImagePreview
              source={{
                uri: __DEV__
                  ? imageFile.url.replace('localhost', '10.0.2.2')
                  : imageFile.url,
              }}
            />
            <CameraButton onPress={() => setImageFile(null)}>
              <Icon name="photo-camera" size={30} style={{color: 'white'}} />
            </CameraButton>
            <SendButton onPress={handleSend} bgColor="#7D40E7">
              Send
            </SendButton>
          </>
        ) : (
          <Camera deliveryId={deliveryId} setImageFile={setImageFile} />
        )}
      </Container>
    </DeliveriesBackground>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
