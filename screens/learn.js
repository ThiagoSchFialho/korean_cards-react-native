import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, TouchableWithoutFeedback, Pressable } from 'react-native';

const Theme = ({title}) => (
  <View style={styles.themeContainer}>
    <Pressable
      onPress={() => alert(<Text>{title}</Text>)}
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

function LearnScreen({navigation}) {
  return(
    <View>
      <ScrollView style={styles.themeSelection}>
        <View style={styles.themeMenu}>

          <Theme title='casa'/>
          <Theme title='comida'/>
          <Theme title='trabalho'/>
          <Theme title='compras'/>
          <Theme title='educação'/>
          <Theme title='transporte'/>
          <Theme title='pessoas'/>
          <Theme title='aparência'/>
          <Theme title='lazer'/>
          <Theme title='básico'/>

        </View>
      </ScrollView>

      <View style={styles.bottomMenu}>
        <TouchableWithoutFeedback onPress={() => navigation.navigate('Learn')}>
          <View style={styles.viewMenu1}>
            <Text style={styles.textMenuSelected}>
              aprender
            </Text>
          </View>
        </TouchableWithoutFeedback>

        <TouchableWithoutFeedback onPress={() => navigation.navigate('Practice')}>
          <View style={styles.viewMenu2}>
            <Text style={styles.textMenu}>
              praticar
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  themeSelection: {
    paddingVertical: 30,
    marginBottom: 55,
    backgroundColor: '#dF9246'
  },
  themeMenu: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
    marginBottom: 40,
    marginHorizontal: 50,
    justifyContent: 'space-between'
  },
  themeContainer: {
    borderBottomColor: '#bfbfbf',
    borderBottomWidth: 50,
    borderRadius: 20,
    marginBottom: 50,
    width: '40%',
    height: 110,
  },
  theme: {
    backgroundColor: 'white',
    borderRadius: 20,
    height: 105,
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
  },
  textMenuSelected: {
    fontSize: 23,
    fontFamily: 'Asap_700Bold',
    lineHeight: 60,
    textAlign: 'center',
    textTransform: 'capitalize',
    textDecorationLine: 'underline',
    color: '#dF9246'
  }
});

export default LearnScreen;