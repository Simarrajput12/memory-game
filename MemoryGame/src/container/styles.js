
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    subContainer: {
        flex: 1,
        paddingHorizontal: 20
    },
    newGameButton: {
        height: 50,
        width: 100,
        backgroundColor: '#4B0150',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf:'center',
    },
    forntImage: {
        height: 60,
        width: 60
    },
    textStyle: {
        color: '#550A35',
        fontSize: 25,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop:10
    },
    textStyle1: {
        color: '#fff',
        fontSize: 15,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    text: {
        color: '#fff',
        fontSize: 16
    },
    text1: {
        textAlign: 'center',
        bottom: 0,
        fontSize: 20,
        color: '#550A35',

    },
    text2: {
        textAlign: 'center',
        fontSize: 20,
        color: '#550A35',
        marginTop: 30

    },
    wrap: {
        flexWrap: 'wrap', 
        flexDirection: 'row', 
        alignItems: 'center', 
        marginTop: 50, 
        justifyContent:'center'
    },
    winner: {
        textAlign:'center',
        bottom:25,
        fontSize:30,
        color: '#550A35',
    }
})

export default styles;