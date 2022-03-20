import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Pressable } from 'react-native';
import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import AppLoading from 'expo-app-loading';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

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

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('casa')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            casa
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('comida')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            comida
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('trabalho')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            trabalho
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('compras')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            compras
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('educação')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            educação
          </Text>
                </Pressable>
        </View>

        <View  style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('transporte')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            transporte
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('pessoas')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            pessoas
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('aparência')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            aparência
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('lazer')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
          <Text style={styles.text}>
            lazer
          </Text>
                </Pressable>
        </View>

        <View style={styles.themeContainer}>
          <Pressable
            onPress={() => alert('básico')}
            style={({ pressed }) => [
              {
                marginTop: pressed ? 5 : 0,
                marginBottom: pressed ? 45 : 50
              },
              styles.theme
          ]}>
            <Text style={styles.text}>
              básico
            </Text>
          </Pressable>
        </View>

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
    backgroundColor: '#F2923F',
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
    borderBottomColor: '#444',
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