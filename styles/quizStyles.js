import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#3166B0',
        height: '100%',
        paddingHorizontal: 30,
    },
    counter: {
        marginTop: 20,
        paddingBottom: 5,
        marginHorizontal: 60,
        color: 'white',
        fontSize: 30,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ffffff'
    },
    question: {
        marginTop: 10,
        color: 'white',
        fontSize: 30,
        fontFamily: 'Poppins_500Medium'

    },
    questionWordContainer: {
        marginVertical: 20,
        alignItems: 'center',
    },
    questionWord: {
        marginBottom: 5,
        paddingHorizontal: 15,
        paddingVertical: 10,
        color: 'black',
        fontSize: 35,
        fontFamily: 'Poppins_700Bold',
        backgroundColor: 'white',
        borderRadius: 15

    },

    radioInputContainer: {
        flexDirection: 'row',
        marginBottom: 30,
    },
    radioInput: {
        width: 40,
        height: 40,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
    radioText: {
        marginLeft: 10,
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        lineHeight: 46,
    },

    confirmButtonContainer: {
        marginTop: 0,
        alignItems: 'center'
    },
    confirmButtonShadow: {
        borderBottomColor: '#529C3E',
        borderBottomWidth: 50,
        borderRadius: 30,
        marginBottom: 5,
        marginHorizontal: 18,
        width: 180,
        height: 85,
    },
    confirmButton: {
        paddingTop: 5,
        backgroundColor: '#7BE85D',
        borderRadius: 30,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    confirmButtonText: {
        color: '#005500',
        fontSize: 25,
        textTransform: 'capitalize',
        fontFamily: 'Poppins_700Bold',
    }
});

export default styles;