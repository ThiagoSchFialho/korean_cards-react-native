import { StyleSheet } from "react-native";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const styles = StyleSheet.create({    
    mainView: {
        backgroundColor: '#905ca0',
        height: '100%'
    },
    title: {
        marginTop: 20,
        marginBottom: 30,
        color: 'white',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        textAlign: 'center'
    },

    informationButton: {
        width: 35.4,
        height: 35.6,
        position: 'absolute',
        left: 15,
        borderRadius: 50,
        backgroundColor: 'black'
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
        marginHorizontal: 120,
        lineHeight: 35,
        color: 'white',
        fontSize: 25,
        fontFamily:  'Poppins_700Bold',
        textAlign: 'center'
    },

    cardContainer: {
        marginTop: 70,
        marginBottom: 60,
        marginHorizontal: 30,
        height: 350,
        justifyContent: "center",
        alignItems: "center",
    },
    card: {
        position: 'absolute',
        width: 300,
        height: 300,
        padding: 20,
        backgroundColor: 'white',
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
    },
    cardTextWord: {
        width: 300,
        color: '#202020',
        fontSize: 35,
        fontFamily:  'Poppins_400Regular',
        textAlign: 'center'
    },
    cardTextTranslation: {
        width: 300,
        color: '#202020',
        fontSize: 35,
        fontFamily:  'Poppins_400Regular',
        textAlign: 'center',
        transform: [
            {
                rotateY: '180deg'
            }
        ]
    },

    nextContainer: {
        paddingHorizontal: 130
    },
    nextButton: {
        lineHeight: 50,
        color: 'white',
        fontSize: 25,
        fontFamily:  'Poppins_700Bold',
        textAlign: 'center',
        textTransform: 'capitalize'
    },
    leaveButton: {
        lineHeight: 60,
        fontSize: 40,
        fontFamily:  'Poppins_700Bold',
        textAlign: 'center',
        textTransform: 'capitalize',
        borderRadius: 5,
        backgroundColor: '#99ff99',
        color: '#339933',
    }
});

export default styles;