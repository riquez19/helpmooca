import {StyleSheet, Dimensions} from 'react-native';


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#2c3e50',
        justifyContent: 'center',
        alignItems: 'center',

    },
    logo: {
        marginTop: 50,
        width: 130,
        height: 130,
        borderRadius: 20,
    },
    logoCriar: {
        marginTop: 10,
        width: 300,
        height: 150,
        resizeMode: 'contain',
    },
    imput: {
        flex:1,
        color:'white',
        paddingLeft:10,
        paddingTop:0,
        paddingBottom:0,
        fontSize: 18,
        
    },
    button: {
        marginTop: 30,
        height: 45,
        width: 150,
        padding: 10,
        backgroundColor: '#FFF',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonCreate: {
        marginTop: 30,
        height: 30,
        width: 200,
        padding: 10,
        backgroundColor: '#2c3e50',
        borderRadius: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#FFF', 
        borderWidth: 1,
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    buttonTextCreate: {
        color: '#FFF',
        fontSize: 16,
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
      containerButton2: {
        position: 'absolute',
        top: 460,
        marginLeft: 285,
        borderRadius: 400,
        backgroundColor: '#FFF',
      },
    category: {
        width: 100,
        maxHeight: 200,
        backgroundColor: '#FFF',
        marginHorizontal: 20,
    
    
      },
    header: {
        flex:2,
        justifyContent:'center',
        alignItems: 'center'
    },
    footer: {
        flex:2,
        backgroundColor:'transparent',
        
        paddingHorizontal:30,
        paddingVertical: 20,
        width:'100%',
        
    },
    text_footer: {
        color:'#f2f2f2',
        fontSize:18,
    },
    action: {
        flexDirection:'row',
        paddingTop:10,
        paddingBottom:0,
        borderBottomWidth:1,
        borderBottomColor:'#f2f2f2',
        height:45
        
    },
    button1:{
        alignItems:'center',
        marginTop:40
    },
    login: {
        width:"70%",
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        flexDirection:'row'
    },
    textLogin:{
        color:'white',
        fontWeight:'bold',
        fontSize:18,
        alignItems: 'center',
        justifyContent:'center'
    },
    criarConta: {
        width:"70%",
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:15,
        marginTop: 20,
        borderColor: '#ffd700', 
        borderWidth: 1,
    },
    textCreate:{
        color:'#daa520',
        fontWeight:'bold',
        fontSize: 18
    }

});

export default styles;