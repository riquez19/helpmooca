import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        width: 150,
        height: 150,
        borderRadius: 20,
    },
    imput: {
        marginTop: 15,
        padding: 10,
        width: 300,
        backgroundColor: '#2c3e50',
        fontSize: 16,
        fontWeight: 'bold',
        borderRadius:3,
        borderColor: '#FFF', 
        borderWidth: 1,  
        marginBottom: 10
    },
    button: {
        marginTop: 15,
        height: 45,
        width: 150,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonAdd: {
        marginTop: 15,
        height: 45,
        width: 150,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',

    },
    containerButton: {
        position: 'absolute',
        top: 520,
        marginLeft: 270,
        borderRadius: 400,
        backgroundColor: 'transparent',
      },
    buttonAdd: {
        backgroundColor: 'transparent',
        borderRadius: 300,
      },
    icon: {
    },
    category: {
        width: 100,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
    
    
      },
});

export default styles;