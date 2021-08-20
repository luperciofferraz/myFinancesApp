import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Home } from '../screens/Home';
import { Profile } from '../screens/Profile';
import { New } from '../screens/New';

const { Navigator ,Screen} = createDrawerNavigator();

export function AppRoutes() {
  return (
    <Navigator
      screenOptions={{
        
        drawerStyle: {
          backgroundColor: '#171717',
        },
        
        drawerLabelStyle: {
          fontWeight: 'bold'
        },
        
        drawerActiveTintColor: '#FFF',
        
        drawerActiveBackgroundColor: '#00b94a',
        
        drawerInactiveBackgroundColor: '#000',
        
        drawerInactiveTintColor: '#DDD',
        
        drawerItemStyle: {
          marginVertical: 5
        }
        
      }}
    >
      
      <Screen name="Home" component={Home} />
      <Screen name="Registrar" component={New} />
      <Screen name="Perfil" component={Profile} />
      
    </Navigator>
  );
}

