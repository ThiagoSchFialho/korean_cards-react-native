import React from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
import styles from '../styles/practiceListStyles';

const List = ({title}) => (
  <View style={styles.listContainer}>
    <Pressable
      onPress={() => alert(title)}
      style={({ pressed }) => [
        {
          marginTop: pressed ? 5 : 0,
          marginBottom: pressed ? 45 : 50
        },
        styles.list
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
      <ScrollView style={styles.listSelection}>
        <View style={styles.listMenu}>

          <List title='casa'/>
          <List title='cozinha'/>
          <List title='sala de estar'/>
          <List title='quarto'/>
          <List title='banheiro'/>

        </View>
      </ScrollView>
    </View>
  );
};

export default PracticeListScreen;