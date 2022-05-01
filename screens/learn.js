import React from 'react';
import { ImageBackground, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/themeSelectionStyles'

// theme, nLists, image source
const THEMES = [["casa", 5, require("../assets/background/casa.jpg")],
                ["comida", 5, require("../assets/background/comida.jpg")],
                ["trabalho", 3, require("../assets/background/trabalho.jpg")],
                ["compras", 3, require("../assets/background/compras.jpg")],
                ["educação", 3, require("../assets/background/educação.jpg")],
                ["transporte", 4, require("../assets/background/transporte.jpg")],
                ["pessoas", 4, require("../assets/background/pessoas.jpg")],
                ["aparência", 6, require("../assets/background/aparência.jpg")],
                ["lazer", 4, require("../assets/background/lazer.jpg")],
                ["básico", 3, require("../assets/background/básico.jpg")],
              ];

function LearnScreen({ navigation }) {

  // ================================ Constante para configurar o botão que levará para a tela "WordList" (lernList.js)
  const ThemeButton = ( {id} ) => {
    let image = THEMES[id][2];
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: id, theme: THEMES[id][0], nLists: THEMES[id][1] })}>
          <View style={styles.theme}>
            <ImageBackground borderRadius={10} source={image} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>{THEMES[id][0]}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  // ================================ Retorno da função principal
  return(
    <View>
      <ScrollView style={{backgroundColor: '#dF9246'}}>
        <View style={styles.themeMenu}>

        <ThemeButton id={0}/>
        <ThemeButton id={1}/>
        <ThemeButton id={2}/>
        <ThemeButton id={3}/>
        <ThemeButton id={4}/>
        <ThemeButton id={5}/>
        <ThemeButton id={6}/>
        <ThemeButton id={7}/>
        <ThemeButton id={8}/>
        <ThemeButton id={9}/>

        </View>
      </ScrollView>
    </View> 
  );
};

export default LearnScreen;