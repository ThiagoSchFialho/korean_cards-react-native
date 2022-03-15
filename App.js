import React from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Alert } from 'react-native';
import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import AppLoading from 'expo-app-loading';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';

const App = () => {
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

          <View style={styles.theme}>
            <Text style={styles.text}>
              casa
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              comida
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              trabalho
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              compras
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              educação
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              transporte
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              pessoas
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              aparência
            </Text>
          </View>

          <View style={styles.theme}>
            <Text style={styles.text}>
              lazer
            </Text>
          </View>

          <View style={styles.theme}>
            {/* <TouchableWithoutFeedback onPress={() => Alert.alert('alk')}>
            </TouchableWithoutFeedback>; */}
          </View>

        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <View style={styles.viewMenu1}>
          <Text style={styles.textMenu}>
            aprender
          </Text>
        </View>

        <View style={styles.viewMenu2}>
          <Text style={styles.textMenu}>
            praticar
          </Text>
        </View>
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
    backgroundColor: 'red',
    justifyContent: 'space-between'
  },
  theme: {
    backgroundColor: '#fff',
    borderBottomColor: '#555',
    borderBottomWidth: 3,
    borderRightColor: '#555',
    borderRightWidth: 3,
    borderRadius: 20,
    marginBottom: 50,
    width: '40%',
    height: 110,
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