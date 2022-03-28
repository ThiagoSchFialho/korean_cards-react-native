import React, { useState } from 'react';
import { ScrollView, Text, View, Pressable, FlatList } from 'react-native';
import styles from '../styles/learnListStyles'

const CASA = [
  {
    id: "1",
    word: "Porta",
    translation: "문",
  },
  {
    id: "2",
    word: "Janela",
    translation: "창문",
  },
  {
    id: "3",
    word: "Garagem",
    translation: "차고",
  },
  {
    id: "4",
    word: "Telhado",
    translation: "지붕",
  },
  {
    id: "5",
    word: "Antena",
    translation: "안테나",
  },
  {
    id: "6",
    word: "Varanda",
    translation: "발코니",
  },
  {
    id: "7",
    word: "Chaminé",
    translation: "굴뚝",
  },
  {
    id: "8",
    word: "Rede de dormir",
    translation: "해먹",
  },
  {
    id: "9",
    word: "Grama",
    translation: "그램",
  },
  {
    id: "10",
    word: "Churrasqueira",
    translation: "바베큐 그릴",
  },
];

const COZINHA = [
  {
    id: "1",
    word: "Micro-ondas",
    translation: "전자레인지",
  },
  {
    id: "2",
    word: "Panela",
    translation: "냄비",
  },
  {
    id: "3",
    word: "Abridor de latas",
    translation: "깡통따개",
  },
  {
    id: "4",
    word: "Escorredor de pratos",
    translation: "접시 랙",
  },
  {
    id: "5",
    word: "Máquina de lavar louça",
    translation: "식기세척기",
  },
  {
    id: "6",
    word: "Detergente",
    translation: "주방세제",
  },
  {
    id: "7",
    word: "Esponja",
    translation: "스펀지",
  },
  {
    id: "8",
    word: "Liquidificador",
    translation: "믹서기",
  },
  {
    id: "9",
    word: "Torradeira",
    translation: "토스트기",
  },
  {
    id: "10",
    word: "Tábua de corte",
    translation: "도마",
  },
  {
    id: "11",
    word: "Geladeira",
    translation: "냉장고",
  },
  {
    id: "12",
    word: "Fogão",
    translation: "전기 레인지",
  },
  {
    id: "13",
    word: "Forno",
    translation: "오븐",
  },
];

const SALADEESTAR = [
  {
    id: "1",
    word: "Sofá",
    translation: "소파",
  },
  {
    id: "2",
    word: "parede",
    translation: "벽",
  },
  {
    id: "3",
    word: "teto",
    translation: "천장",
  },
  {
    id: "4",
    word: "Quadro",
    translation: "그림",
  },
  {
    id: "5",
    word: "Lareira",
    translation: "벽난로",
  },
  {
    id: "6",
    word: "Escadaria",
    translation: "계단",
  },
  {
    id: "7",
    word: "Poltrona",
    translation: "안락의자",
  },
  {
    id: "8",
    word: "Estante",
    translation: "책장",
  },
  {
    id: "9",
    word: "Televisão",
    translation: "텔레비전",
  },
  {
    id: "10",
    word: "Controle remoto",
    translation: "리모콘",
  },
];

const QUARTO = [
  {
    id: "1",
    word: "Cama",
    translation: "침대",
  },
  {
    id: "2",
    word: "Colchão",
    translation: "매트리스",
  },
  {
    id: "3",
    word: "Travesseiro",
    translation: "베개",
  },
  {
    id: "4",
    word: "Guarda roupa",
    translation: "옷장",
  },
  {
    id: "5",
    word: "Cabide",
    translation: "옷걸이",
  },
  {
    id: "6",
    word: "Espelho",
    translation: "거울",
  },
  {
    id: "7",
    word: "Despertador",
    translation: "알람 시계",
  },
  {
    id: "8",
    word: "Escrivaninha",
    translation: "책상",
  },
  {
    id: "9",
    word: "Cortina",
    translation: "커튼",
  },
  {
    id: "10",
    word: "Ar condicionado",
    translation: "에어컨",
  },
];

const BANHEIRO = [
  {
    id: "1",
    word: "Privada",
    translation: "변기",
  },
  {
    id: "2",
    word: "Papel higiênico",
    translation: "화장지",
  },
  {
    id: "3",
    word: "Pia",
    translation: "세면대",
  },
  {
    id: "4",
    word: "Sabonete",
    translation: "비누",
  },
  {
    id: "5",
    word: "Shampoo",
    translation: "샴푸",
  },
  {
    id: "6",
    word: "Chuveiro",
    translation: "샤워기",
  },
  {
    id: "7",
    word: "Banheira",
    translation: "욕조",
  },
  {
    id: "8",
    word: "Escova de dentes",
    translation: "칫솔",
  },
  {
    id: "9",
    word: "Pasta de dentes",
    translation: "치약",
  },
  {
    id: "10",
    word: "Toalha",
    translation: "수건",
  },
  {
    id: "11",
    word: "Secador de cabelo",
    translation: "헤어 드라이어",
  },
];

const Item = ({ word, translation }) => (
  <View style={styles.listItem}>
    <Text style={styles.itemTitle}>{word}</Text>
    <Text style={styles.itemTitle}>{translation}</Text>
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
    <Item word={item.word} translation={item.translation}/>
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