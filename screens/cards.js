import React, { useState, useRef } from 'react';
import { Animated, View, Text, Pressable, Modal, TouchableWithoutFeedback } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../styles/cardsStyles';

import { CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO } from '../data/casaListData';
import { FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS } from '../data/comidaListData';
import { ESCRITORIO, COMPUTADOR, PROFISSOES } from '../data/trabalhoListData';
import { SUPERMERCADO, FARMACIA, SHOPPINGCENTER } from '../data/comprasListData';
import { ESCOLA, MATEMATICA, GEOGRAFIA } from '../data/educacaoListData';
import { BICICLETA, AVIAO, CAMINHAO, CARRO } from '../data/transportListData';
import { FAMILIA, EMOCOES, CORPO, CORPO2 } from '../data/pessoasListData';
import { ROUPASMASCULINAS, ROUPASFEMININAS, CALCADOS, MATERIAL, JOIAS, ACESSORIOS } from '../data/aparenciaListData';
import { PRAIA, ACAMPAMENTO, TEATRO, JOGOS } from '../data/lazerListData';
import { CORES, ANIMAIS, NUMEROS } from '../data/basicoListData';

lists = {"casa" : CASA,
        "cozinha" : COZINHA,
        "sala de estar" : SALADEESTAR,
        "quarto" : QUARTO,
        "banheiro" : BANHEIRO,
        "frutas" : FRUTAS,
        "legumes" : LEGUMES,
        "bebidas" : BEBIDAS,
        "padaria" : PADARIA,
        "sobremesas" : SOBREMESAS,
        "escritório" : ESCRITORIO,
        "computador" : COMPUTADOR,
        "profissões" : PROFISSOES,
        "supermercado" : SUPERMERCADO,
        "farmácia" : FARMACIA,
        "shopping center" : SHOPPINGCENTER,
        "escola" : ESCOLA,
        "matemática" : MATEMATICA,
        "geografia" : GEOGRAFIA,
        "bicicleta" : BICICLETA,
        "avião" : AVIAO,
        "caminhão" : CAMINHAO,
        "carro" : CARRO,
        "família" : FAMILIA,
        "emoções" : EMOCOES,
        "corpo" : CORPO,
        "corpo 2" : CORPO2,
        "roupas masculinas" : ROUPASMASCULINAS,
        "roupas femininas" : ROUPASFEMININAS,
        "calçados" : CALCADOS,
        "material" : MATERIAL,
        "joias" : JOIAS,
        "acessórios" : ACESSORIOS,
        "praia" : PRAIA,
        "acampamento" : ACAMPAMENTO,
        "teatro" : TEATRO,
        "jogos" : JOGOS,
        "cores" : CORES,
        "animais" : ANIMAIS,
        "números" : NUMEROS
    }

