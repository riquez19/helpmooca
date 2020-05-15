import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';
import firebase from  'react-native-firebase';


import styles from '../../styles/index'



export default class App extends Component{
  constructor(props) {
  super(props);
  this.state = {
    antenticou: false,
    erro: true,
    TextInputSenha: '',
    TextInputEmail: '',
  }}

  CheckTextInput = () => {
    if (this.state.TextInputEmail != '') {
      if (this.state.TextInputSenha != '') {
        this.login()
      } else {
        Alert.alert(
        'Atenção',
        'Por favor, digite seu email e/ou senha');
      }
    } else {
      Alert.alert(
        'Atenção',
        'Por favor, digite seu email e/ou senha');
    }
  };

  
  login = async() => {
    const { TextInputEmail, TextInputSenha } = this.state;

    try{
      const user = await firebase.auth().signInWithEmailAndPassword(TextInputEmail,TextInputSenha)

      this.setState({ antenticou: true})      

      console.log(user)

    } catch (err) {
      Alert.alert(  
        'Atenção',
        'Usuário ou Senha Inválidos'
      )  
      console.log(err)
    }
  }  
  
    

  render() {
    return (
      <View style={styles.container}>
        <Image
         source={require('../../assets/aviso.png')}
         style={styles.logo}
        />

        <TextInput
        style={styles.imput}
        underlineColorAndroid={'#FFF'}
        placeholder='E-mail:'
        placeholderTextColor = '#FFF'
        keyboardType='email-address'
        onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
        
        />

        <TextInput
        style={styles.imput}
        secureTextEntry={true}
        underlineColorAndroid={'#FFF'}
        placeholder='Senha:'
        placeholderTextColor = '#FFF'
        onChangeText={TextInputSenha => this.setState({ TextInputSenha })}
        />         

        <TouchableOpacity 
        style={styles.button}
        onPress={this.CheckTextInput}
        >  
        <Text style={styles.buttonText}> Login </Text>            
        </TouchableOpacity> 

        <TouchableOpacity 
        style={styles.buttonCreate}
        //onPress={() => (this.props.navigation.navigate('CriarLogin'))}
        onPress={() => (this.props.navigation.navigate('Map'))}
        >  
        <Text style={styles.buttonTextCreate}> Criar Usuário </Text>            
        </TouchableOpacity> 

        {this.state.antenticou ? this.props.navigation.navigate('Map') : null}  


      </View>
    )
  }

}




