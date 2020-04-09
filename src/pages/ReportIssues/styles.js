import styled from 'styled-components/native';
import Input from '~/components/Input';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const IssueDesc = styled(Input)`
  margin-top: 10px;
  padding: 10px;
  height: 60%;
  width: 90%;
  align-self: center;
  border: 1px solid #0000001a;
  border-radius: 5px;
  align-items: flex-start;
`;

export const SendButton = styled(Button)`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;
