import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components';

export default styled(LinearGradient).attrs({
  colors: ['#FFF', '#7D40E7'],
  start: {x: 0, y: 0.3},
  end: {x: 0, y: 0},
  locations: [0.6, 0.6],
})`
  flex: 1;
`;
