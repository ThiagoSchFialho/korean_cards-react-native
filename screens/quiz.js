import React, { useState } from 'react';
import { View, Text, Pressable,TouchableWithoutFeedback, Modal, StatusBar, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import styles from '../styles/quizStyles';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { ListData } from '../data/listsData';



var pastQuestionWords = [];

function QuizScreen( {route, navigation} ) {

    const { language, qntQuestions, themeId } = route.params; // parametros vindos do arquivo 'quizOptions.js'

    const [isFirstQuestion, setIsFirstQuestion] = useState(true);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [selectedAnswer, setSelectedAnswer] = useState();
    const [userAnswer, setUserAnswer] = useState();
    const [isUserAnswerCorrect, setIsUserAnswerCorrect] = useState(false);
    const [userScore, setUserScore] = useState(0);

    const [questionWord, setQuestionWord] = useState();
    const [correctAnswerPosition, setCorrectAnswerPosition] = useState();
    const [correctAnswer, setCorrectAnswer] = useState();
    const [answer0, setAnswer0] = useState();
    const [answer1, setAnswer1] = useState();
    const [answer2, setAnswer2] = useState();
    const [answer3, setAnswer3] = useState();

    const [userFeedBackVisible, setUserFeedBackVisible] = useState(false);
    const [resultsVisible, setResultsVisible] = useState(false);

    var answer = [];

    var questionWordWord = language == 'Coreano' ? 'word' : 'translation';
    var answerWord = language == 'Coreano' ? 'translation' : 'word';

    if (isFirstQuestion) {
        nextQuestion();
        setIsFirstQuestion(false);
    }

    function userAnswerVerification () {
        if (!isFirstQuestion) {
            if (userAnswer == correctAnswerPosition) {
                setUserScore(userScore+1);
                setIsUserAnswerCorrect(true);
            } else {
                setIsUserAnswerCorrect(false);
            }
        }

        setUserFeedBackVisible(true);
    }

    function nextQuestion () {
        
        setUserFeedBackVisible(false);
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

            // Gerando a palavra a ser traduzida (palavra do enunciado da questão)
            var word = '';
            do {
                randomList = parseInt(Math.random() * nLists);
                nElements = ListData[themeId][randomList].length;
                randomIndex = parseInt(Math.random() * nElements);
                word = ListData[themeId][randomList] [randomIndex][questionWordWord];
            } while ( pastQuestionWords.includes(word) );
            pastQuestionWords.push(word);
            setQuestionWord(word);

            // Gerando resposta certa
            var answerPosition = parseInt(Math.random() * 4);
            setCorrectAnswerPosition(answerPosition);
            answer[answerPosition] = ListData[themeId][randomList] [randomIndex][answerWord];
            setCorrectAnswer(answer[answerPosition]);

            // Gerando os distratores (respostas erradas)
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

            // resetando os estados que gravam qual respota foi marcada pelo usuário
            setUserAnswer();
            setSelectedAnswer();

        } else {
            setResultsVisible(true);
        }
    }

    // ================================ Constante para configurar o modal que mostra para o usuário se ele acertou ou não a questão, além de apresentar um botão para avançar para a proxima questão
    const UserFeedBack = () => {
        var message = '';
        var message2 = '';
        if (isUserAnswerCorrect) {
            message = 'Você acertou!!!';
            message2 = 'Resposta: ' + correctAnswer;
        } else {
            message = 'Errado';
            message2 = 'Resposta:  ' + correctAnswer;
        }

        return(
            <Modal
                animationType="slide"
                transparent={true}
                visible={userFeedBackVisible}
                onRequestClose={() => { setUserFeedBackVisible(!userFeedBackVisible) }}
            >
                <View style={[styles.userFeedBackContainer, isUserAnswerCorrect==true ? {backgroundColor: '#b2ecac'} : {backgroundColor: '#f2aaa6'}]}>
                    <Text style={styles.userFeedBackText}>
                        {message}
                    </Text>
                    <Text style={styles.userFeedBackText2}>
                        {message2}
                    </Text>
                    <Pressable
                    style={[styles.userFeedBackButton, isUserAnswerCorrect==true ? {backgroundColor: '#45D143'} : {backgroundColor: '#E65048'}]}
                    onPress={() => nextQuestion()}
                    >
                        <Text style={styles.userFeedBackButtonText}>
                            avançar
                        </Text>
                    </Pressable>
                </View>
            </Modal>
        );
    };

    // ================================ Constante para configurar o modal que mostra os resultados (quantas questões o usuário acertou)
    const Results = () => (
        <Modal
            animationType="fade"
            transparent={true}
            visible={resultsVisible}
            onRequestClose={() => { setResultsVisible(!resultsVisible) }}
        >
            <View style={styles.resultsContainer}>
                <Text style={styles.resultsTitle}>
                    Pontos:
                </Text>
                <Text style={styles.resultsText}>
                    {userScore} / {qntQuestions}
                </Text>

                <View style={styles.resultsButtonContainer}>
                    <Pressable
                    style={styles.resultsButton}
                    onPress={() => navigation.goBack()}
                    >
                        <Text style={styles.resultsButtonText}>
                            Sair
                        </Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );

    // ================================ Função para guardar qual resposta foi marcada pelo usuário
    function saveSelectedAnswer ( id, option) {
        setUserAnswer(id);
        setSelectedAnswer(option);
    }

    // ================================ Constante para configurar o input do tipo radio que quando selecionado representa uma resposta
    const RadioInput = ( {id, option} ) => (
        <View style={styles.radioInputContainer}>
            <Pressable
                onPress={() => saveSelectedAnswer(id, option)}
                style={styles.radioInput}
            >
                <FontAwesome name={'check'} size={40} color={selectedAnswer == option ? '#72D656': 'white'}/>
            </Pressable>
            <TouchableWithoutFeedback onPress={() => saveSelectedAnswer(id, option)}>
                <Text style={styles.radioText}>
                    {option}
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );

    // ================================ Constante para configurar o botão que volta para a tela anterior
    const Exit = () => (
        <View>
            <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                <Text style={styles.exit}>
                    <MaterialCommunityIcons name={'arrow-left'} size={25} color={'black'}/>
                </Text>
            </TouchableWithoutFeedback>
        </View>
    );

    // ================================ Retorno da função principal
    return(
        <SafeAreaView style={styles.mainContainer}>
            <StatusBar hidden={true} />

            <Exit/>

            <Text style={[styles.counter, resultsVisible==true ? {marginTop: 20} : {marginTop: 20}]}>
                {currentQuestion} / {qntQuestions}
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

            <UserFeedBack/>
            <Results/>

            <View style={styles.confirmButtonContainer}>
                <View style={styles.confirmButtonShadow}>
                    <Pressable
                        onPress={() => userAnswerVerification()}
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

        </SafeAreaView>
    );
};

export default QuizScreen;