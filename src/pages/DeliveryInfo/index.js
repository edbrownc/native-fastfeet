import React from 'react';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  InfoCard,
  StatusCard,
  InfoTitleView,
  Title,
  DeliveryInfoContainer,
  InfoLabel,
  InfoText,
  DatesContainer,
  ActionsCard,
  ActionButton,
  ActionButtonText,
} from './styles';
import DeliveriesBackground from '~/components/DeliveriesBackground';

export default function DeliverInfo({navigation, route}) {
  const {delivery} = route.params;

  return (
    <DeliveriesBackground>
      <Container>
        <InfoCard>
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
        </InfoCard>
        <StatusCard>
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
              <InfoText>
                {delivery.start_date
                  ? format(new Date(delivery.start_date), 'dd/MM/yyyy')
                  : '- - / - - / - -'}
              </InfoText>
            </DeliveryInfoContainer>
            <DeliveryInfoContainer>
              <InfoLabel>DELIVERED</InfoLabel>
              <InfoText>
                {delivery.end_date
                  ? format(new Date(delivery.end_date), 'dd/MM/yyyy')
                  : '- - / - - / - -'}
              </InfoText>
            </DeliveryInfoContainer>
          </DatesContainer>
        </StatusCard>
        <ActionsCard>
          <ActionButton>
            <Icon name="highlight-off" size={20} style={{color: '#E74040'}} />
            <ActionButtonText>Inform Issue</ActionButtonText>
          </ActionButton>
          <ActionButton
            onPress={() =>
              navigation.navigate('DeliveryProblems', {id: delivery.id})
            }>
            <Icon name="info-outline" size={20} style={{color: '#E7BA40'}} />
            <ActionButtonText>View Issues</ActionButtonText>
          </ActionButton>
          <ActionButton lastButton>
            <Icon name="alarm-on" size={20} style={{color: '#7D40E7'}} />
            <ActionButtonText>Confirm Delivery</ActionButtonText>
          </ActionButton>
        </ActionsCard>
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
          number: PropTypes.string,
          additional_address: PropTypes.string,
          state: PropTypes.string,
          city: PropTypes.string,
          zip_code: PropTypes.string,
        }),
      }),
    }),
  }).isRequired,
};
