import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    mainContainer: {
        backgroundColor: '#3166B0',
        height: '100%'
    },
    titleContainer: {
        marginTop: 10,
        marginBottom: 30,
    },
    title: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center',
        textTransform: 'capitalize',
        textDecorationLine: "underline",
        fontFamily: 'Poppins_700Bold'
    },

    form: {
        flexDirection: 'column',
        paddingHorizontal: 30,
        height: '65%',
    },
    inputLabel: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Poppins_400Regular',
        textDecorationLine: 'underline',
    },
    selectInputContainer: {
        flex: 1,
    },
    selectInput: {
        backgroundColor: 'white',
        borderRadius: 10
    },


    selectQntQuestionsInputContainer: {
        flex: 1,
    },
    radioInputsContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
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
        marginTop: 5,
        color: 'white',
        fontFamily: 'Poppins_500Medium',
        fontSize: 20,
        textAlign: 'center',
    },


    submitButtonContainer: {
        marginTop: 60,
        alignItems: 'center',
    },
    submitButtonShadow: {
        borderBottomColor: '#529C3E',
        borderBottomWidth: 50,
        borderRadius: 30,
        marginBottom: 5,
        marginHorizontal: 18,
        width: 160,
        height: 85,
    },
    submitButton: {
        paddingTop: 5,
        backgroundColor: '#7BE85D',
        borderRadius: 30,
        height: 80,
        alignItems: 'center',
        justifyContent: 'center'
    },
    submitButtonText: {
        color: '#005500',
        fontSize: 25,
        textTransform: 'capitalize',
        fontFamily: 'Poppins_700Bold',
    }
});

export default styles;