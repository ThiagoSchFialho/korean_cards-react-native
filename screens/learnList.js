import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
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

  const { id, theme, nLists } = route.params;

  var listsIndex = [];

  var lists = [
    ['casa', 'cozinha', 'sala de estar', 'quarto', 'banheiro'],
    ['frutas', 'legumes', 'bebidas', 'padaria', 'sobremesas'],
    ['escritório', 'computador', 'profissões'],
    ['supermercado', 'farmácia', 'shopping center'],
    ['escola', 'matemática', 'geografia'],
    ['bicicleta', 'avião', 'caminhão', 'carro'],
    ['família', 'emoções', 'corpo', 'corpo 2'],
    ['roupas masculinas', 'roupas femininas', 'calçados', 'material', 'joias', 'acessórios'],
    ['praia', 'acampamento', 'teatro', 'jogos'],
    ['cores', 'animais', 'números']
  ];

  var icons = [
    ['home', 'fridge', 'television-classic', 'bed', 'shower'],
    ['food-apple', 'carrot', 'beer', 'baguette', 'cake'],
    ['city-variant', 'desktop-tower-monitor', 'briefcase'],
    ['cart', 'gamepad-round', 'escalator-up'],
    ['book-open-page-variant', 'calculator-variant', 'earth'],
    ['bicycle', 'airplane', 'truck', 'car'],
    ['human-female-boy', 'emoticon-happy', 'human-handsdown', 'human-handsdown'],
    ['human-male', 'human-female', 'shoe-formal', 'texture-box', 'diamond-stone', 'sunglasses'],
    ['beach', 'campfire', 'drama-masks', 'google-controller'],
    ['palette', 'dog-side', 'numeric']
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

  for (var i=0; i<nLists; i++){
    listsIndex[i] = i;
  }

  const [currentList, setCurrentList] = useState(0);
  var index = currentList;


  const renderItem = ({ item }) => (
    <Item word={item.word} translation={item.translation}/>
  );

  const ListButton = ( {title, icon, index} ) => {
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
                <MaterialCommunityIcons name={icon} size={50} color='#202020'/>
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
    <View style={styles.listContainer}>
      <FlatList
        ListHeaderComponent={
        <>
          <View style={styles.headerContainer}>
            <View style={{backgroundColor: '#dF9246'}}>
              <Text style={styles.titleTheme}>
                {theme}
              </Text>
            </View>

            <ScrollView horizontal={true} style={styles.listSelection}>
              {listsIndex.map(item =>
                  <ListButton  key={item} title={lists[id][item]} icon={icons[id][item]} index={item}/>
              )}
            </ScrollView>
          </View>

          <Text style={styles.listTitle}>
            {lists[id][index]}
          </Text>

        </>}
        data={data[id][index]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        />
    </View>
  );
};

export default LearnListScreen;