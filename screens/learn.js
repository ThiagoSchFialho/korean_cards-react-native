import React from 'react';
import { ImageBackground, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/themeSelectionStyles'

function LearnScreen({ navigation }) {
  return(
    <View>
      <ScrollView style={{backgroundColor: '#dF9246'}}>
        <View style={styles.themeMenu}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'casa' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/casa.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>casa</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'comida' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/comida.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>comida</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'trabalho' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/trabalho.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>trabalho</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'compras' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/compras.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>compras</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'educação' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/educação.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>educação</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'transporte' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/transporte.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>transporte</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'pessoas' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/pessoas.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>pessoas</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'aparência' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/aparência.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>aparência</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'lazer' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/lazer.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>lazer</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('WordList', {tema: 'básico' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/básico.jpg")} resizeMode="cover" style={styles.image}>
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