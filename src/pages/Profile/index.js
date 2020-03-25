import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

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

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Avatar
        source={{
          uri: courier.avatar
            ? `http://10.0.3.2:3333/files/${courier.avatar.path}`
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
        <Text>{courier.createdAt}</Text>
      </ProfileInfo>
      <LogoutButton onPress={handleLogout}>Logout</LogoutButton>
    </Container>
  );
}
