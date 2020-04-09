import React, {useState} from 'react';
import {Alert} from 'react-native';
import PropTypes from 'prop-types';
import {Container, IssueDesc, SendButton} from './styles';
import DeliveriesBackground from '~/components/DeliveriesBackground';

import api from '~/services/api';

export default function ReportIssues({navigation, route}) {
  const [loading, setLoading] = useState(false);
  const [description, setDescription] = useState('');
  const {id} = route.params;

  async function handleSend() {
    if (description.length > 0) {
      setLoading(true);

      try {
        await api.post(`orders/${id}/problems`, {
          description,
        });

        navigation.goBack();

        Alert.alert(
          'Report successful',
          'Your delivery issue was successfuly reported'
        );
      } catch (error) {
        Alert.alert(
          'Reporting error',
          'There was an error reporting your issue'
        );
      }
      setLoading(false);
    } else {
      Alert.alert(
        'No description informed',
        'Please describe the issue encountered during delivery'
      );
    }
  }

  return (
    <DeliveriesBackground>
      <Container>
        <IssueDesc
          multiline
          value={description}
          onChangeText={setDescription}
          returnKeyType="send"
          onSubmitEditing={handleSend}
          placeholder="Describe the issue here..."
        />
        <SendButton onPress={handleSend} loading={loading} bgColor="#7D40E7">
          Send
        </SendButton>
      </Container>
    </DeliveriesBackground>
  );
}

ReportIssues.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
    goBack: PropTypes.func,
  }).isRequired,
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
