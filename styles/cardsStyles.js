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

    infoButton: {
        width: 35.4,
        height: 35.6,
        position: 'absolute',
        left: 15,
        borderRadius: 50,
        backgroundColor: '#b3e6ff'
    },
    infoCardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    infoCard: {
        width: '80%',
        padding: 25,
        borderRadius: 10,
        backgroundColor: '#ffffcc',
        alignItems: 'center',
        elevation: 20
    },
    infoCardText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 24,
        marginBottom: 18,
        textAlign: "center",
    },
    infoCardButton: {
        width: '70%',
        marginTop: 15,
        borderRadius: 100,
        backgroundColor: '#3399ff',
    },
    infoCardButtonText: {
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
        marginBottom: 80,
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
        color: '#202020',
        fontSize: 35,
        fontFamily:  'Poppins_400Regular',
        textAlign: 'center',
    },
    cardTextTranslation: {
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

    controlButtonsContainer: {
        flexDirection: 'row',
    },
    controlButton: {
        flex: 1,
        margin: 15,
    },
    controlButtonText: {
        lineHeight: 50,
        color: 'white',
        fontSize: 25,
        fontFamily:  'Poppins_700Bold',
        textAlign: 'center',
        textTransform: 'capitalize'
    },

    stayOrLeaveCardContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    stayOrLeaveCard: {
        width: '80%',
        padding: 25,
        borderRadius: 10,
        backgroundColor: '#3399ff',
        alignItems: 'center',
        elevation: 20
    },
    stayOrLeaveCardText: {
        fontFamily: 'Poppins_400Regular',
        fontSize: 25,
        marginBottom: 18,
        textAlign: "center",
        color: 'white',
    },
    stayOrLeaveCardButton: {
        width: '70%',
        marginTop: 15,
        borderRadius: 100,
        backgroundColor: '#ffffcc',
    },
    stayOrLeaveCardButtonText: {
        paddingTop: 4,
        textTransform: 'capitalize',
        textAlign: 'center',
        color: 'black',
        lineHeight: 50,
        fontFamily: 'Poppins_700Bold',
        fontSize: 20,
    }
});

export default styles;