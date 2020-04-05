import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  padding: 15px;
  background-color: white;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 0px 10px 0px 10px;
`;

export const Profile = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Avatar = styled.Image`
  border-radius: 180px;
  height: 68px;
  width: 68px;
  margin-right: 10px;
`;

export const WelcomeView = styled.View`
  flex-direction: column;
`;

export const WelcomeLabel = styled.Text`
  color: #666;
  font-size: 12px;
`;

export const WelcomeName = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 22px;
`;

export const DeliveriesFilter = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
`;

export const FilterTitle = styled.Text`
  color: #444;
  font-weight: bold;
  font-size: 22px;
`;

export const FilterStatus = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Status = styled.Text`
  font-weight: bold;
  font-size: 12px;
  color: ${props => (props.selected ? '#7D40E7' : '#999')};
  text-decoration: ${props => (props.selected ? 'underline' : 'none')};
  margin-left: 15px;
`;
