import styled from 'styled-components/native';
import Button from '~/components/Button';

export const Container = styled.View`
  flex: 1;
`;

export const SendButton = styled(Button)`
  width: 90%;
  align-self: center;
  margin-top: 20px;
`;

export const ImagePreview = styled.Image`
  width: 90%;
  height: 80%;
  margin-top: 20px;
  align-self: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CameraButton = styled.TouchableOpacity`
  position: absolute;
  top: 70%;
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 90px;
  height: 61px;
  width: 61px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;
