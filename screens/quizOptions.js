import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/quizOptionsStyles';
import { Picker } from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function QuizOptionsScreen( {navigation} ) {

    const [selectedLanguage, setSelectedLanguage] = useState("Coreano");
    const [selectedRadio, setSelectedRadio] = useState(10);
    const [selectedTheme, setSelectedTheme] = useState(0);

    // ================================ Constante para configurar o input que captura a escolha do usuário referente ao idioma de resposta do quiz
    const SelectLanguageInput = () => (
        <View style={styles.selectInputContainer}>

            <Text style={styles.inputLabel}>
                Responder em:
            </Text>

            <View style={styles.selectInput}>
                <Picker
                    selectedValue={selectedLanguage}
                    onValueChange={(itemValue) => setSelectedLanguage(itemValue)}
                >
                    <Picker.Item label="Coreano" value="Coreano"/>
                    <Picker.Item label="Português" value="Português"/>
                </Picker>
            </View>
        </View>
    );

    // ================================ Constante para configurar o input que captura a escolha do usuário referente a quantidade de questões do quiz
    const SelectQntQuestionsInput = () => {

        const RadioInput = ( {option} ) => (
            <View>
                <Pressable
                    onPress={() => setSelectedRadio(option)}
                    style={styles.radioInput}
                >
                    <FontAwesome name={'check'} size={40} color={selectedRadio == option ? '#72D656': 'white'}/>
                </Pressable>
                <Text style={styles.radioText}>{option}</Text>
            </View>
        );

        return (
            <View style={styles.selectQntQuestionsInputContainer}>

                <Text style={styles.inputLabel}>
                    Número de questões:
                </Text>

                <View style={styles.radioInputsContainer}>
                    <RadioInput option={10}/>
                    <RadioInput option={15}/>
                    <RadioInput option={20}/>
                    <RadioInput option={25}/>
                </View>
            </View>
        )
    }

    // ================================ Constante para configurar o input que captura a escolha do usuário referente ao tema do quiz
    const SelectThemeInput = () => (
        <View style={styles.selectInputContainer}>

            <Text style={styles.inputLabel}>
                Tema:
            </Text>

            <View style={styles.selectInput}>
                <Picker
                    selectedValue={selectedTheme}
                    onValueChange={(itemValue) => setSelectedTheme(itemValue)}
                >

                    <Picker.Item label="Casa" value={0}/>
                    <Picker.Item label="Comida" value={1}/>
                    <Picker.Item label="Trabalho" value={2}/>
                    <Picker.Item label="Compras" value={3}/>
                    <Picker.Item label="Educação" value={4}/>
                    <Picker.Item label="Transporte" value={5}/>
                    <Picker.Item label="Pessoas" value={6}/>
                    <Picker.Item label="Aparência" value={7}/>
                    <Picker.Item label="Lazer" value={8}/>
                    <Picker.Item label="Básico" value={9}/>
                </Picker>
            </View>
        </View>
    );

    // ================================ Constante para configurar o botão que leva até a tela de 'QuizGame' levando os parametros necessários
    const SubmitButton = () => (
        <View style={styles.submitButtonContainer}>
            <View style={styles.submitButtonShadow}>
                <Pressable
                    onPress={() => navigation.navigate('QuizGame', { language: selectedLanguage, qntQuestions: selectedRadio, themeId: selectedTheme})}
                    style={({ pressed }) => [
                    {
                        marginTop: pressed ? 5 : 0,
                        marginBottom: pressed ? 45 : 50
                    },
                    styles.submitButton
                    ]}>
                        <Text style={styles.submitButtonText}>
                            começar
                        </Text>
                </Pressable>
            </View>
        </View>
    );

    // ================================ Retorno da função principal
    return(
        <View style={styles.mainContainer}>

            <View style={styles.titleContainer}>
                <Text style={styles.title}>opções do quiz</Text>
            </View>

            <View style={styles.form}>
                <SelectLanguageInput/>
                <SelectQntQuestionsInput/>
                <SelectThemeInput/>
            </View>

            <SubmitButton/>

        </View>
    )
}

export default QuizOptionsScreen;