import React from 'react';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/MaterialIcons';

import format from 'date-fns/format';
import {
  Container,
  DeliveryHeader,
  DeliveryTitle,
  StatusBarContainer,
  ProgressStatusTextContainer,
  CurrentStatusView,
  ProgressStatusText,
  StatusBar,
  DeliveryInfoContainer,
  DeliveryInfo,
  InfoLabel,
  InfoText,
  ViewDetailsLabel,
} from './styles';

export default function DeliveryCard({
  id,
  start_date,
  end_date,
  created_at,
  city,
  onClickDetails,
}) {
  return (
    <Container>
      <DeliveryHeader>
        <Icon name="local-shipping" size={22} style={{color: '#7D40E7'}} />
        <DeliveryTitle>Delivery {id}</DeliveryTitle>
      </DeliveryHeader>
      <StatusBarContainer>
        <CurrentStatusView active />
        <StatusBar />
        <CurrentStatusView active={start_date !== null} />
        <StatusBar />
        <CurrentStatusView active={end_date !== null} />
      </StatusBarContainer>
      <ProgressStatusTextContainer>
        <ProgressStatusText>Awaiting pick up</ProgressStatusText>
        <ProgressStatusText center>Picked up</ProgressStatusText>
        <ProgressStatusText>Delivered</ProgressStatusText>
      </ProgressStatusTextContainer>
      <DeliveryInfoContainer>
        <DeliveryInfo>
          <InfoLabel>Date</InfoLabel>
          <InfoText>{format(new Date(created_at), 'dd/MM/yyyy')}</InfoText>
        </DeliveryInfo>
        <DeliveryInfo>
          <InfoLabel>City</InfoLabel>
          <InfoText>{city}</InfoText>
        </DeliveryInfo>
        <DeliveryInfo>
          <ViewDetailsLabel onPress={onClickDetails}>
            View details
          </ViewDetailsLabel>
        </DeliveryInfo>
      </DeliveryInfoContainer>
    </Container>
  );
}

DeliveryCard.defaultProps = {
  start_date: null,
  end_date: null,
};

DeliveryCard.propTypes = {
  id: PropTypes.number.isRequired,
  created_at: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  onClickDetails: PropTypes.func.isRequired,
  start_date: PropTypes.string,
  end_date: PropTypes.string,
};
