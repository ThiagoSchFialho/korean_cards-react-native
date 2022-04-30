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

    const { list, nWords } = route.params;
    let word = '';

    const [currentWord, setCurrentWord] = useState(1);
    const [modalVisible, setModalVisible] = useState(false);
    const [WordsLeft, setWordsLeft] = useState(true);

    function GoNext () {
        if (currentWord < nWords){
            setCurrentWord(currentWord+1);
        }
        if (currentWord == nWords-1) {
            setWordsLeft(false);
        }
    }
    word = lists[list][currentWord-1]["word"];

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

    const CardsScreenHeader = () => (
        <View>
            <Text style={styles.title}>
                Lista: {list}
            </Text>
            
            <View>
                <Pressable
                    style={styles.informationButton}
                    onPress={() => setModalVisible(true)}
                >
                    <MaterialCommunityIcons name={'information'} size={35} color='#00a2e8'/>
                </Pressable>
            
                <InformationCard/>
            
                <Text style={styles.progress}>
                    {currentWord} / {nWords}
                </Text>
            </View>
        </View>
    );

    const turnAnim = useRef(new Animated.Value(0)).current;
    const turn = () => {
        Animated.timing(turnAnim, {
            toValue: 360,
            duration: 1000,
            useNativeDriver: true
        }).start();
    };

    const Card = () => (
        <View style={styles.cardContainer}>
            <Animated.View
                style={[
                    styles.card,
                    {
                        transform: [{perspective: 500}]
                    }
                ]}
            >
                <Text style={styles.cardText}>{word}</Text>
            </Animated.View>
        </View>
    );

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

    return(
        <View style={styles.mainView}>
            <CardsScreenHeader/>
            <Card/>
            <NextButton/>
        </View>
    );
};

export default CardsScreen;