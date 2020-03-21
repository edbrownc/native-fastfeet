import React from 'react';
import PropTypes from 'prop-types';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

const AuthStack = createStackNavigator();

export default function createRouter(isSigned = false) {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
      <AuthStack.Screen name="SignUp" component={SignUp} />
    </AuthStack.Navigator>
  );
}
