import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
  justify-content: space-between;
`;

export const SendButton = styled(Button)`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;
