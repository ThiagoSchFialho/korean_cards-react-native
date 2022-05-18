import React from 'react';
import { StatusBar } from 'react-native';
import { ImageBackground, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/themeSelectionStyles'

// theme, image source
const THEMES = [["básico", require("../assets/background/básico.jpg")],
                ["casa", require("../assets/background/casa.jpg")],
                ["comida", require("../assets/background/comida.jpg")],
                ["trabalho", require("../assets/background/trabalho.jpg")],
                ["compras", require("../assets/background/compras.jpg")],
                ["educação", require("../assets/background/educação.jpg")],
                ["transporte", require("../assets/background/transporte.jpg")],
                ["pessoas", require("../assets/background/pessoas.jpg")],
                ["aparência", require("../assets/background/aparência.jpg")],
                ["lazer", require("../assets/background/lazer.jpg")]
              ];

function PracticeScreen({navigation}) {

  // ================================ Constante para configurar o botão que levará para a tela "CardList" (practiceList.js)
  const ThemeButton = ( {id} ) => {
    var image = THEMES[id][1];
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('CardList', { id: id, theme: THEMES[id][0] })}>
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
      <StatusBar
          barStyle = "dark-content"
          hidden = {false}
          backgroundColor = "#905ca0"
          translucent = {false}
        />
      <ScrollView style={{backgroundColor: '#905ca0'}}>
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

export default PracticeScreen;