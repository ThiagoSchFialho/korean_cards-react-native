import React from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable, FlatList } from 'react-native';

const Theme = ({title}) => (
  <View style={styles.themeContainer}>
    <Pressable
      onPress={() => alert({title})}
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

const DATA = [
  {
    id: "1",
    title: "Porta\n\n문",
  },
  {
    id: "2",
    title: "Janela\n\n창문",
  },
  {
    id: "3",
    title: "Garagem\n\n차고",
  },
  {
    id: "4",
    title: "Telhado\n\n지붕",
  },
  {
    id: "5",
    title: "Antena\n\n안테나",
  },
  {
    id: "6",
    title: "Varanda\n\n발코니",
  },
  {
    id: "7",
    title: "Chaminé\n\n굴뚝",
  },
  {
    id: "8",
    title: "Rede de dormir\n\n해먹",
  },
  {
    id: "9",
    title: "Grama\n\n그램",
  },
  {
    id: "10",
    title: "Churrasqueira\n\n바베큐 그릴",
  },
];

const Item = ({ title }) => (
  <View style={styles.list}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

function LearnListScreen() {

  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

    return(
      <View>
        <View style={{backgroundColor: '#ce8135'}}>
          <Text style={styles.titleTheme}>
            Casa
          </Text>
        </View>

        <ScrollView horizontal={true} style={styles.themeSelection}>
            <Theme title='casa'/>
            <Theme title='cozinha'/>
            <Theme title='sala de estar'/>
            <Theme title='quarto'/>
            <Theme title='banheiro'/>
        </ScrollView>

        <ScrollView style={styles.listContainer}>
          <View style={{marginBottom: 350}}>
            <FlatList
              data={DATA}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    titleTheme: {
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
      fontSize: 25,
      fontFamily: 'Asap_700Bold',
      color: 'white',
      textDecorationLine: 'underline'
    },
    themeSelection: {
      backgroundColor: '#ce8135',
      padding: 20
    },
    themeContainer: {
      borderBottomColor: '#bfbfbf',
      borderBottomWidth: 50,
      borderRadius: 20,
      marginBottom: 50,
      marginHorizontal: 10,
      width: 120,
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
    listContainer: {
      height: '100%',
      paddingVertical: 30,
      elevation: 10,
      backgroundColor: '#dF9246'
    },
    list: {
      paddingVertical: 10,
      marginVertical: 20,
      marginHorizontal: 50,
      borderRadius: 15,
      backgroundColor: 'white',
    },
    title: {
      textAlign: 'center',
      fontFamily: 'Asap_700Bold',
      fontSize: 18,
    }
  });
  
  export default LearnListScreen;