import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/quizOptionsStyles';
import { Picker } from '@react-native-picker/picker';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

function QuizOptionsScreen( {navigation} ) {

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [selectedRadio, setSelectedRadio] = useState(5);
    const [selectedTheme, setSelectedTheme] = useState();

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
                    <Picker.Item label="Selecionar idioma"/>
                    <Picker.Item label="Português" value="Português"/>
                    <Picker.Item label="Coreano" value="Coreano"/>
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
                <Text style={styles.radioText}>{option == 999 ? 'ထ' : option}</Text>
            </View>
        );

        return (
            <View style={styles.selectQntQuestionsInputContainer}>

                <Text style={styles.inputLabel}>
                    Número de questões:
                </Text>

                <View style={styles.radioInputsContainer}>
                    <RadioInput option={5}/>
                    <RadioInput option={10}/>
                    <RadioInput option={15}/>
                    <RadioInput option={999}/>
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
                    <Picker.Item label="Selecionar tema"/>
                    <Picker.Item label="Casa" value="casa"/>
                    <Picker.Item label="Comida" value="comida"/>
                    <Picker.Item label="Trabalho" value="trabalho"/>
                    <Picker.Item label="Compras" value="compras"/>
                    <Picker.Item label="Educação" value="educação"/>
                    <Picker.Item label="Transporte" value="transporte"/>
                    <Picker.Item label="Pessoas" value="pessoas"/>
                    <Picker.Item label="Aparência" value="aparencia"/>
                    <Picker.Item label="Lazer" value="lazer"/>
                    <Picker.Item label="Básico" value="basico"/>
                </Picker>
            </View>
        </View>
    );

    // ================================ Constante para configurar o botão que leva até a tela de 'QuizGame' levando os parametros necessários
    const SubmitButton = () => (
        <View style={styles.submitButtonContainer}>
            <View style={styles.submitButtonShadow}>
                <Pressable
                    onPress={() => navigation.navigate('QuizGame', { language: selectedLanguage, qntQuestions: selectedRadio, theme: selectedTheme})}
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
        
            <SelectLanguageInput/>
            <SelectQntQuestionsInput/>
            <SelectThemeInput/>
            <SubmitButton/>

        </View>
    )
}

export default QuizOptionsScreen;