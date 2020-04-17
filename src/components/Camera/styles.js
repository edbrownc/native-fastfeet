import {RNCamera} from 'react-native-camera';
import styled from 'styled-components';

export const CameraView = styled(RNCamera)`
  width: 90%;
  height: 444px;
  margin-top: 20px;
  background-color: #fff;
  align-self: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CameraButton = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 90px;
  height: 61px;
  width: 61px;
  align-self: center;
  justify-content: center;
  align-items: center;
`;
