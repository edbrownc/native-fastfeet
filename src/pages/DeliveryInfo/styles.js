import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const InfoCard = styled.View`
  width: 90%;
  margin-top: 10px;
  padding: 10px 0;
  border: 1px solid #0000001a;
  border-radius: 5px;
  background-color: #fff;
  align-self: center;
`;

export const StatusCard = styled.View`
  width: 90%;
  margin-top: 10px;
  padding: 10px 0;
  border: 1px solid #0000001a;
  border-radius: 5px;
  background-color: #fff;
  align-self: center;
`;

export const ActionsCard = styled.View`
  width: 90%;
  margin-top: 10px;
  background-color: #fff;
  flex-direction: row;
  align-self: center;
  justify-content: space-between;
  background-color: #f8f9fd;
  border-radius: 5px;
  border: 1px solid #0000001a;
`;

export const InfoTitleView = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 5px 15px;
`;

export const Title = styled.Text`
  color: #7d40e7;
  font-weight: bold;
  margin-left: 5px;
  font-size: 14px;
`;

export const DeliveryInfoContainer = styled.View`
  flex-direction: column;
  margin: 5px 0px;
  padding: 0px 15px;
`;

export const InfoLabel = styled.Text`
  color: #999;
  font-weight: bold;
`;

export const InfoText = styled.Text`
  color: #666;
`;

export const DatesContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ActionButton = styled.TouchableOpacity`
  width: 33%;
  padding: 10px 0px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-right-color: #0000001a;
  border-right-width: ${props => (props.lastButton ? '0px' : '1px')};
`;

export const ActionButtonText = styled.Text`
  text-align: center;
  color: #999;
  max-width: 60%;
  margin-top: 5px;
`;
