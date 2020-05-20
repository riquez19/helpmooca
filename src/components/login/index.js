import React, { Component } from 'react';
import {
  Alert,
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import firebase from 'react-native-firebase';
import styles from '../../styles/index'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import LinearGradient from 'react-native-linear-gradient';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      antenticou: false,
      erro: true,
      TextInputSenha: '',
      TextInputEmail: '',
      secureTextEntry: true
    }
  }

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


  login = async () => {
    const { TextInputEmail, TextInputSenha } = this.state;

    try {
      const user = await firebase.auth().signInWithEmailAndPassword(TextInputEmail, TextInputSenha)

      this.setState({ antenticou: true })

      console.log(user)

    } catch (err) {
      Alert.alert(
        'Atenção',
        'Usuário ou Senha Inválidos'
      )
      console.log(err)
    }
  }

  secureTextEntry() {
    this.setState({
      secureTextEntry: !this.state.secureTextEntry
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.header}>
          <Animatable.Image
            animation="bounceIn"
            source={require('../../assets/aviso.png')}
            style={styles.logo}
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
              color="white"
              size={25}
            />
            <TextInput
              style={styles.imput}
              placeholder="Seu email..."
              placeholderTextColor="gray"
              value={this.state.TextInputEmail}
              onChangeText={TextInputEmail => this.setState({ TextInputEmail })}
            />
          </View>

          <Text style={[styles.text_footer, { marginTop: 25 }]}>Senha</Text>
          <View style={styles.action}>
            <Feather
              name="lock"
              color="#f2f2f2"
              size={25}
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

          <TouchableOpacity
            style={styles.button1}
            onPress={this.CheckTextInput}>
            <LinearGradient colors={['#ffd700', '#ffd700', '#ffd700']}
              style={styles.login}>
              <Text style={styles.textLogin}>Login</Text>
            </LinearGradient >
          </TouchableOpacity>

          <View style={[styles.button1, { marginTop: 10 }]}>
            <TouchableOpacity onPress={() => (this.props.navigation.navigate('Feed'))}
              style={styles.criarConta}>

              <Text style={[styles.textLogin, {
                color: '#ffd700',
                fontWeight: 'bold',
                fontSize: 16
              }]}>Criar Conta</Text>

            </TouchableOpacity>
          </View>
        </Animatable.View>
        {this.state.antenticou ? this.props.navigation.navigate('Map') : null}
      </View>
    )
  }
}




