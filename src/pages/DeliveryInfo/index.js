import React from 'react';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

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

export default function DeliverInfo({navigation, route}) {
  const {delivery} = route.params;

  function getFormattedDate(date) {
    return date ? format(new Date(date), 'dd/MM/yyyy') : '- - / - - / - -';
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
          <ActionButton lastButton>
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
