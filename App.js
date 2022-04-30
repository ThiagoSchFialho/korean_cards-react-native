import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MyTabs from './routes';

import { useFonts, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';

const App = () => {
  //O trecho de codigo visto abaixo é usado para carregar corretamente as fontes personalizadas
  let [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <NavigationContainer>
      <MyTabs/>
    </NavigationContainer>
  )
};

export default App;