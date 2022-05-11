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

    selectInputContainer: {
        paddingHorizontal: 20
    },
    selectInputLabel: {
        color: 'white',
        fontSize: 25,
        fontFamily: 'Poppins_400Regular'
    },
    selectInput: {
        backgroundColor: 'white',
        borderRadius: 10
    },
    selectQntQuestionsInputContainer: {
        marginVertical: 100
    },


    submitButtonContainer: {
        marginTop: 130,
        alignItems: 'center'
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
        color: 'black',
        fontSize: 25,
        textTransform: 'capitalize',
        fontFamily: 'Poppins_700Bold',
    }
});

export default styles;