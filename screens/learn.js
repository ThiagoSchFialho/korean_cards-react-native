import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableOpacity } from 'react-native';

function LearnScreen({ navigation }) {
  return(
    <View>

      <ScrollView style={styles.themeSelection}>
        <View style={styles.themeMenu}>

        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'casa' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>casa</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'comida' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>comida</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'trabalho' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>trabalho</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'compras' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>compras</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'educação' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>educação</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'transporte' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>transporte</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'pessoas' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>pessoas</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'aparência' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>aparência</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'lazer' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>lazer</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de palavras', {lista: 'básico' })}>
            <View style={styles.theme}>
              <Text style={styles.text}>básico</Text>
            </View>
          </TouchableOpacity>
        </View>

        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  themeSelection: {
    paddingTop: 60,
    backgroundColor: '#dF9246'
  },
  themeMenu: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 25,
  },
  theme: {
    height: 140,
    padding: 15,
    marginBottom: 25,
    borderRadius: 10,
    backgroundColor: 'white',
  },
  text: {
    fontSize: 17,
    fontFamily: 'Asap_700Bold',
    textTransform: 'capitalize',
    color: 'black'
  }
});

export default LearnScreen;