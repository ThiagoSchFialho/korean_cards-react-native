import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'react-native';
import styles from '../styles/learnListStyles';
import { CASA, COZINHA, SALADEESTAR, QUARTO, BANHEIRO } from '../data/casaListData';
import { FRUTAS, LEGUMES, BEBIDAS, PADARIA, SOBREMESAS } from '../data/comidaListData';

//==============================================================================
//============================== TESTES COM JSON ===============================
//==============================================================================

// class Tema {
//   constructor(id, nome, listas) {
//     this.id = id;
//     this.nome = nome;
//     this.listas = listas;
//   }
// }
// class Lista {
//   constructor(nome, palavras, traducoes) {
//     this.nome = nome;
//     this.palavras = palavras;
//     this.traducoes = traducoes;
//   }
// }
// var quartoPalavras = ['Cama', 'Colchão', 'Travesseiro'];
// var quartoTraducoes = ['침대', '매트리스', '베개'];

// var cozinhaPalavras = ['Micro-ondas', 'Panela', 'Abridor de latas'];
// var cozinhaTraducoes = ['전자레인지', '냄비', '깡통따개'];

// const quarto = new Lista('quarto', quartoPalavras, quartoTraducoes)
// const cozinha = new Lista('cozinha', cozinhaPalavras, cozinhaTraducoes)

// var casa = [quarto, cozinha]

// let casaTema = new Tema(1, 'casa', casa);

// import * as fs from 'fs';
// // const fs = require('fs');
// try{
//   fs.writeFileSync('casaTema.json', JSON.stringify(casaTema));
// }catch(err){
//   console.log(err);
// }

//==============================================================================
//==============================================================================
//==============================================================================



function chageList(title){
  var data;
  if (title == 'casa') {
    data = CASA;
  } else if (title == 'cozinha') {
    data = COZINHA;
  } else if (title == 'sala de estar') {
    data = SALADEESTAR;
  } else if (title == 'quarto') {
    data = QUARTO;
  } else if(title == 'banheiro') {
    data = BANHEIRO;
  } else if (title == 'frutas') {
    data = FRUTAS;
  } else if (title == 'legumes') {
    data = LEGUMES;
  } else if (title == 'bebidas') {
    data = BEBIDAS;
  } else if (title == 'padaria') {
    data = PADARIA;
  } else if(title == 'sobremesas') {
    data = SOBREMESAS;
  }
  return(data);
}

const Item = ({ word, translation }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{word}</Text>
    <Text style={styles.itemTitle}>{translation}</Text>
  </View>
);

function LearnListScreen({ route }) {

  const renderItem = ({ item }) => (
    <Item word={item.word} translation={item.translation}/>
  );

  const { id, tema, nListas } = route.params;

  var lists = [
              ['casa', 'cozinha', 'sala de estar', 'quarto', 'banheiro'],
              ['frutas', 'legumes', 'bebidas', 'padaria', 'sobremesas'],
              ['escritório', 'computador', 'profissões'],
              ['supermercado', 'farmácia', 'shopping center'],
              ['escola', 'matemática', 'geografia'],
              ['bicicleta', 'avião', 'caminhão', 'carro'],
              ['roupas masculinas', 'roupas femininas', 'calçados', 'material', 'joias', 'acessórios'],
              ['praia', 'acampamento', 'teatro', 'jogos'],
              ['cores', 'animais', 'números']
             ];
  const [currentList, setCurrentList] = useState(0);
  var index = currentList;

  const ListButton = (props) => {
    return(
      <View style={styles.listButtonContainer}>
        <Pressable
          onPress={() => setCurrentList(props.index)}
          style={({ pressed }) => [
            {
              marginTop: pressed ? 5 : 0,
              marginBottom: pressed ? 45 : 50
            },
            styles.listButton
            ]}>
            <Text style={styles.text}>
              {props.title}
            </Text>
        </Pressable>
      </View>
    );
  }

  const ListButtons = (props) => {
    if (props.list == 'casa'){
      return(
        <ScrollView horizontal={true} style={styles.listSelection}>
          <ListButton title="casa" index={0}/>
          <ListButton title="cozinha" index={1}/>
          <ListButton title="sala de estar" index={2}/>
          <ListButton title="quarto" index={3}/>
          <ListButton title="banheiro" index={4}/>
        </ScrollView>
      );
    } else if (props.list == 'comida') {
      return(
        <ScrollView horizontal={true} style={styles.listSelection}>
          <ListButton title="frutas" index={0}/>
          <ListButton title="legumes" index={1}/>
          <ListButton title="bebidas" index={2}/>
          <ListButton title="padaria" index={3}/>
          <ListButton title="sobremesas" index={4}/>
        </ScrollView>
      );
    }
  }

  return(
    <View>
      <ScrollView style={styles.MainContainer}>

        <View style={{backgroundColor: '#ce8135'}}>
          <Text style={styles.titleTheme}>
            {tema}
          </Text>
        </View>

        <ListButtons list={tema}/>
        {/* {lists[id].map((item) => {
          return(
            <ScrollView horizontal={true} style={styles.listSelection}>
              <ListButton title={item} index={3}/>
            </ScrollView>
          )
        })} */}

        <Text style={styles.listTitle}>
          {lists[id][index]}
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={chageList(lists[id][index])}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default LearnListScreen;