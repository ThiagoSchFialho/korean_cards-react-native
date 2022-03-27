import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'react-native';
import styles from '../styles/learnListStyles'

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
    title: "Sofá\n\n소파",
  },
  {
    id: "2",
    title: "parede\n\n벽",
  },
  {
    id: "3",
    title: "teto\n\n천장",
  },
  {
    id: "4",
    title: "Quadro\n\n그림",
  },
  {
    id: "5",
    title: "Lareira\n\n벽난로",
  },
  {
    id: "6",
    title: "Escadaria\n\n계단",
  },
  {
    id: "7",
    title: "Poltrona\n\n안락의자",
  },
  {
    id: "8",
    title: "Estante\n\n책장",
  },
  {
    id: "9",
    title: "Televisão\n\n텔레비전",
  },
  {
    id: "10",
    title: "Controle remoto\n\n리모콘",
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

function LearnListScreen({ route }) {
  const renderItem = ({ item }) => (
    <Item title={item.title}/>
  );

  const { tema } = route.params;

  var list = ['casa', 'cozinha', 'sala de estar', 'quarto', 'banheiro'];
  const [currentList, setCurrentList] = useState(0);
  var index = currentList;

  const ListButton = (props) => {
    return(
      <View style={styles.listButtonContainer}>
        <Pressable
          onPress={() => setCurrentList(props.index)}
          style={({ pressed }) => [
            {
              marginTop: pressed ? 5 : 0,
              marginBottom: pressed ? 45 : 50
            },
            styles.listButton
            ]}>
            <Text style={styles.text}>
              {props.title}
            </Text>
        </Pressable>
      </View>
    );
  }

  return(
    <View>
      <ScrollView style={styles.MainContainer}>

        <View style={{backgroundColor: '#ce8135'}}>
          <Text style={styles.titleTheme}>
            {tema}
          </Text>
        </View>
        <ScrollView horizontal={true} style={styles.listSelection}>

          <ListButton title="casa" index={0}/>
          <ListButton title="cozinha" index={1}/>
          <ListButton title="sala de estar" index={2}/>
          <ListButton title="quarto" index={3}/>
          <ListButton title="banheiro" index={4}/>

        </ScrollView>

        <Text style={styles.listTitle}>
          {list[index]}
        </Text>
        <View style={styles.listContainer}>
          <FlatList
            data={chageList(list[index])}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>

      </ScrollView>
    </View>
  );
};

export default LearnListScreen;