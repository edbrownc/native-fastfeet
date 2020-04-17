import React, {useEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {useDispatch, useSelector} from 'react-redux';
import {Alert, ActivityIndicator} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import PropTypes from 'prop-types';

import {
  Container,
  Header,
  Profile,
  Avatar,
  WelcomeView,
  WelcomeLabel,
  WelcomeName,
  DeliveriesFilter,
  FilterTitle,
  FilterStatus,
  Status,
} from './styles';
import {signOut} from '~/store/modules/auth/actions';
import api from '~/services/api';
import DeliveryCard from '~/components/DeliveryCard';

export default function Deliveries({navigation}) {
  const [loading, setLoading] = useState(false);
  const [activeDeliveries, setActiveDeliveries] = useState(true);
  const [deliveries, setDeliveries] = useState([]);

  const courier = useSelector(state => state.auth.courier);
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadDeliveries() {
      try {
        let deliveriesUrl = 'activeorders';

        if (!activeDeliveries) {
          deliveriesUrl = 'deliveredorders';
        }

        const res = await api.get(`couriers/${courier.id}/${deliveriesUrl}`);

        setDeliveries(res.data);
      } catch (error) {
        Alert.alert(
          'Error loading deliveries',
          'There was an issue loading your deliveries!'
        );
      }
      setLoading(false);
    }

    setLoading(true);
    loadDeliveries();
  }, [activeDeliveries, courier]);

  function handleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Header>
        <Profile>
          <Avatar
            source={{
              uri: courier.avatar
                ? `http://10.0.2.2:3333/files/${courier.avatar.path}`
                : `https://api.adorable.io/avatar/50/${courier.name}.png`,
            }}
            alt="Avatar"
          />
          <WelcomeView>
            <WelcomeLabel>Welcome back,</WelcomeLabel>
            <WelcomeName>{courier.name}</WelcomeName>
          </WelcomeView>
        </Profile>
        <Icon
          name="exit-to-app"
          size={24}
          style={{color: '#E74040'}}
          onPress={handleSignOut}
        />
      </Header>
      <DeliveriesFilter>
        <FilterTitle>Deliveries</FilterTitle>
        <FilterStatus>
          <Status
            onPress={() => setActiveDeliveries(true)}
            selected={activeDeliveries}>
            Pending
          </Status>
          <Status
            onPress={() => setActiveDeliveries(false)}
            selected={!activeDeliveries}>
            Delivered
          </Status>
        </FilterStatus>
      </DeliveriesFilter>

      {loading ? (
        <ActivityIndicator size="large" color="#7D40E7" />
      ) : (
        <FlatList
          data={deliveries}
          keyExtractor={delivery => delivery.id}
          renderItem={({item}) => (
            <DeliveryCard
              id={item.id}
              city={item.recipient.city}
              created_at={item.created_at}
              start_date={item.start_date}
              end_date={item.end_date}
              onClickDetails={() =>
                navigation.navigate('DeliveryInfo', {
                  delivery: item,
                })
              }
            />
          )}
        />
      )}
    </Container>
  );
}

Deliveries.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};
