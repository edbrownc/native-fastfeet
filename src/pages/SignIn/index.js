import React, {useState} from 'react';
import {Image} from 'react-native';

import {useDispatch, useSelector} from 'react-redux';
import {signInRequest} from '~/store/modules/auth/actions';
import logo from '~/assets/logo2.png';

import Background from '~/components/Background';

import {Container, Form, FormInput, SubmitButton} from './styles';

export default function SignIn() {
  const dispatch = useDispatch();
  const [courierId, setCourierId] = useState();

  const loading = useSelector(state => state.auth.loading);

  function handleSubmit() {
    dispatch(signInRequest(courierId));
  }

  return (
    <Background>
      <Container>
        <Image source={logo} alt="FastFeet" />
        <Form>
          <FormInput
            keyboardType="email-address"
            autoCorrect={false}
            autoCapitalize="none"
            placeholder="Type in your ID"
            returnKeyType="send"
            onSubmitEditing={handleSubmit}
            value={courierId}
            onChangeText={setCourierId}
          />

          <SubmitButton loading={loading} onPress={handleSubmit}>
            Sign In
          </SubmitButton>
        </Form>
      </Container>
    </Background>
  );
}
