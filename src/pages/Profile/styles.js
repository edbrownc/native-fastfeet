import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  margin-top: 83px;
  border-radius: 4px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Avatar = styled.Image`
  width: 136px;
  height: 136px;
  border-radius: 68px;
`;

export const ProfileInfo = styled.View`
  margin-top: 35px;
  width: 80%;
`;

export const Title = styled.Text`
  font-size: 12px;
  color: #666;
  margin-bottom: 5px;
  margin-top: 10px;
  font-weight: bold;
`;

export const Text = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: #444;
`;

export const LogoutButton = styled(Button)`
  margin-top: 35px;
  background: #e74040;
  width: 80%;
`;
