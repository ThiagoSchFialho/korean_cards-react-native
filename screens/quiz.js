import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/quizStyles';

function QuizScreen( {route} ) {

    const { test } = route.params;

    return(
        <View>
            <Text>quiz screen {test}</Text>
        </View>
    )
}

export default QuizScreen;