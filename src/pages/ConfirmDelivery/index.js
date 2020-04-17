import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {Container, SendButton} from './styles';
import DeliveriesBackground from '~/components/DeliveriesBackground';
import Camera from '~/components/Camera';

export default function ConfirmDelivery({route}) {
  const {id: deliveryId} = route.params;

  const [imageFile, setImageFile] = useState(null);

  async function handleSend() {
    console.tron.log('sent');
    console.tron.log(imageFile);
    console.tron.log(deliveryId);
  }

  return (
    <DeliveriesBackground>
      <Container>
        <Camera deliveryId={deliveryId} setImageFile={setImageFile} />
        <SendButton onPress={handleSend} bgColor="#7D40E7">
          Send
        </SendButton>
      </Container>
    </DeliveriesBackground>
  );
}

ConfirmDelivery.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
