import React, { useState } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
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
import DeprecatedEdgeInsetsPropType from 'react-native/Libraries/DeprecatedPropTypes/DeprecatedEdgeInsetsPropType';

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

function CardsScreen( {route} ) {

    const { list, nWords } = route.params;
    let word = '';

    const [currentWord, setCurrentWord] = useState(1);

    function GoNext() {
        if (currentWord < nWords){
            setCurrentWord(currentWord+1);
        } else {
            alert('cabo as palavra');
        }
    }
    word = lists[list][currentWord-1]["word"];

    return(
        <View style={styles.mainView}>
            <Text style={styles.title}>
                Lista: {list}
            </Text>

            <View>
                <View style={styles.i}>
                    <MaterialCommunityIcons name={'information'} size={35} color='#00a2e8'/>
                </View>
                <Text style={styles.progress}>{currentWord} / {nWords}</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>{word}</Text>
                </View>
            </View>

            <View style={styles.nextContainer}>
                <TouchableWithoutFeedback onPress={() => GoNext()}>
                    <Text style={styles.next}>avançar</Text>
                </TouchableWithoutFeedback>
            </View>

        </View>
    );
};

export default CardsScreen;