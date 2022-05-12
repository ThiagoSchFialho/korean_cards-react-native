import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/quizStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function QuizScreen( {route} ) {

    const { language, qntQuestions, theme } = route.params; // parametros vindos do arquivo 'quizOptions.js'
    const [currentQuestion, setCurrentQuestion] = useState(1);
    const [selectedAnswer, setSelectedAnswer] = useState();

    var questionWord = 'Janela';

    const RadioInput = ( {option} ) => (
        <View style={styles.radioInputContainer}>
            <Pressable
                onPress={() => setSelectedAnswer(option)}
                style={styles.radioInput}
            >
                <FontAwesome name={'check'} size={40} color={selectedAnswer == option ? '#72D656': 'white'}/>
            </Pressable>
            <Text style={styles.radioText}>
                {option}
            </Text>
        </View>
    );

    return(
        <View style={styles.mainContainer}>
            <Text style={styles.counter}>
                {currentQuestion} / {qntQuestions == 999 ? 'ထ' : qntQuestions}
            </Text>

            <Text style={styles.question}>
                Como se diz em {language}?
            </Text>

            <View style={styles.questionWordContainer}>
                <Text style={styles.questionWord}>
                    {questionWord}
                </Text>
            </View>

            <View style={styles.answersContainer}>
                <RadioInput option={'안테나'}/>
                <RadioInput option={'창문'}/>
                <RadioInput option={'지붕'}/>
                <RadioInput option={'문'}/>
            </View>

            <View style={styles.confirmButtonContainer}>
                <View style={styles.confirmButtonShadow}>
                    <Pressable
                        onPress={() => alert('oi')}
                        style={({ pressed }) => [
                        {
                            marginTop: pressed ? 5 : 0,
                            marginBottom: pressed ? 45 : 50
                        },
                        styles.confirmButton
                        ]}>
                            <Text style={styles.confirmButtonText}>
                                confirmar
                            </Text>
                    </Pressable>
                </View>
            </View>

        </View>
    )
}

export default QuizScreen;