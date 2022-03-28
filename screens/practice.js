import React from 'react';
import { ImageBackground, ScrollView, Text, View, TouchableOpacity } from 'react-native';
import styles from '../styles/themeSelectionStyles'

function PracticeScreen({navigation}) {
  return(
    <View>
      <ScrollView style={{backgroundColor: '#905ca0'}}>
        <View style={styles.themeMenu}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'casa' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/casa.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>casa</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'comida' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/comida.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>comida</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'trabalho' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/trabalho.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>trabalho</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'compras' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/compras.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>compras</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'educação' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/educação.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>educação</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'transporte' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/transporte.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>transporte</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'pessoas' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/pessoas.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>pessoas</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'aparência' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/aparência.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>aparência</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'lazer' })}>
            <View style={styles.theme}>
              <ImageBackground borderRadius={10} source={require("../assets/background/lazer.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>lazer</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('CardList', {tema: 'básico' })}>
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

export default PracticeScreen;