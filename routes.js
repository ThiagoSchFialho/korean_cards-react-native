import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LearnScreen from './screens/learn';
import LearnListScreen from './screens/learnList';
import PracticeScreen from './screens/practice';
import PracticeListScreen from './screens/practiceList';
import CardsScreen from './screens/cards';

const Stack = createNativeStackNavigator();

function PracticeScreens() {
  return(
    <Stack.Navigator
      screenOptions={(route) => ({
        title: '',
        headerTransparent: true,
        statusBarStyle: 'dark',
      })}
    >
      <Stack.Screen name="Practice" component={PracticeScreen}/>
      <Stack.Screen name="CardList" component={PracticeListScreen}/>
      <Stack.Screen name="Cards" component={CardsScreen} options={{statusBarHidden: true}}/>
    </Stack.Navigator>
  );
}

function LearnScreens() {
  return(
    <Stack.Navigator
      screenOptions={() => ({
        title: '',
        headerTitleAlign: 'center',
        headerTransparent: true,
        statusBarStyle: 'dark'
      })}
    >
      <Stack.Screen name="Learn" component={LearnScreen}/>
      <Stack.Screen name="WordList" component={LearnListScreen}/>
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerStyle: {
        height: 0
      },

      tabBarStyle: {
        height: 60,
      },

      tabBarLabelStyle: {
        marginTop: -10,
        fontFamily: 'Poppins_700Bold'
      },

      tabBarIcon: ({ size, color }) => {
        let iconName;
        
        if (route.name == 'Aprender') {
          iconName = 'book';

        } else if (route.name == 'Praticar') {
          iconName = 'copy';
        }
        return (
          <Ionicons name={iconName} size={size+9} color={color}/>
        )
      }

    })}
  >
    <Tab.Screen name='Aprender' component={LearnScreens}/>
    <Tab.Screen name='Praticar' component={PracticeScreens}/>
  </Tab.Navigator>
  );
}