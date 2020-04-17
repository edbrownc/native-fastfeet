import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/MaterialIcons';
import SignIn from '~/pages/SignIn';
import Deliveries from './pages/Deliveries';
import Profile from './pages/Profile';
import DeliveryInfo from './pages/DeliveryInfo';
import ReportIssues from './pages/ReportIssues';
import DeliveryIssues from './pages/DeliveryIssues';
import ConfirmDelivery from './pages/ConfirmDelivery';

const AuthStack = createStackNavigator();
const DeliveryStack = createStackNavigator();
const Tabs = createBottomTabNavigator();

function DeliveriesNavigator() {
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
      <DeliveryStack.Screen
        name="ReportIssues"
        component={ReportIssues}
        options={{title: 'Report issue'}}
      />
      <DeliveryStack.Screen
        name="DeliveryIssues"
        component={DeliveryIssues}
        options={{title: 'View issues'}}
      />
      <DeliveryStack.Screen
        name="ConfirmDelivery"
        component={ConfirmDelivery}
        options={{title: 'Confirm delivery'}}
      />
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
        component={DeliveriesNavigator}
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
          tabBarLabel: 'My Profile',
          tabBarIcon: ({color}) => (
            <Icon name="account-circle" size={24} color={color} />
          ),
        }}
      />
    </Tabs.Navigator>
  );
}
