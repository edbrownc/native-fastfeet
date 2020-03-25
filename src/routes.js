import React from 'react';
import PropTypes from 'prop-types';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import Deliveries from './pages/Deliveries';
import Profile from './pages/Profile';

const AuthStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#FFF',
        inactiveTintColor: 'rgba(255, 255, 255, 0.6)',
        style: {
          backgroundColor: '#8d41a8',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="Deliveries"
        component={Deliveries}
        options={{
          tabBarLabel: 'Deliveries',
          tabBarIcon: ({color}) => (
            <Icon name="reorder" size={20} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={20} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
