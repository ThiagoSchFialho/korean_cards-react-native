import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LearnScreen from './screens/learn';
import LearnListScreen from './screens/learnList';
import PracticeScreen from './screens/practice';
import PracticeListScreen from './screens/practiceList';
import CardsScreen from './screens/cards';
import QuizOptionsScreen from './screens/quizOptions';
import QuizScreen from './screens/quiz';

const Stack = createNativeStackNavigator();
function LearnScreens() {
  return(
      <Stack.Navigator
        screenOptions={() => ({
          title: '',
          headerTransparent: true,
        })}
      >
        <Stack.Screen name="Learn" component={LearnScreen}/>
        <Stack.Screen name="WordList" component={LearnListScreen}/>
      </Stack.Navigator>
  );
}

function PracticeScreens() {
  return(
        <Stack.Navigator
          screenOptions={() => ({
            title: '',
            headerTransparent: true,
          })}
        >
          <Stack.Screen name="Practice" component={PracticeScreen}/>
          <Stack.Screen name="CardList" component={PracticeListScreen}/>
          <Stack.Screen name="Cards" component={CardsScreen} options={{statusBarHidden: true}}/>
        </Stack.Navigator>

  );
}

function QuizScreens() {
  return(
    <Stack.Navigator
      screenOptions={() => ({
        title: '',
        headerTransparent: true,
      })}
    >
      <Stack.Screen name="QuizOptions" component={QuizOptionsScreen}/>
      <Stack.Screen name="QuizGame" component={QuizScreen}/>
    </Stack.Navigator>
  );
}


const Tab = createBottomTabNavigator();
export default function MyTabs() {
  return (
  <Tab.Navigator
    screenOptions={({route}) => ({
      headerStyle: {
        height: 0,
      },
      tabBarStyle: {
        height: 60,
        borderTopWidth: 2,
        borderTopColor: '#898989'
      },
      tabBarLabelStyle: {
        marginTop: -3,
        fontFamily: 'Poppins_700Bold'
      },

      tabBarIcon: ({ size, color }) => {        
        if (route.name == 'Aprender') {
          return(
            <Ionicons name={'book'} size={size+8} color={color}/>
          )
          
        } else if (route.name == 'Hangul') {
          return (
            <MaterialCommunityIcons name={'syllabary-hangul'} size={size+14} color={color}/>
          )

        } else if (route.name == 'Praticar') {
          return(
            <Ionicons name={'copy'} size={size+8} color={color}/>
          )

        } else if (route.name == 'Quiz') {
          return(
            <MaterialCommunityIcons name={'comment-question'} size={size+10} color={color}/>
          )
        }
      }
    })}
  >
    <Tab.Screen name='Aprender' component={LearnScreens}/>
    <Tab.Screen name='Praticar' component={PracticeScreens}/>
    <Tab.Screen name='Quiz' component={QuizScreens}/>
  </Tab.Navigator>
  );
}