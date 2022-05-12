import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/quizStyles';

function QuizScreen( {route} ) {

    const { language, qntQuestions, theme } = route.params; // parametros vindos do arquivo 'quizOptions.js'

    return(
        <View>
            <Text>quiz screen</Text>
            <Text>idioma: {language}</Text>
            <Text>qnt de questões: {qntQuestions}</Text>
            <Text>tema: {theme}</Text>
        </View>
    )
}

export default QuizScreen;