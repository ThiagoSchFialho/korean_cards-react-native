import React from 'react';
import { StyleSheet, ImageBackground, ScrollView, Text, View, TouchableOpacity } from 'react-native';

function PracticeScreen({navigation}) {
  // const Theme = ({title}) => {
  //   return(
  //     <View>
  //         <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: {title} })}>
  //           <View style={styles.theme}>
  //             <Text style={styles.text}>{title}</Text>
  //           </View>
  //         </TouchableOpacity>
  //       </View>
  //   );
  // }
  return(
    <View>

      <ScrollView style={styles.themeSelection}>
        <View style={styles.themeMenu}>

        {/* <Theme title='casa'/>
        <Theme title='comida'/>
        <Theme title='trabalho'/>
        <Theme title='compras'/>
        <Theme title='educação'/>
        <Theme title='transporte'/>
        <Theme title='pessoas'/>
        <Theme title='aparência'/>
        <Theme title='lazer'/>
        <Theme title='básico'/> */}

<View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'casa' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/casa.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>casa</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'comida' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/comida.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>comida</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'trabalho' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/trabalho.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>trabalho</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'compras' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/compras.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>compras</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'educação' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/educação.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>educação</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'transporte' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/transporte.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>transporte</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'pessoas' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/pessoas.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>pessoas</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'aparência' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/aparência.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>aparência</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'lazer' })}>
            <View style={styles.theme}>
              <ImageBackground source={require("../assets/background/lazer.jpg")} resizeMode="cover" style={styles.image}>
                <Text style={styles.text}>lazer</Text>
              </ImageBackground>
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity onPress={() => navigation.navigate('Lista de cartões', {lista: 'básico' })}>
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

const styles = StyleSheet.create({
  themeSelection: {
    paddingVertical: 20,
    backgroundColor: '#905ca0'
  },
  themeMenu: {
    flexDirection: 'column',
    marginTop: 20,
    marginBottom: 40,
    marginHorizontal: 25,
  },
  theme: {
    height: 150,
    padding: 5,
    marginBottom: 25,
    borderRadius: 5,
    backgroundColor: 'white',
  },
  image: {
    height: 140,
    padding: 15,
    marginBottom: 25,
    borderRadius: 10
  },
  text: {
    width: 100,
    paddingVertical: 2,
    paddingHorizontal: 4,
    backgroundColor: 'white',
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 5,
    fontSize: 17,
    fontFamily: 'Asap_700Bold',
    textTransform: 'capitalize',
    textAlign: 'center',
    color: 'black',
  }
});

export default PracticeScreen;