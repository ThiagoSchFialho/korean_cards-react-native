import React, { useState } from 'react';
import { StyleSheet, ScrollView, Text, View, Pressable, FlatList } from 'react-native';

const CASA = [
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

const COZINHA = [
  {
    id: "1",
    title: "Micro-ondas\n\n전자레인지",
  },
  {
    id: "2",
    title: "Panela\n\n냄비",
  },
  {
    id: "3",
    title: "Abridor de latas\n\n깡통따개",
  },
  {
    id: "4",
    title: "Escorredor de pratos\n\n접시 랙",
  },
  {
    id: "5",
    title: "Máquina de lavar louça\n\n식기세척기",
  },
  {
    id: "6",
    title: "Detergente\n\n주방세제",
  },
  {
    id: "7",
    title: "Esponja\n\n스펀지",
  },
  {
    id: "8",
    title: "Liquidificador\n\n믹서기",
  },
  {
    id: "9",
    title: "Torradeira\n\n토스트기",
  },
  {
    id: "10",
    title: "Tábua de corte\n\n도마",
  },
  {
    id: "11",
    title: "Geladeira\n\n냉장고",
  },
  {
    id: "12",
    title: "Fogão\n\n전기 레인지",
  },
  {
    id: "13",
    title: "Forno\n\n오븐",
  },
];

const SALADEESTAR = [
  {
    id: "1",
    title: "Porta\n\n",
  },
  {
    id: "2",
    title: "Janela\n\n",
  },
  {
    id: "3",
    title: "Garagem\n\n",
  },
  {
    id: "4",
    title: "Telhado\n\n",
  },
  {
    id: "5",
    title: "Antena\n\n",
  },
  {
    id: "6",
    title: "Varanda\n\n",
  },
  {
    id: "7",
    title: "Chaminé\n\n",
  },
  {
    id: "8",
    title: "Rede de dormir\n\n",
  },
  {
    id: "9",
    title: "Grama\n\n",
  },
  {
    id: "10",
    title: "Churrasqueira\n\n",
  },
];

const QUARTO = [
  {
    id: "1",
    title: "Cama\n\n침대",
  },
  {
    id: "2",
    title: "Colchão\n\n매트리스",
  },
  {
    id: "3",
    title: "Travesseiro\n\n베개",
  },
  {
    id: "4",
    title: "Guarda roupa\n\n옷장",
  },
  {
    id: "5",
    title: "Cabide\n\n옷걸이",
  },
  {
    id: "6",
    title: "Espelho\n\n거울",
  },
  {
    id: "7",
    title: "Despertador\n\n알람 시계",
  },
  {
    id: "8",
    title: "Escrivaninha\n\n책상",
  },
  {
    id: "9",
    title: "Cortina\n\n커튼",
  },
  {
    id: "10",
    title: "Ar condicionado\n\n에어컨",
  },
];

const BANHEIRO = [
  {
    id: "1",
    title: "Privada\n\n변기",
  },
  {
    id: "2",
    title: "Papel higiênico\n\n화장지",
  },
  {
    id: "3",
    title: "Pia\n\n세면대",
  },
  {
    id: "4",
    title: "Sabonete\n\n비누",
  },
  {
    id: "5",
    title: "Shampoo\n\n샴푸",
  },
  {
    id: "6",
    title: "Chuveiro\n\n샤워기",
  },
  {
    id: "7",
    title: "Banheira\n\n욕조",
  },
  {
    id: "8",
    title: "Escova de dentes\n\n칫솔",
  },
  {
    id: "9",
    title: "Pasta de dentes\n\n치약",
  },
  {
    id: "10",
    title: "Toalha\n\n수건",
  },
  {
    id: "11",
    title: "Secador de cabelo\n\n헤어 드라이어",
  },
];

const Item = ({ title }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{title}</Text>
  </View>
);

function chageList(title){
  var data = CASA;
  if (title == 'casa') {
    data = CASA;
  } else if (title == 'cozinha') {
    data = COZINHA;
  } else if (title == 'sala de estar') {
    data = SALADEESTAR;
  } else if (title == 'quarto') {
    data = QUARTO;
  } else if(title == 'banheiro') {
    data = BANHEIRO;
  }
  return(data);
}

const Theme = ({title}) => {
  return(
    <View style={styles.themeContainer}>
      <Pressable
        onPress={() => chageList(title)}
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
}

function LearnListScreen() {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );
  
  var list = "quarto";

  return(
    <View>
      <ScrollView style={styles.MainContainer}>

        <View style={{backgroundColor: '#ce8135'}}>
          <Text style={styles.titleTheme}>
            casa
          </Text>
        </View>
        <ScrollView horizontal={true} style={styles.themeSelection}>
            <Theme title='casa'/>
            <Theme title='cozinha'/>
            <Theme title='sala de estar'/>
            <Theme title='quarto'/>
            <Theme title='banheiro'/>
        </ScrollView>

        <Text style={styles.listTitle}>
          {list}
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={chageList(list)}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

      </ScrollView>
    </View>
  );
};
  
  const styles = StyleSheet.create({
    MainContainer: {
      backgroundColor: '#dF9246'
    },
    titleTheme: {
      textAlign: 'center',
      marginTop: 20,
      marginBottom: 10,
      fontSize: 25,
      fontFamily: 'Asap_700Bold',
      textTransform: 'capitalize',
      color: 'white',
    },
    themeSelection: {
      backgroundColor: '#ce8135',
      paddingTop: 20,
      borderBottomColor: '#424242',
      borderBottomWidth: 1
    },
    themeContainer: {
      borderBottomColor: '#bfbfbf',
      borderBottomWidth: 50,
      borderRadius: 20,
      marginBottom: 30,
      marginHorizontal: 18,
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
    listTitle: {
      textTransform: 'capitalize',
      marginTop: 20,
      textAlign: 'center',
      color: 'black',
      fontSize: 20,
      textDecorationLine: 'underline',
      fontFamily: 'Asap_700Bold'
    },
    listContainer: {
      paddingTop: 20,
      paddingBottom: 35
    },
    listItem: {
      paddingVertical: 10,
      marginVertical: 20,
      marginHorizontal: 50,
      borderRadius: 15,
      backgroundColor: 'white',
    },
    itemTitle: {
      textAlign: 'center',
      fontFamily: 'Asap_700Bold',
      fontSize: 18,
    }
  });
  
  export default LearnListScreen;