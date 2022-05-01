import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import styles from '../styles/practiceListStyles';

function PracticeListScreen( {route, navigation} ) {

  const { id, theme, nLists } = route.params;
  var listsIndex = [];

  for (var i=0; i<nLists; i++){
    listsIndex[i] = i;
  }

  // Nomes das listas de cartões
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

  // Icones das listas de cartões
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

  // Número de palavras em cada lista de palavras
  var nWords = [
    [10, 13, 10, 10, 11],
    [12, 10, 9, 6, 8],
    [14, 9, 11],
    [10, 10, 14],
    [15, 16, 12],
    [14, 16, 10, 13],
    [14, 11, 17, 18],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0]
  ];

  // ================================ Constante para configurar o botão que levará para a tela "Cards" (cards.js)
  const CardsButton = ( {title, icon, nWords} ) => (
    <View style={styles.buttonContainer}>
      <Pressable
        onPress={() => navigation.navigate('Cards', {list: title, nWords: nWords })}
        style={({ pressed }) => [
          {
            marginTop: pressed ? 5 : 0,
            marginBottom: pressed ? 45 : 50
          },
          styles.button
          ]}>
          <Text style={styles.icon}>
            <MaterialCommunityIcons name={icon} size={50} color='#202020'/>
          </Text>
          <Text style={styles.text}>
            {title}
          </Text>
      </Pressable>
    </View>
  );

  // ================================ Retorno da função principal
  return(
    <View>
      <View style={styles.mainContainer}>
        
        <View style={styles.themeTitleContainer}>
          <Text style={styles.themeTitle}>
            {theme}
          </Text>
        </View>

        <View style={styles.listSelectionContainer}>
          <ScrollView style={styles.listSelection}>
            {listsIndex.map(item =>
                <CardsButton  key={item} title={lists[id][item]} icon={icons[id][item]} nWords={nWords[id][item]}/>
            )}
          </ScrollView>
        </View>

      </View>
    </View>
  );
};

export default PracticeListScreen;