import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState }  from 'react';
import { ImageBackground, ScrollView, Modal, Image, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/themeSelectionStyles'

// theme, image source
const THEMES = [["casa", require("../assets/background/casa.jpg")],
                ["comida", require("../assets/background/comida.jpg")],
                ["trabalho", require("../assets/background/trabalho.jpg")],
                ["compras", require("../assets/background/compras.jpg")],
                ["educação", require("../assets/background/educação.jpg")],
                ["transporte", require("../assets/background/transporte.jpg")],
                ["pessoas", require("../assets/background/pessoas.jpg")],
                ["aparência", require("../assets/background/aparência.jpg")],
                ["lazer", require("../assets/background/lazer.jpg")],
                ["básico", require("../assets/background/básico.jpg")],
              ];

function LearnScreen({ navigation }) {
  const [wellcomeMessageVisible, setWellcomeMessageVisible] = useState(true);
  const [isFirstOpen, setIsFirstOpen] = useState(false);

  const StoreData = async (data, value) => {
    try {
      await AsyncStorage.setItem(data, value);

    } catch (e) {
      console.log(e);
    }
  }

  const GetData = async () => {
    try {
      const value = await AsyncStorage.getItem("firstOpen")
      if (value == null) {
        setIsFirstOpen(true)

      }  
    } catch (e){
      console.log(e);
    }
  }

  const RemoveData = async () => {
    try {
      await AsyncStorage.removeItem("firstOpen");

    } catch(e) {
      alert(e);

    }
  }

  function GetStarted () {
    setWellcomeMessageVisible(!wellcomeMessageVisible);
    StoreData("firstOpen", "0");
  }


  // ================================ Constante para configurar o botão que levará para a tela "WordList" (lernList.js)
  const ThemeButton = ( {id} ) => {
    var image = THEMES[id][1];
    return(
      <View>
        <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: id, theme: THEMES[id][0]})}>
          <View style={styles.theme}>
            <ImageBackground borderRadius={10} source={image} resizeMode="cover" style={styles.image}>
              <Text style={styles.text}>{THEMES[id][0]}</Text>
            </ImageBackground>
          </View>
        </TouchableOpacity>
      </View>
    )
  }

  // ================================ Constante para configurar o modal que apresenta a mensagem de boas vindas quando necessario
  const WellcomeModal = () => {
    if (isFirstOpen) {
      return(
        <Modal
          animationType='fade'
          transparent={false}
          visible={wellcomeMessageVisible}
          onRequestClose={() => { setWellcomeMessageVisible(!wellcomeMessageVisible) }}
        >
          <View style={styles.wellcomeMessageContainer}>

            <Text style={styles.wellcomeMessageTitle}>
              Bem Vindo(a) ao
            </Text>

            <View style={styles.wellcomeMessageImageContainer}>
              <Image source={require("../assets/WellcomeMessageicon.png")} style={styles.wellcomeMessageImage}></Image>
            </View>

            <Text style={styles.wellcomeMessageImageText}>
              Korean Cards
            </Text>

            <Text style={styles.wellcomeMessageText}>  Korean Cards é um aplicativo para te ajudar a ampliar seu vocabulário na língua coreana.</Text>

            <View style={styles.wellcomeMessageButtonContainer}>
              <TouchableOpacity onPress={() => GetStarted()}>
                <View style={styles.wellcomeMessageButton}>
                  <Text style={styles.wellcomeMessageTextButton}>Vamos lá</Text>
                </View>
              </TouchableOpacity>
            </View>

          </View>
        </Modal>
      )
    } else {
      return(null);
    }
  }

  // Chamada da constante que faz o resgate das informações do armazenamento assíncrono
  GetData();

  // ================================ Retorno da função principal
  return(
    <View>
      <ScrollView style={{backgroundColor: '#dF9246'}}>
        <View style={styles.themeMenu}>

        <WellcomeModal/>
        {/* <TouchableOpacity onPress={() => RemoveData()}>
          <View style={styles.wellcomeMessageButton}>
            <Text style={styles.wellcomeMessageTextButton}>remove</Text>
          </View>
        </TouchableOpacity> */}

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