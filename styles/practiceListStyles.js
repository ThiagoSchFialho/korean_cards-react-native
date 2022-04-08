import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    listSelection: {
        height: '100%',
        paddingVertical: 30,
        paddingHorizontal: 50,
        backgroundColor: '#905ca0'
    },
    listMenu: {
        marginTop: 30,
        marginBottom: 40
    },
    listContainer: {
        borderBottomColor: '#bfbfbf',
        borderBottomWidth: 50,
        borderRadius: 20,
        marginBottom: 50,
        height: 110,
    },
    list: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: 'white',
        borderRadius: 20,
        height: 105,
    },
    text: {
        width: '60%',
        fontSize: 17,
        fontFamily: 'Poppins_500Medium',
        lineHeight: 110,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#202020'
    },
    icon: {
        width: '40%',
        fontFamily: 'Poppins_500Medium',
        lineHeight: 110,
        textAlign: 'center',
        textTransform: 'capitalize',
        color: '#202020'
    }
});

export default styles;