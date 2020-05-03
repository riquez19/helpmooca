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
        this.singIn()
      } else {
        Alert.alert(
        'Atenção',
        'Por favor, digite um e-mail e/ou senha para cadastro');
      }
    } else {
      Alert.alert(
        'Atenção',
        'Por favor, digite um e-mail e/ou senha para cadastro');
    }
  };

 
  singIn = async() => {
    const { TextInputEmail, TextInputSenha} = this.state;

    try{
      const user = await firebase.auth().createUserWithEmailAndPassword(TextInputEmail,TextInputSenha)

      this.setState({ cadastrou: true})      

      console.log(user)

      Alert.alert(
        'Parabéns',
        'Usuário Cadastrado com sucesso',
        [
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},    
            {text: 'OK', onPress: () => (this.props.navigation.navigate('Login'))},
            ],
          ) 

    } catch (err) {
      Alert.alert(
        'Atenção',
        'Problema ao cadastrar novo usuário. Tente novamente mais tarde',
        [
        {text: 'Cancel', onPress: () => console.log('Cancel Pressed!')},    
        {text: 'OK', onPress: () => console.log('OK Pressed!')},
        ],
      )  

      onButtonPress = () => (this.props.navigation.navigate('Login'))
      console.log(err)
    }
  }  
  
    

  render() {
    return (
      <View style={styles.container}>
        <Image
         source={require('../../assets/cadastrese.png')}
         style={styles.logoCriar}
        />

        <TextInput
        style={styles.imput}
        underlineColorAndroid={'#FFF'}
        placeholder='E-mail:'
        placeholderTextColor = '#FFF'
        onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
        />

        <TextInput
        style={styles.imput}
        secureTextEntry={true}
        underlineColorAndroid={'#FFF'}
        placeholder='Senha:'
        placeholderTextColor = '#FFF'
        onChangeText={TextInputEmail => this.setState({ TextInputSenha })}
        /> 
        

        <TouchableOpacity 
        style={styles.button}
        onPress={this.CheckTextInput}
        >  
        <Text style={styles.buttonText}> Cadastrar </Text>            
        </TouchableOpacity>   


      </View>
    )
  }

}




