import React from 'react';
import { ScrollView, Text, View, Pressable, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useIsFocused } from '@react-navigation/native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/practiceListStyles';

import { listNames, listIcons, nWords } from '../data/listsData';



function PracticeListScreen( {route, navigation} ) {

  const { id, theme } = route.params; // parametros vindos do arquivo 'practice.js'
  var listsIndex = [];

  for (let i=0; i<listNames[id].length; i++){
    listsIndex[i] = i;
  }

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

  // usado para renderizar a status bar corretamente
  function FocusAwareStatusBar(props) {
    const isFocused = useIsFocused();
  
    return isFocused ? <StatusBar {...props} /> : null;
  }

  // ================================ Retorno da função principal
  return(
    <SafeAreaView>
      <FocusAwareStatusBar hidden={false} barStyle="dark-content" backgroundColor="#905ca0" />

      <View style={styles.mainContainer}>
        
        <View style={styles.themeTitleContainer}>
          <Text style={styles.themeTitle}>
            {theme}
          </Text>
        </View>

        <View style={styles.listSelectionContainer}>
          <ScrollView style={styles.listSelection} showsVerticalScrollIndicator={false}>
            {listsIndex.map(item =>
                <CardsButton  key={item} title={listNames[id][item]} icon={listIcons[id][item]} nWords={nWords[id][item]}/>
            )}
          </ScrollView>
        </View>

      </View>
    </SafeAreaView>
  );
};

export default PracticeListScreen;