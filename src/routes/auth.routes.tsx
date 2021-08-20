import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { SignIn } from '../screens/SignIn';
import { SignUp } from '../screens/SignUp';

const { Navigator, Screen } = createStackNavigator();

export function AuthRoutes() {
  return (
    <Navigator>
      
      <Screen 
        name="SignIn" 
        component={SignIn}
        options={{headerShown: false}} 
      />

      <Screen 
        name="SignUp" 
        component={SignUp}
        options={{
          headerStyle: {
            
            backgroundColor: '#131313',
            borderBottomWidth: 1,
            borderBottomColor: '#00b94a'
          },
          headerTintColor: '#FFF',
          headerBackTitleVisible: false,
          headerTitle: 'Voltar'

        }} 
      />

    </Navigator>
  );
};

