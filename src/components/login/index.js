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
    antenticou: false,
    erro: true,
  }

  
  login = async() => {
    const { email, password} = this.state;

    try{
      const user = await firebase.auth().signInWithEmailAndPassword(email,password)

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
        onPress={this.login}
        >  
        <Text style={styles.buttonText}> Login </Text>            
        </TouchableOpacity> 

        <TouchableOpacity 
        style={styles.buttonCreate}
        onPress={() => (this.props.navigation.navigate('CriarLogin'))}
        >  
        <Text style={styles.buttonTextCreate}> Criar Usuário </Text>            
        </TouchableOpacity> 

        {this.state.antenticou ? this.props.navigation.navigate('Map') : null}  


      </View>
    )
  }

}




