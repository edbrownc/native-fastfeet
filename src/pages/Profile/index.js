import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import {format} from 'date-fns';
import {
  Container,
  Avatar,
  LogoutButton,
  ProfileInfo,
  Title,
  Text,
} from './styles';
import {signOut} from '~/store/modules/auth/actions';

export default function Profile() {
  const courier = useSelector(state => state.auth.courier);
  const dispatch = useDispatch();
  const avatarURL = __DEV__
    ? courier.avatar.url.replace('localhost', '10.0.2.2')
    : courier.avatar.url;

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: courier.avatar
            ? avatarURL
            : `https://api.adorable.io/avatar/50/${courier.name}.png`,
        }}
        alt="Avatar"
      />
      <ProfileInfo>
        <Title>Full name</Title>
        <Text>{courier.name}</Text>
        <Title>Email</Title>
        <Text>{courier.email}</Text>
        <Title>Sign up date</Title>
        <Text>{format(new Date(courier.createdAt), 'dd/MM/yyyy')}</Text>
      </ProfileInfo>
      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
