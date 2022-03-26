import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import AppLoading from 'expo-app-loading';

import LearnScreen from './screens/learn';
import LearnListScreen from './screens/learn_list';
import PracticeScreen from './screens/practice';
import PracticeListScreen from './screens/practice_list';

const Stack = createNativeStackNavigator();
function PracticeScreens() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Praticar" component={PracticeScreen}/>
      <Stack.Screen name="Lista de cartões" component={PracticeListScreen}/>
    </Stack.Navigator>
  );
}

function LearnScreens() {
  return(
    <Stack.Navigator>
      <Stack.Screen name="Aprender" component={LearnScreen}/>
      <Stack.Screen name="Lista de palavras" component={LearnListScreen}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
  <Tab.Navigator>
    <Tab.Screen name='Aprender' component={LearnScreens} options={{ headerStyle:{height: 0}}}/>
    <Tab.Screen name='Praticar' component={PracticeScreens} options={{ headerStyle:{height: 0}}}/>
  </Tab.Navigator>
  );
}

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
      <MyTabs/>
    </NavigationContainer>
  )
};

export default App;