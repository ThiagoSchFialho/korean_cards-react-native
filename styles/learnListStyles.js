import { StyleSheet } from "react-native";

const styles = StyleSheet.create({    
    listContainer: {
        backgroundColor: '#dF9246'
    },

    headerContainer: {
        elevation: 20,
        borderBottomWidth: 0
    },

    titleTheme: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 25,
        fontFamily: 'Poppins_700Bold',
        textTransform: 'capitalize',
        textDecorationLine: 'underline',
        color: '#000000',
    },

    listSelection: {
        backgroundColor: '#c88236',
        backgroundColor: '#dF9246',
        paddingTop: 20
    },
    listSelectionButtonContainer: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 50,
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal: 18,
        width: 124,
        height: 110,
    },
    listSelectionButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 105,
    },
    listSelectionButtonIcon: {
        lineHeight: 110,
        textAlign: 'center'
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'black'
    },

    explanationContainer: {
        marginHorizontal: 20,
        borderRadius: 5,
        backgroundColor: '#80bfff',
    },
    explanationTitle: {
        padding: 10,
        textTransform: "capitalize",
        fontSize: 20,
        fontFamily: 'Poppins_700Bold',
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        borderTopLeftRadius: 5,
        borderTopRightRadius: 5,
        backgroundColor: '#1a8cff'
    },
    explanation: {
        padding: 10,
        textAlign: "justify",
        fontSize: 15,
        fontFamily: 'Poppins_400Regular',
    },

    listTitle: {
        textTransform: 'capitalize',
        marginTop: 20,
        marginBottom: 20,
        textAlign: 'center',
        color: '#000000',
        textDecorationLine: 'underline',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },
    listItem: {
        marginVertical: 20,
        marginHorizontal: 50,
        borderRadius: 15,
        backgroundColor: 'white',
    },
    itemTitle: {
        lineHeight: 50,
        textAlign: 'center',
        fontFamily: 'Poppins_500Medium',
        fontSize: 21,
    }
});

export default styles;