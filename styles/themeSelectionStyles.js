import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    wellcomeMessageContainer: {
      paddingTop: 30,
      paddingHorizontal: 40
    },
    wellcomeMessageTitle: {
      textAlign: 'center',
      fontFamily: 'Poppins_500Medium',
      fontSize: 35,
    },
    wellcomeMessageImageContainer: {
      marginTop: 40,
      marginBottom: 10,
      alignItems: 'center'
    },
    wellcomeMessageImage: {
      height: 250,
      width: 250,
    },
    wellcomeMessageImageText: {
      textAlign: 'center',
      fontFamily: 'Poppins_700Bold',
      fontSize: 30,
      marginBottom: 40
    },
    wellcomeMessageText: {
      textAlign: 'justify',
      fontFamily: 'Poppins_400Regular',
      fontSize: 25,
    },
    wellcomeMessageButtonContainer: {
      marginTop: 60,
      alignItems: 'center'
    },
    wellcomeMessageButton: {
      paddingVertical: 10,
      paddingHorizontal: 20,
      borderRadius: 100,
      backgroundColor: '#3399ff',
    },
    wellcomeMessageTextButton: {
      color: 'white',
      fontFamily: 'Poppins_700Bold',
      fontSize: 20,
    },

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