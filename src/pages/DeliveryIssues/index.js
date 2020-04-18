import React, {useEffect, useState} from 'react';
import {Alert, FlatList} from 'react-native';
import {format} from 'date-fns';
import PropTypes from 'prop-types';
import api from '~/services/api';

import DeliveriesBackground from '~/components/DeliveriesBackground';

import {
  Container,
  Title,
  IssueContainer,
  IssueDesc,
  IssueDate,
  IssuesList,
  IssuesListContainer,
} from './styles';

export default function DeliveryIssues({route}) {
  const {id: delivery_id} = route.params;
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    async function loadDeliveryIssues() {
      try {
        const response = await api.get(`orders/${delivery_id}/issues`);

        if (response.data.length > 0) {
          setIssues(
            response.data.map(item => {
              return {
                ...item,
                id: item.id,
                created_at: format(new Date(item.createdAt), 'dd/MM/yyyy'),
              };
            })
          );
        } else {
          setIssues([
            {
              id: 0,
              description: 'No issues reported',
            },
          ]);
        }
      } catch (error) {
        Alert.alert(
          'Error retrieving delivery issues.',
          'There was an error retrieving the issues for this delivery!'
        );
      }
    }
    loadDeliveryIssues();
  }, [delivery_id]);

  return (
    <DeliveriesBackground>
      <Container>
        <Title>Delivery {delivery_id}</Title>
        <IssuesListContainer>
          <IssuesList>
            <FlatList
              data={issues}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <IssueContainer>
                  <IssueDesc>{item.description}</IssueDesc>
                  <IssueDate>{item.created_at}</IssueDate>
                </IssueContainer>
              )}
            />
          </IssuesList>
        </IssuesListContainer>
      </Container>
    </DeliveriesBackground>
  );
}

DeliveryIssues.propTypes = {
  route: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.number,
    }),
  }).isRequired,
};