function CardsScreen( {route, navigation} ) {

    // Declarações de variaveis e constantes
    const { list, nWords } = route.params;
    let word = '';
    let translation = '';

    const [currentWord, setCurrentWord] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [WordsLeft, setWordsLeft] = useState(true);

    // Função para Alterar a palavra renderizada no cartão e para atualizar o painel que mostra o progresso
    function GoNext () {
        if (currentWord < nWords){
            setCurrentWord(currentWord+1);
        }
        if (currentWord == nWords-1) {
            setWordsLeft(false);
        }
    }
    word = lists[list][currentWord-1]["word"];
    translation = lists[list][currentWord-1]["translation"];

    // ================================ Constante para configurar o modal que mostra informações sobre a tela
    const InformationCard = () => (
        <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => { setModalVisible(!modalVisible) }}
        >
            <View style={styles.modalContainer}>
                <View style={styles.modal}>
                    <Text style={styles.modalText}>
                        Quando lembrar a tradução da palavra ou desistir, toque no cartão para gira-lo e ver a tradução da palavra.
                    </Text>

                    <Text style={styles.modalText}>
                        Toque em "Avançar" para ver o proximo cartão"
                    </Text>

                    {/* Botão para ocultar o modal */}
                    <Pressable
                    style={styles.modalConfirmation}
                    onPress={() => setModalVisible(!modalVisible)}
                    >
                        <Text style={styles.modalConfirmationText}>entendi</Text>
                    </Pressable>
                </View>
            </View>
        </Modal>
    );

    // ================================ Constante para configurar o cabeçalho da tela
    const CardsScreenHeader = () => (
        <View>
            <Text style={styles.title}>
                Lista: {list}
            </Text>
            
            <View>
                {/* Botão para exibir um modal com informações sobre a tela */}
                <Pressable
                    style={styles.informationButton}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialCommunityIcons name={'information'} size={35} color='#00a2e8'/>
                </Pressable>
            
                <InformationCard/>
            
                {/* Display onde é mostrado o progresso das palavras */}
                <Text style={styles.progress}>
                    {currentWord} / {nWords}
                </Text>
            </View>
        </View>
    );

    // ================================ Constante para configurar as animações que afetarão o cartão
    let fadeAnimFront = new Animated.Value(1);
    let fadeAnimBack = new Animated.Value(0);
    let flipAnim = new Animated.Value(0);
    let currentValue = 0;

    const setInterpolate = flipAnim.interpolate({
        inputRange: [0, 180],
        outputRange: ['0deg', '180deg']
    })

    flipAnim.addListener(({value}) => {
        currentValue = value;
    })

    const flipAnimation = () => {
        if (currentValue > 90) {
            Animated.spring(flipAnim, {
                toValue: 0,
                useNativeDriver: true
            }).start();

            Animated.timing(fadeAnimFront, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true
            }).start();
            Animated.timing(fadeAnimBack, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true
            }).start();

        } else {
            Animated.spring(flipAnim, {
                toValue: 180,
                useNativeDriver: true
            }).start();

            Animated.timing(fadeAnimFront, {
                toValue: 0,
                duration: 150,
                useNativeDriver: true
            }).start();
            Animated.timing(fadeAnimBack, {
                toValue: 1,
                duration: 150,
                useNativeDriver: true
            }).start();
        }
    };

    // ================================ Constante para configurar o catão onde serão mostradas as palavras e traduções
    const Card = ({ word, translation}) => (
        <TouchableWithoutFeedback onPress={() => flipAnimation()}>
            <View style={styles.cardContainer}>

                <Animated.View
                    style={[ styles.card,
                        {
                            transform: [{rotateY: setInterpolate}],
                            opacity: fadeAnimFront
                        } 
                    ]}
                >
                    <Text style={styles.cardTextWord}>{word}</Text>
                </Animated.View>

                <Animated.View
                    style={[ styles.card,
                        {
                            transform: [{rotateY: setInterpolate}],
                            opacity: fadeAnimBack
                        } 
                    ]}
                >
                    <Text style={styles.cardTextTranslation}>{translation}</Text>
                </Animated.View>

            </View>
        </TouchableWithoutFeedback>
    );

    // ================================ Constante para configurar a parte inferior da tela, onde é mostrado um botão para avançar para o proximo cartão ou para voltar à tela anterior
    const NextButton = () => {
        if (WordsLeft) {
            return(
                <View style={styles.nextContainer}>
                    <TouchableWithoutFeedback onPress={() => GoNext()}>
                        <Text style={styles.nextButton}>avançar</Text>
                    </TouchableWithoutFeedback>
                </View>
            );
        } else {
            return(
                <View style={styles.nextContainer}>
                    <TouchableWithoutFeedback onPress={() => navigation.goBack()}>
                        <Text style={styles.leaveButton}>sair</Text>
                    </TouchableWithoutFeedback>
                </View>
            );
        }
        
    }

    // ================================ Retorno da função principal
    return(
        <View style={styles.mainView}>
            <CardsScreenHeader/>
            <Card word={word} translation={translation}/>
            <NextButton/>
        </View>
    );
};

export default CardsScreen;