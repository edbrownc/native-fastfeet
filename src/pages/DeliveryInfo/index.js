import React from 'react';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useSelector} from 'react-redux';
import {Alert} from 'react-native';
import {
  Container,
  InfoContainer,
  StatusContainer,
  InfoTitleView,
  Title,
  DeliveryInfoContainer,
  InfoLabel,
  InfoText,
  DatesContainer,
  ActionsContainer,
  ActionButton,
  ActionButtonText,
} from './styles';
import DeliveriesBackground from '~/components/DeliveriesBackground';
import api from '~/services/api';

export default function DeliverInfo({navigation, route}) {
  const {delivery} = route.params;
  const courierId = useSelector(state => state.auth.courier.id);

  function getFormattedDate(date) {
    return date ? format(new Date(date), 'dd/MM/yyyy') : '- - / - - / - -';
  }

  async function handlePickupDelivery() {
    try {
      await api.put(`/couriers/${courierId}/activeorders/${delivery.id}`, {
        start_date: new Date(),
      });

      navigation.reset({
        index: 0,
        routes: [{name: 'Deliveries'}],
      });

      Alert.alert(
        'Delivery picked up',
        'The delivery was successfully updated!'
      );
    } catch (error) {
      Alert.alert(
        'Error picking up delivery',
        'There was an error picking up your delivery, try again later.'
      );
    }
  }

  return (
    <DeliveriesBackground>
      <Container>
        <InfoContainer>
          <InfoTitleView>
            <Icon name="local-shipping" size={20} style={{color: '#7D40E7'}} />
            <Title>Delivery info</Title>
          </InfoTitleView>
          <DeliveryInfoContainer>
            <InfoLabel>RECIPIENT</InfoLabel>
            <InfoText>{delivery.recipient.name}</InfoText>
          </DeliveryInfoContainer>
          <DeliveryInfoContainer>
            <InfoLabel>ADDRESS</InfoLabel>
            <InfoText>
              {delivery.recipient.street}, {delivery.recipient.number},{' '}
              {delivery.recipient.city} - {delivery.recipient.state},{' '}
              {delivery.recipient.zip_code}
            </InfoText>
          </DeliveryInfoContainer>
          <DeliveryInfoContainer>
            <InfoLabel>PRODUCT</InfoLabel>
            <InfoText>{delivery.product}</InfoText>
          </DeliveryInfoContainer>
        </InfoContainer>
        <StatusContainer>
          <InfoTitleView>
            <Icon name="event" size={20} style={{color: '#7D40E7'}} />
            <Title>Delivery status</Title>
          </InfoTitleView>
          <DeliveryInfoContainer>
            <InfoLabel>STATUS</InfoLabel>
            <InfoText>{delivery.status}</InfoText>
          </DeliveryInfoContainer>
          <DatesContainer>
            <DeliveryInfoContainer>
              <InfoLabel>PICKED UP</InfoLabel>
              <InfoText>{getFormattedDate(delivery.start_date)}</InfoText>
            </DeliveryInfoContainer>
            <DeliveryInfoContainer>
              <InfoLabel>DELIVERED</InfoLabel>
              <InfoText>{getFormattedDate(delivery.end_date)}</InfoText>
            </DeliveryInfoContainer>
          </DatesContainer>
        </StatusContainer>
        <ActionsContainer>
          <ActionButton
            disabled={delivery.start_date}
            onPress={handlePickupDelivery}>
            <Icon name="time-to-leave" size={20} style={{color: '#2CA42B'}} />
            <ActionButtonText>Pick Up Delivery</ActionButtonText>
          </ActionButton>
          <ActionButton
            onPress={() =>
              navigation.navigate('ReportIssues', {id: delivery.id})
            }>
            <Icon name="highlight-off" size={20} style={{color: '#E74040'}} />
            <ActionButtonText>Report Issue</ActionButtonText>
          </ActionButton>
          <ActionButton
            onPress={() =>
              navigation.navigate('DeliveryIssues', {id: delivery.id})
            }>
            <Icon name="info-outline" size={20} style={{color: '#E7BA40'}} />
            <ActionButtonText>View Issues</ActionButtonText>
          </ActionButton>
          <ActionButton
            disabled={delivery.end_date}
            onPress={() =>
              navigation.navigate('ConfirmDelivery', {id: delivery.id})
            }
            lastButton>
            <Icon name="alarm-on" size={20} style={{color: '#7D40E7'}} />
            <ActionButtonText>Confirm Delivery</ActionButtonText>
          </ActionButton>
        </ActionsContainer>
      </Container>
    </DeliveriesBackground>
  );
}

DeliverInfo.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    reset: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      delivery: PropTypes.shape({
        id: PropTypes.number,
        product: PropTypes.string,
        start_date: PropTypes.string,
        end_date: PropTypes.string,
        created_at: PropTypes.string,
        status: PropTypes.string,
        recipient: PropTypes.shape({
          name: PropTypes.string,
          street: PropTypes.string,
          number: PropTypes.number,
          additional_address: PropTypes.string,
          state: PropTypes.string,
          city: PropTypes.string,
          zip_code: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
