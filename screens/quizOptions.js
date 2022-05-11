import React, { useState } from 'react';
import { View, Text, Pressable } from 'react-native';
import styles from '../styles/quizOptionsStyles';
import { Picker } from '@react-native-picker/picker';

function QuizOptionsScreen( {navigation} ) {

    const [selectedLanguage, setSelectedLanguage] = useState();
    const [selectedTheme, setSelectedTheme] = useState();

    return(
        <View style={styles.mainContainer}>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>opções do quiz</Text>
            </View>
        
            <View style={styles.selectInputContainer}>
                <Text style={styles.selectInputLabel}>
                    Responder em:
                </Text>

                <View style={styles.selectInput}>
                    <Picker
                        selectedValue={selectedLanguage}
                        onValueChange={(itemValue, itemIndex) => setSelectedLanguage(itemValue)}
                    >
                        <Picker.Item label="Português" value="pt"/>
                        <Picker.Item label="Coreano" value="kr"/>
                    </Picker>
                </View>
            </View>

            <View style={styles.selectQntQuestionsInputContainer}>

            </View>

            <View style={styles.selectInputContainer}>
                <Text style={styles.selectInputLabel}>
                    Tema:
                </Text>

                <View style={styles.selectInput}>
                    <Picker
                        selectedValue={selectedTheme}
                        onValueChange={(itemValue, itemIndex) => setSelectedTheme(itemValue)}
                    >
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

            <View style={styles.submitButtonContainer}>
                <View style={styles.submitButtonShadow}>
                    <Pressable
                        onPress={() => navigation.navigate('Quiz')}
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
        </View>
    )
}

export default QuizOptionsScreen;