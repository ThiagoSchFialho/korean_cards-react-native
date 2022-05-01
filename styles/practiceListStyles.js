import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        height: '100%',
        paddingTop: 40,
        backgroundColor: '#905ca0'
    },
    themeTitleContainer: {
        position: 'absolute',
        top: 10,
        width: '100%',

    },
    themeTitle: {
        textAlign: 'center',
        fontSize: 25,
        fontFamily: 'Poppins_700Bold',
        textTransform: 'capitalize',
        textDecorationLine: 'underline',
        color: '#000000',
    },

    listSelectionContainer: {
        marginTop: 40,
        marginHorizontal: 50,
    },
    buttonContainer: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 50,
        borderRadius: 20,
        marginBottom: 45,
        height: 110,
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        height: 105,
    },
    icon: {
        width: '40%',
        fontFamily: 'Poppins_500Medium',
        lineHeight: 110,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#202020'
    },
    text: {
        width: '60%',
        fontSize: 17,
        fontFamily: 'Poppins_500Medium',
        lineHeight: 110,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#202020'
    }
});

export default styles;