import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({    
    mainView: {
        backgroundColor: '#905ca0',
        height: '100%'
    },
    title: {
        marginTop: 10,
        marginBottom: 15,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center'
    },
    i: {
        width: 35.4,
        height: 35.6,
        position: 'absolute',
        left: 15,
        borderRadius: 50,
        backgroundColor: 'white'
    },
    modalContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    modal: {
        width: '80%',
        padding: 25,
        borderRadius: 20,
        backgroundColor: '#ffffcc',
        alignItems: 'center'
    },
    modalText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 25,
        marginBottom: 20,
        textAlign: "center",
    },
    modalConfirmation: {
        width: '70%',
        marginTop: 15,
        borderRadius: 100,
        backgroundColor: '#3399ff',
    },
    modalConfirmationText: {
        paddingTop: 4,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: 'white',
        lineHeight: 50,
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
    },
    progress: {
        lineHeight: 35,
        color: 'white',
        fontSize: 25,
        fontFamily:  'Poppins_700Bold',
        position: 'absolute',
        right: '42%'
    },
    cardContainer: {
        marginTop: 60,
        marginBottom: 60,
        height: 350,
        justifyContent: "center",
        alignItems: "center"
    },
    card: {
        width: 300,
        height: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center"
    },
    cardText: {
        width: 300,
        color: '#202020',
        fontSize: 35,
        fontFamily:  'Poppins_400Regular',
        textAlign: 'center',
    },
    nextContainer: {
        paddingHorizontal: 130
    },
    next: {
        lineHeight: 50,
        color: 'white',
        fontSize: 25,
        fontFamily:  'Poppins_700Bold',
        textAlign: 'center',
        textTransform: 'capitalize'
    }
});

export default styles;