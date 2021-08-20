import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text, View, StatusBar, LogBox } from 'react-native';
import { AuthProvider } from './src/contexts/auth';
import { Routes } from './src/routes';
import { disableExpoCliLogging } from 'expo/build/logs/Logs';

LogBox.ignoreAllLogs(true);

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor='#131313' barStyle='light-content' />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}
