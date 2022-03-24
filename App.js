import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Pressable } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import AppLoading from 'expo-app-loading';

import LearnScreen from './screens/learn';
import PracticeScreen from './screens/practice';

const Stack = createNativeStackNavigator();

const App = () => {
  //O trecho de codigo visto abaixo é usado para carregar corretamente as fontes personalizadas
  let [fontsLoaded] = useFonts({
    Asap_400Regular,
    Asap_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Learn' component={LearnScreen}/>
        <Stack.Screen name='Practice' component={PracticeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;