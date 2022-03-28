import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    themeMenu: {
      flexDirection: 'column',
      marginTop: 40,
      marginBottom: 40,
      marginHorizontal: 25,
    },
    theme: {
      height: 144,
      padding: 2,
      marginBottom: 30,
      borderRadius: 12,
      backgroundColor: 'white',
    },
    image: {
      height: 140,
      padding: 15,
      marginBottom: 25,
      borderRadius: 12,
    },
    text: {
      width: 110,
      paddingTop: 5,
      paddingHorizontal: 4,
      backgroundColor: 'white',
      borderRadius: 5,
      fontSize: 17,
      fontFamily: 'Poppins_500Medium',
      textTransform: 'capitalize',
      textAlign: 'center',
      color: 'black',
    }
});

export default styles;