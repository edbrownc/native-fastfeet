import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import Deliveries from './pages/Deliveries';
import Profile from './pages/Profile';
import DeliveryInfo from './pages/DeliveryInfo';

const AuthStack = createStackNavigator();
const DeliveryStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DeliveriesDashboard() {
  return (
    <DeliveryStack.Navigator
      initialRouteName="Deliveries"
      screenOptions={{
        headerStyle: {
          backgroundColor: '#7D40E7',
          elevation: 0,
        },
        headerTitleAlign: 'center',
        headerTintColor: '#FFF',
      }}>
      <DeliveryStack.Screen
        name="Deliveries"
        component={Deliveries}
        options={{headerShown: false}}
      />
      <DeliveryStack.Screen
        name="DeliveryInfo"
        component={DeliveryInfo}
        options={{title: 'Delivery info'}}
      />
      {/*
      <DeliveryStack.Screen
        name="ReportProblem"
        component={ReportProblem}
        options={{title: 'Informar problema'}}
      />
      <DeliveryStack.Screen
        name="DeliveryProblems"
        component={DeliveryProblems}
        options={{title: 'Visualizar problemas'}}
      />
      <DeliveryStack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{title: 'Confirmar entrega'}}
      /> */}
    </DeliveryStack.Navigator>
  );
}

export default function createRouter(isSigned = false) {
  return !isSigned ? (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen name="SignIn" component={SignIn} />
    </AuthStack.Navigator>
  ) : (
    <Tabs.Navigator
      tabBarOptions={{
        activeTintColor: '#7D40E7',
        inactiveTintColor: '#999',
        style: {
          backgroundColor: '#FFF',
        },
        keyboardHidesTabBar: true,
      }}>
      <Tabs.Screen
        name="Deliveries"
        component={DeliveriesDashboard}
        options={{
          tabBarLabel: 'Deliveries',
          tabBarIcon: ({color}) => (
            <Icon name="reorder" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
