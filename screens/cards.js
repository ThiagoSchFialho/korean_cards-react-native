import React from 'react';
import { View, Text } from 'react-native';
import styles from '../styles/cardsStyles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

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

function CardsScreen( {route} ) {

    const { list, nWords } = route.params;

    let current = 3;
    let word = COZINHA[0]["word"];


    return(
        <View style={styles.mainView}>
            <Text style={styles.title}>
                Lista: {list}
            </Text>

            <View>
                <View style={styles.i}>
                    <MaterialCommunityIcons name={'information'} size={35} color='#00a2e8'/>
                </View>
                <Text style={styles.progress}>{current} / {current+7}</Text>
            </View>

            <View style={styles.cardContainer}>
                <View style={styles.card}>
                    <Text style={styles.cardText}>{word}</Text>
                </View>
            </View>

            <View>
                <Text style={styles.next}>
                    avançar
                </Text>
            </View>

        </View>
    );
};

export default CardsScreen;