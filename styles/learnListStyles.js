import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    MainContainer: {
        backgroundColor: '#dF9246'
    },
    titleTheme: {
        textAlign: 'center',
        marginTop: 20,
        marginBottom: 5,
        fontSize: 25,
        fontFamily: 'Poppins_700Bold',
        textTransform: 'capitalize',
        textDecorationLine: 'underline',
        color: 'white'
    },



    listSelection: {
        backgroundColor: '#c88236',
        paddingTop: 20,
        borderBottomColor: '#424242',
        borderBottomWidth: 1,
    },
    listButtonContainer: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 50,
        borderRadius: 20,
        marginBottom: 5,
        marginHorizontal: 18,
        width: 124,
        height: 110,
    },
    listButton: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 105,
    },
    listButtonIcon: {
        lineHeight: 110,
        textAlign: 'center',
    },
    text: {
        fontSize: 16,
        fontFamily: 'Poppins_400Regular',
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'black'
    },



    listTitle: {
        textTransform: 'capitalize',
        marginTop: 20,
        textAlign: 'center',
        color: '#222222',
        fontSize: 20,
        fontFamily: 'Poppins_700Bold'
    },
    listContainer: {
        paddingTop: 20,
        paddingBottom: 35
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