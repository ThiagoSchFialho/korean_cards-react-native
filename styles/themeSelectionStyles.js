import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    themeMenu: {
      flexDirection: 'column',
      marginTop: 40,
      marginBottom: 40,
      marginHorizontal: 25,
    },
    theme: {
      height: 150,
      padding: 1,
      marginBottom: 30,
      borderRadius: 5,
      backgroundColor: 'black',
      borderWidth: 4,
      borderColor: 'white'
    },
    image: {
      height: 140,
      padding: 15,
      marginBottom: 25,
      borderRadius: 10,
    },
    text: {
      width: 100,
      paddingVertical: 2,
      paddingHorizontal: 4,
      backgroundColor: 'white',
      borderColor: 'black',
      borderWidth: 1,
      borderRadius: 5,
      fontSize: 17,
      fontFamily: 'Asap_700Bold',
      textTransform: 'capitalize',
      textAlign: 'center',
      color: 'black',
    }
});

export default styles;