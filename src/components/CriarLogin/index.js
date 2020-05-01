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

  state = {
    email: '',
    password: '',
    cadastrou: false,
    erro: true,
  }

 
  singIn = async() => {
    const { email, password} = this.state;

    try{
      const user = await firebase.auth().createUserWithEmailAndPassword(email,password)

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
        placeholder='E-mail:'
        placeholderTextColor = '#FFF'
        value = {this.state.email}
        onChangeText={email => this.setState({ email })}
        />

        <TextInput
        style={styles.imput}
        secureTextEntry={true}
        placeholder='Senha:'
        placeholderTextColor = '#FFF'
        value = {this.state.password}
        onChangeText={password => this.setState({ password })}
        /> 
        

        <TouchableOpacity 
        style={styles.button}
        onPress={this.singIn}
        >  
        <Text style={styles.buttonText}> Cadastrar </Text>            
        </TouchableOpacity>   


      </View>
    )
  }

}




