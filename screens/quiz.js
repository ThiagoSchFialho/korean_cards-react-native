import React, { useState } from 'react';
import { View, Text, Pressable,TouchableWithoutFeedback } from 'react-native';
import styles from '../styles/quizStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ListData } from '../data/listsData';

function QuizScreen( {route, navigation} ) {

    const { language, qntQuestions, themeId } = route.params; // parametros vindos do arquivo 'quizOptions.js'

    const [isFirstQuestion, setIsFirstQuestion] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState();

    const [questionWord, setQuestionWord] = useState();
    const [answer0, setAnswer0] = useState();
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [answer3, setAnswer3] = useState();

    var answer = [];

    var questionWordWord = language == 'Coreano' ? 'word' : 'translation';
    var answerWord = language == 'Coreano' ? 'translation' : 'word';

    if (isFirstQuestion) {
        nextQuestion();
        setIsFirstQuestion(false);
    }

    function nextQuestion () {
        if (currentQuestion < qntQuestions) {
            setCurrentQuestion(currentQuestion+1);

            // Número de listas de cada tema
            var nLists = ListData[themeId].length;
            // Lista aleatória
            var randomList = parseInt(Math.random() * nLists);
            // Número de elementos da lista
            var nElements = ListData[themeId][randomList].length;
            // Index aleatório dentro da lista
            var randomIndex = parseInt(Math.random() * nElements);

            setQuestionWord(ListData[themeId][randomList] [randomIndex][questionWordWord]);

            var answerPosition = parseInt(Math.random() * 4);
            answer[answerPosition] = ListData[themeId][randomList] [randomIndex][answerWord];

            var randomAnswer = '';
            for (var i=0; i<4; i++) {
                if (i != answerPosition) {
                    do {
                        randomList = parseInt(Math.random() * nLists);
                        nElements = ListData[themeId][randomList].length;
                        randomIndex = parseInt(Math.random() * nElements);
                        randomAnswer = ListData[themeId][randomList] [randomIndex][answerWord];
                    } while ( answer.includes(randomAnswer) );
                    answer[i] = randomAnswer;
                }
            }
            
            setAnswer0(answer[0]);
            setAnswer1(answer[1]);
            setAnswer2(answer[2]);
            setAnswer3(answer[3]);

            setSelectedAnswer(0);

        } else {
            alert('acabou');
            navigation.goBack();
        }
    }

    // ================================ Constante para configurar o input do tipo radio que quando selecionado representa uma resposta
    const RadioInput = ( {option} ) => (
        <View style={styles.radioInputContainer}>
            <Pressable
                onPress={() => setSelectedAnswer(option)}
                style={styles.radioInput}
            >
                <FontAwesome name={'check'} size={40} color={selectedAnswer == option ? '#72D656': 'white'}/>
            </Pressable>
            <TouchableWithoutFeedback onPress={() => setSelectedAnswer(option)}>
                <Text style={styles.radioText}>
                    {option}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );

    // ================================ Retorno da função principal
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
                <RadioInput id={0} option={answer0}/>
                <RadioInput id={1} option={answer1}/>
                <RadioInput id={2} option={answer2}/>
                <RadioInput id={3} option={answer3}/>
            </View>

            <View style={styles.confirmButtonContainer}>
                <View style={styles.confirmButtonShadow}>
                    <Pressable
                        onPress={() => nextQuestion()}
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