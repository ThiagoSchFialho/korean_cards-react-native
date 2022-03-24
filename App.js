import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import AppLoading from 'expo-app-loading';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const Theme = ({title}) => (
    <View style={styles.themeContainer}>
      <Pressable
        onPress={() => alert(<Text>{title}</Text>)}
        style={({ pressed }) => [
          {
            marginTop: pressed ? 5 : 0,
            marginBottom: pressed ? 45 : 50
          },
          styles.theme
          ]}>
          <Text style={styles.text}>
            {title}
          </Text>
      </Pressable>
    </View>
);

const App = () => {
  //O trecho de codigo visto abaixo é usado para carregar corretamente as fontes personalizadas
  let [fontsLoaded] = useFonts({
    Asap_400Regular,
    Asap_700Bold,
  });
  if (!fontsLoaded) {
    return <AppLoading/>;
  }

  return (
    <View>
      
      <ScrollView style={styles.learnSelection}>
        <View style={styles.learnMenu}>

          <Theme title='casa'/>
          <Theme title='comida'/>
          <Theme title='trabalho'/>
          <Theme title='compras'/>
          <Theme title='educação'/>
          <Theme title='transporte'/>
          <Theme title='pessoas'/>
          <Theme title='aparência'/>
          <Theme title='lazer'/>
          <Theme title='básico'/>

        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>

        <TouchableWithoutFeedback onPress={() => alert('aprender')}>
          <View style={styles.viewMenu1}>
            <Text style={styles.textMenu}>
              aprender
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => alert('praticar')}>
          <View style={styles.viewMenu2}>
            <Text style={styles.textMenu}>
              praticar
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  learnSelection: {
    paddingVertical: 30,
    marginBottom: 55,
    backgroundColor: '#eea533'
  },
  learnMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 40,
    marginHorizontal: 50,
    justifyContent: 'space-between'
  },
  themeContainer: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 50,
    borderRadius: 20,
    marginBottom: 50,
    width: '40%',
    height: 110,
  },
  theme: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 105,
  },
  text: {
    fontSize: 17,
    fontFamily: 'Asap_700Bold',
    lineHeight: 110,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'black'
  },
  bottomMenu: {
    flexDirection: 'row',
    marginTop: -60,
    height: 60,
    borderTopColor: '#444',
    borderTopWidth: 2,
    backgroundColor: 'white',
  },
  viewMenu1: {
    borderRightColor: '#444',
    borderRightWidth: 1,
    width: '50%'
  },
  viewMenu2: {
    borderLeftColor: '#444',
    borderLeftWidth: 1,
    width: '50%'
  },
  textMenu: {
    fontSize: 17,
    fontFamily: 'Asap_700Bold',
    lineHeight: 60,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'black'
  }
});


export default App;