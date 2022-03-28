import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { useFonts, Poppins_500Medium, Poppins_700Bold } from '@expo-google-fonts/poppins';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AppLoading from 'expo-app-loading';

import LearnScreen from './screens/learn';
import LearnListScreen from './screens/learnList';
import PracticeScreen from './screens/practice';
import PracticeListScreen from './screens/practiceList';

const Stack = createNativeStackNavigator();
function PracticeScreens() {
  return(
    <Stack.Navigator
      screenOptions={() => ({
        title: 'Praticar',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Poppins_700Bold'
        }
      })}
    >
      <Stack.Screen name="Practice" component={PracticeScreen}/>
      <Stack.Screen name="CardList" component={PracticeListScreen}/>
    </Stack.Navigator>
  );
}

function LearnScreens() {
  return(
    <Stack.Navigator
      screenOptions={() => ({
        title: 'Aprender',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontFamily: 'Poppins_700Bold'
        }
      })}
    >
      <Stack.Screen name="Learn" component={LearnScreen}/>
      <Stack.Screen name="WordList" component={LearnListScreen}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
function MyTabs() {
  return (
  <Tab.Navigator
    screenOptions={({route}) => ({
      tabBarStyle: {
        height: 60,
      },
      tabBarLabelStyle: {
        marginTop: -10,
        padding: 5,
        fontFamily: 'Poppins_700Bold'
      },
      tabBarIcon: ({ size, color }) => {
        let iconName;
        size = 30;
        
        if (route.name == 'Aprender') {
          iconName = 'book';

        } else if (route.name == 'Praticar') {
          iconName = 'copy';
        }
        return (
          <Ionicons name={iconName} size={size} color={color}/>
        )
      }
    })}
  >
    <Tab.Screen name='Aprender' component={LearnScreens} options={{ headerStyle:{height: 0}}}/>
    <Tab.Screen name='Praticar' component={PracticeScreens} options={{ headerStyle:{height: 0}}}/>
  </Tab.Navigator>
  );
}

const App = () => {
  //O trecho de codigo visto abaixo é usado para carregar corretamente as fontes personalizadas
  let [fontsLoaded] = useFonts({
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