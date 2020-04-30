import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput
} from 'react-native';


import styles from '../../styles/index'


export default class App extends Component{

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
        />

        <TextInput
        style={styles.imput}
        secureTextEntry={true}
        placeholder='Senha:'
        placeholderTextColor = '#FFF'
        /> 
        

        <TouchableOpacity 
        style={styles.button}
        onPress={ () => {this.props.navigation.navigate('Map')}
        }

        >
  
        <Text style={styles.buttonText}> Login </Text>  
          
        </TouchableOpacity>


      </View>
    )
  }

}




