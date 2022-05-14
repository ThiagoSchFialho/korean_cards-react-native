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
        textAlign: 'center',
        fontSize: 35,
        fontFamily: 'Poppins_700Bold',
        backgroundColor: 'white',
        borderRadius: 15

    },

    radioInputContainer: {
        flexDirection: 'row',
        marginBottom: 20,
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
        width: '100%',
        paddingLeft: 10,
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        lineHeight: 46,
    },

    userFeedBackContainer: {
        position: 'absolute',
        width: '100%',
        height: 160,
        bottom: 0,
        padding: 20,
        alignItems: 'center'
    },
    userFeedBackText: {
        marginBottom: 40,
        fontFamily: 'Poppins_400Regular',
        fontSize: 20,
        color: '#242424',
    },
    userFeedBackButton: {
        width: '50%',
        borderRadius: 100,
    },
    userFeedBackButtonText: {
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#242424',
        lineHeight: 50,
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
    },

    resultsContainer: {
        backgroundColor: '#3166B0',
        height: '100%',
        padding: 0,
        justifyContent: 'center'
    },
    resultsTitle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
        textDecorationLine: "underline",
        fontFamily: 'Poppins_700Bold'
    },
    resultsText: {
        marginVertical: 60,
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
        textTransform: 'capitalize',
        fontFamily: 'Poppins_700Bold'
    },
    resultsButtonContainer: {
        alignItems: 'center'
    },
    resultsButton: {
        width: '50%',
        borderRadius: 100,
        backgroundColor: 'orange'
    },
    resultsButtonText: {
        textTransform: 'capitalize',
        textAlign: 'center',
        color: '#242424',
        lineHeight: 50,
        fontFamily: 'Poppins_700Bold',
        fontSize: 25,
    },

    confirmButtonContainer: {
        position: 'absolute',
        bottom: 5,
        width: 411,
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