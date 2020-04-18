import {RNCamera} from 'react-native-camera';
import styled from 'styled-components';

export const CameraView = styled(RNCamera)`
  flex: 1;
  margin-top: 20px;
  align-self: center;
  flex-direction: column;
  justify-content: flex-end;
`;

export const CameraButton = styled.TouchableOpacity`
  background-color: rgba(0, 0, 0, 0.2);
  border-radius: 90px;
  height: 61px;
  width: 61px;
  margin-bottom: 10px;
  justify-content: center;
  align-items: center;
`;
