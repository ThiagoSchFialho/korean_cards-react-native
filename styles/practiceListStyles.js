import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    themeSelection: {
        height: '100%',
        paddingVertical: 30,
        backgroundColor: '#905ca0'
    },
    themeMenu: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 40,
        marginHorizontal: 50,
        justifyContent: 'space-between'
    },
    themeContainer: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 50,
        borderRadius: 20,
        marginBottom: 50,
        width: '40%',
        height: 110,
    },
    theme: {
        backgroundColor: 'white',
        borderRadius: 20,
        height: 105,
    },
    text: {
        fontSize: 17,
        fontFamily: 'Asap_700Bold',
        lineHeight: 110,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: 'black'
    }
});

export default styles;