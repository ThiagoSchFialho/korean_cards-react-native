import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import styles from '../styles/practiceListStyles';

const Theme = ({title}) => (
  <View style={styles.themeContainer}>
    <Pressable
      onPress={() => alert(title)}
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

function PracticeListScreen() {
  return(
    <View>
      <ScrollView style={styles.themeSelection}>
        <View style={styles.themeMenu}>

          <Theme title='casa'/>
          <Theme title='cozinha'/>
          <Theme title='sala de estar'/>
          <Theme title='quarto'/>
          <Theme title='banheiro'/>

        </View>
      </ScrollView>
    </View>
  );
};

export default PracticeListScreen;