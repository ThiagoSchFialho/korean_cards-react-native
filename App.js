import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Asap_400Regular,
    Asap_700Bold,
  });

  return (
    <View>
      <ScrollView style={styles.learnSelection}>
        <View style={styles.learnMenu}>
          <View style={styles.theme}><Text style={styles.text}>casa</Text></View>
          <View style={styles.theme}><Text style={styles.text}>escola</Text></View>
          <View style={styles.theme}><Text style={styles.text}>praia</Text></View>
          <View style={styles.theme}><Text style={styles.text}>trabalho</Text></View>
          <View style={styles.theme}><Text style={styles.text}>animais</Text></View>
          <View style={styles.theme}><Text style={styles.text}>mercado</Text></View>
          <View style={styles.theme}><Text style={styles.text}>cozinha</Text></View>
          <View style={styles.theme}><Text style={styles.text}>cores</Text></View>
          <View style={styles.theme}><Text style={styles.text}>escritorio</Text></View>
          <View style={styles.theme}><Text style={styles.text}>escola</Text></View>
          <View style={styles.theme}><Text style={styles.text}>parque</Text></View>
          <View style={styles.theme}><Text style={styles.text}>cinema</Text></View> 
        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <View style={styles.viewMenu1}><Text style={styles.textMenu}>aprender</Text></View>
        <View style={styles.viewMenu2}><Text style={styles.textMenu}>praticar</Text></View>
      </View>

    </View>
  );
}

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
    marginTop: -70,
    height: 70,
    borderTopColor: '#666',
    borderTopWidth: 2,
    backgroundColor: 'white',
  },
  viewMenu1: {
    borderRightColor: '#555',
    borderRightWidth: 1,
    width: '50%'
  },
  viewMenu2: {
    borderLeftColor: '#555',
    borderLeftWidth: 1,
    width: '50%'
  },
  textMenu: {
    fontSize: 17,
    fontFamily: 'Asap_700Bold',
    lineHeight: 70,
    textAlign: 'center',
    textTransform: 'capitalize',
    color: 'black'
  }
});
