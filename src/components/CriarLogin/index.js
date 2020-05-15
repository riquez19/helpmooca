import React, {Component} from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StatusBar
} from 'react-native';
import firebase from  'react-native-firebase';
import styles from '../../styles/index';
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends Component{

  constructor(props) {
    super(props);
    this.state = {
      antenticou: false,
      erro: true,
      TextInputSenha: '',
      TextInputConfirmSenha: '',
      TextInputEmail: '',
      secureTextEntry: true,
      secureTextEntry_confirm: true
    }}

  CheckTextInput = () => {
    if (this.state.TextInputEmail != '') {
      if (this.state.TextInputSenha != '') {
        if(this.state.TextInputSenha == this.state.TextInputConfirmSenha) {
          this.singIn()
        } else {
          Alert.alert(
            'Atenção',
            'Senhas divergentes, favor digitar senhas iguais');
        }
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

  // validarSenha = () => {
  //   if(this.state.TextInputSenha != this.state.TextInputConfirmSenha) {
  //     Alert.alert(
  //       'Atenção',
  //       'Senhas divergentes, favor digitar senhas iguais');
  //   } else {
  //     this.singIn()
  //   }
  // }


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

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  secureTextEntry_confirm() {
    this.setState({
      secureTextEntry_confirm: !this.state.secureTextEntry_confirm
    })
  }
  
    

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
         source={require('../../assets/cadastrese.png')}
         style={styles.logoCriar}
         resizeMode={"stretch"}
        />
        </View>
        <Animatable.View
          style={styles.footer}
          animation="fadeInUpBig">
          <Text style={styles.text_footer}>E-mail</Text>
          <View style={styles.action}>
            <FontAwesome
              name="user-o"
              color="#f2f2f2"
              size={20}
            />
            <TextInput
              style={styles.imput}
              placeholder="Seu email..."
              placeholderTextColor="gray"
              value={this.state.TextInputEmail}
              onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
            />
          </View>

          <Text style={[styles.text_footer,{marginTop:15}]}>Senha</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              color='#f2f2f2'
              size={20}
            />
            {this.state.secureTextEntry ?
              <TextInput
                style={styles.imput}
                placeholder="Sua senha..."
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={TextInputSenha => this.setState({ TextInputSenha })}
              />
              :
              <TextInput
                style={styles.imput}
                placeholder="Sua senha..."
                onChangeText={TextInputSenha => this.setState({ TextInputSenha })}
              />
            }
            <TouchableOpacity
              onPress={() => this.secureTextEntry()}>
              {this.state.secureTextEntry ?
                <Feather
                  name="eye-off"
                  color="white"
                  size={20}
                />
                :
                <Feather
                  name="eye"
                  color="white"
                  size={20}
                />
              }
            </TouchableOpacity>
              </View>
            <Text style={[styles.text_footer,{marginTop:15}]}>Confirmar Senha</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              color='#f2f2f2'
              size={20}
            />
            {this.state.secureTextEntry_confirm ?
              <TextInput
                style={styles.imput}
                placeholder="Confirme sua senha..."
                placeholderTextColor="gray"
                secureTextEntry={true}
                onChangeText={TextInputConfirmSenha => this.setState({ TextInputConfirmSenha })}
              />
              :
              <TextInput
                style={styles.imput}
                placeholder="Confirme sua senha..."
                onChangeText={TextInputConfirmSenha => this.setState({ TextInputConfirmSenha })}
              />
            }
            <TouchableOpacity
              onPress={() => this.secureTextEntry_confirm()}>
              {this.state.secureTextEntry_confirm ?
                <Feather
                  name="eye-off"
                  color="white"
                  size={20}
                />
                :
                <Feather
                  name="eye"
                  color="white"
                  size={20}
                />
              }
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styles.button1}
            onPress={this.CheckTextInput}>
            <LinearGradient colors={['#ffd700', '#ffd700', '#ffd700']}
              style={styles.login}>
              <Text style={styles.textLogin}>Cadastrar </Text>
            </LinearGradient >
          </TouchableOpacity>
        </Animatable.View>
      </View>
      

    )
  }
}




