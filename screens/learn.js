import React from 'react';
import { ImageBackground, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/themeSelectionStyles'

function LearnScreen({ navigation }) {
  return(
    <View>
      <ScrollView style={{backgroundColor: '#dF9246'}}>
        <View style={styles.themeMenu}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 0, tema: 'casa', nListas: 5 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/casa.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>casa</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 1, tema: 'comida', nListas: 5 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/comida.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>comida</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 2, tema: 'trabalho', nListas: 3 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/trabalho.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>trabalho</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 3, tema: 'compras', nListas: 3 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/compras.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>compras</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 4, tema: 'educação', nListas: 3 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/educação.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>educação</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 5, tema: 'transporte', nListas: 4 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/transporte.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>transporte</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 6, tema: 'pessoas', nListas: 4 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/pessoas.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>pessoas</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 7, tema: 'aparência', nListas: 6 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/aparência.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>aparência</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 8, tema: 'lazer', nListas: 4 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/lazer.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>lazer</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', { id: 9, tema: 'básico', nListas: 3 })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/básico.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>básico</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </View> 
  );
};

export default LearnScreen;