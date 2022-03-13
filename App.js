import React from 'react';
import { StyleSheet, ScrollView, StatusBar, Text, View } from 'react-native';
import AppLoading from 'expo-app-loading';
import { useFonts, Asap_400Regular, Asap_700Bold} from '@expo-google-fonts/asap';
import { textShadowColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


export default function App() {
  let [fontsLoaded] = useFonts({
    Asap_400Regular,
    Asap_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ScrollView style={styles.learnselection}>
      <View style={styles.learnmenu}>
        <View style={styles.theme}><Text style={styles.text}>casa</Text></View>
        <View style={styles.theme}><Text style={styles.text}>escola</Text></View>
        <View style={styles.theme}><Text style={styles.text}>praia</Text></View>
        <View style={styles.theme}><Text style={styles.text}>trabalho</Text></View>
        <View style={styles.theme}><Text style={styles.text}>animai</Text></View>
        <View style={styles.theme}><Text style={styles.text}>super mercado</Text></View>
        <View style={styles.theme}><Text style={styles.text}>cozinha</Text></View>
        <View style={styles.theme}><Text style={styles.text}>cores</Text></View>
        <View style={styles.theme}><Text style={styles.text}>escritorio</Text></View>
        <View style={styles.theme}><Text style={styles.text}>escola</Text></View>
        <View style={styles.theme}><Text style={styles.text}>parque</Text></View>
        <View style={styles.theme}><Text style={styles.text}>cinema</Text></View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  learnselection: {
    paddingVertical: 30,
    backgroundColor: '#F2923F',
  },
  learnmenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 40,
    marginHorizontal: 50,
    justifyContent: 'space-between'
  },
  theme: {
    backgroundColor: '#5334b7',
    backgroundColor: '#fff',
    marginBottom: 50,
    borderRadius: 20,
    width: '40%',
    height: 110,
  },
  text: {
    fontSize: 17,
    fontFamily: 'arial',
    lineHeight: 110,
    textAlign: 'center',
    color: 'black'
  }
});
