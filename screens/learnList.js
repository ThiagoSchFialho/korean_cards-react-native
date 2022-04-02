import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import styles from '../styles/learnListStyles';
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

//==============================================================================
//============================== TESTES COM JSON ===============================
//==============================================================================

class Tema {
  constructor(id, nome, listas) {
    this.id = id;
    this.nome = nome;
    this.listas = listas;
  }
}
class Lista {
  constructor(nome, palavras, traducoes) {
    this.nome = nome;
    this.palavras = palavras;
    this.traducoes = traducoes;
  }
}
var quartoPalavras = ['Cama', 'Colchão', 'Travesseiro'];
var quartoTraducoes = ['침대', '매트리스', '베개'];

var cozinhaPalavras = ['Micro-ondas', 'Panela', 'Abridor de latas'];
var cozinhaTraducoes = ['전자레인지', '냄비', '깡통따개'];

const quarto = new Lista('quarto', quartoPalavras, quartoTraducoes)
const cozinha = new Lista('cozinha', cozinhaPalavras, cozinhaTraducoes)

var casa = [quarto, cozinha]

let casaTema = new Tema(1, 'casa', casa);

casaTemaStr = JSON.stringify(casaTema);

// var fs = require('fs');
// fs.appendFile('meu_json.json', casaTemaStr, function (err) {
//   if (err) throw err;
//   console.log('Arquivo Salvo!');
// });

const jsonData= require('./teste.json');
//console.log(jsonData);


//==============================================================================
//==============================================================================
//==============================================================================

const Item = ({ word, translation }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{word}</Text>
    <Text style={styles.itemTitle}>{translation}</Text>
  </View>
);

//======================================================================
function LearnListScreen({ route }) {

  // Declaração de variaveis e constantes
  const { id, tema, nListas } = route.params;

  var listsIndex = [];

  var lists = [
    ['casa', 'cozinha', 'sala de estar', 'quarto', 'banheiro'],
    ['frutas', 'legumes', 'bebidas', 'padaria', 'sobremesas'],
    ['escritório', 'computador', 'profissões'],
    ['supermercado', 'farmácia', 'shopping center'],
    ['escola', 'matemática', 'geografia'],
    ['bicicleta', 'avião', 'caminhão', 'carro'],
    ['família', 'emoções', 'corpo', 'corpo2'],
    ['roupas masculinas', 'roupas femininas', 'calçados', 'material', 'joias', 'acessórios'],
    ['praia', 'acampamento', 'teatro', 'jogos'],
    ['cores', 'animais', 'números']
  ];

  var data = [
    [CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO],
    [FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS],
    [ESCRITORIO, COMPUTADOR, PROFISSOES],
    [SUPERMERCADO, FARMACIA, SHOPPINGCENTER],
    [ESCOLA, MATEMATICA, GEOGRAFIA],
    [BICICLETA, AVIAO, CAMINHAO, CARRO],
    [FAMILIA, EMOCOES, CORPO, CORPO2],
    [ROUPASMASCULINAS, ROUPASFEMININAS, CALCADOS, MATERIAL, JOIAS, ACESSORIOS],
    [PRAIA, ACAMPAMENTO, TEATRO, JOGOS],
    [CORES, ANIMAIS, NUMEROS]
  ];

  for (var i=0; i<nListas; i++){
    listsIndex[i] = i;
  }

  const [currentList, setCurrentList] = useState(0);
  var index = currentList;

  // Declaração de funções
  const renderItem = ({ item }) => (
    <Item word={item.word} translation={item.translation}/>
  );

  const ListButton = ({ title, index} ) => {
    return(
      <View style={{marginBottom: 15}}>
        <View style={styles.listButtonContainer}>
          <Pressable
            onPress={() => setCurrentList(index)}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.listButton
              ]}>
              <Text style={styles.listButtonIcon}>
                {/* <Ionicons name={props.icon} size={50} color='#373737'/> */}
                {title}
              </Text>
          </Pressable>
        </View>
  
        <View>
            <Text style={styles.text}>
              {title}
            </Text>
          </View>
      </View>
    );
  }

//======================================================================
  return(
    <View>
      <ScrollView style={styles.MainContainer}>
        <View style={{backgroundColor: '#c88236'}}>
          <Text style={styles.titleTheme}>
            {tema}
          </Text>
        </View>

        <ScrollView horizontal={true} style={styles.listSelection}>
          {listsIndex.map((item) => {
            return(
              <ListButton title={lists[id][item]} index={item}/>
            )
          })}
        </ScrollView>

        <Text style={styles.listTitle}>
          {lists[id][index]}
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={data[id][index]}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default LearnListScreen;