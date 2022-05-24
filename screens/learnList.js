import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/learnListStyles';

import { listNames, listIcons, ListData } from '../data/listsData';



// ================================ Constante para configurar como será renderizado cada item na FlatList
const Item = ({ word, translation }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{word}</Text>
    <Text style={styles.itemTitle}>{translation}</Text>
  </View>
);

function LearnListScreen({ route }) {

  const { id, theme } = route.params; // parametros vindos do arquivo 'learn.js'
  const [currentList, setCurrentList] = useState(0);
  var listsIndex = [];

  for (let i=0; i<listNames[id].length; i++){
    listsIndex[i] = i;
  }

  // ================================ Constante para configurar como será renderizado os itens na FlatList
  const renderItem = ({ item }) => (
    <Item word={item.word} translation={item.translation}/>
  );

  // ================================ Botão resposavel por mudar a lista de palavras renderizada na tela (seleção da lista)
  const ListSelectionButton = ( {title, icon, index} ) => {
    return(
      <View style={{marginBottom: 15}}>
        <View style={styles.listSelectionButtonContainer}>
          <Pressable
            onPress={() => setCurrentList(index)}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.listSelectionButton
              ]}>
              <Text style={styles.listSelectionButtonIcon}>
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

  const Explanation = () => {
    if (listNames[id][currentList] == 'números') {
      return(
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>
            explicação
          </Text>
          <Text style={styles.explanation}>
            Existem apenas números coreanos de 1 a 99. A partir de 100 são utilizados os números sino-coreanos.
          </Text>
          <Text style={styles.explanation}>
            O sistema nativo coreano é usado para contagem de objetos (quantidades), pessoas, vezes, idade também, horas etc.
          </Text>
        </View>
      );
    }

    if (listNames[id][currentList] == 'sino-coreanos') {
      return(
        <View style={styles.explanationContainer}>
          <Text style={styles.explanationTitle}>
            explicação
          </Text>
          <Text style={styles.explanation}>
            Existem apenas números coreanos de 1 a 99. A partir de 100 são utilizados os números sino-coreanos.
          </Text>
          <Text style={styles.explanation}>
            O sistema sino-coreano é usado para contagem de minutos, preços, idade, meses, dias, anos, números ordinais, número de telefone etc.
          </Text>
        </View>
      );
    } else {
      return(null);
    }
  }

  // usado para renderizar a status bar corretamente
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar {...props} /> : null;
  }
  
  // ================================ Retorno da função principal
  return(
    <SafeAreaView style={styles.listContainer}>
      <FocusAwareStatusBar hidden={false} barStyle="dark-content" backgroundColor="#dF9246" />

      <FlatList
        ListHeaderComponent={
        <>
          <View style={styles.headerContainer}>
            <View style={{backgroundColor: '#dF9246'}}>
              <Text style={styles.titleTheme}>
                {theme}
              </Text>
            </View>

            {/* View onde será mostrado as listas para serem selecionadas */}
            <ScrollView style={styles.listSelection} horizontal={true} showsHorizontalScrollIndicator={false}>
              {listsIndex.map(item =>
                  <ListSelectionButton  key={item} title={listNames[id][item]} icon={listIcons[id][item]} index={item}/>
              )}
            </ScrollView>
          </View>

          <Text style={styles.listTitle}>
            {listNames[id][currentList]}
          </Text>

          <Explanation/>

        </>}
        data={ListData[id][currentList]}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

export default LearnListScreen;