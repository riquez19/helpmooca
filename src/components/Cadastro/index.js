import React, {Component, ReactPropTypes} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import {postChamados} from '../../../actions/index';
import {connect} from 'react-redux';

import style from '../../styles/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon2 from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');

class Cadastro extends Component{

  state={
    categories: [
      {
        id: 1,
        title: 'Farol'

      },
      {
        id: 2,
        title: 'Vazamento'

      },
      {
        id: 3,
        title: 'Arvore'

      },
    ],
    categorieName:"Farol",
    description: "",
    localAddress: this.props.navigation.getParam('local')
  }

  

  submit = () => {
    this.props.postChamados(this.state.categorieName, this.state.description, this.state.localAddress )
    this.setState({
      categorieName:'',
      description:'',
      localAddress:''      
    })
  }

  render() {
    const {id, title} = this.state.categories[0]
    return (
      <View style = {styles.container}>
        <ScrollView
        styles={styles.categoryContainer}
        horizontal        
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        onMomentumScrollEnd={e => {
          const scrolled = e.nativeEvent.contentOffset.x;

          const place = (scrolled > 0) 
          ? scrolled / Dimensions.get('window').width
          : 0;

          const {id, title} = this.state.categories[place] 
          
          this.setState({categorieName:title})

          console.log(id, title)

        }}
        >          
          <View style = {styles.category}>
          <Icon name="traffic" size={150} color="black"/>
          <Text style = {styles.textCategory}>
          {'CATEGORIA 1\n\nSEMÁFOROS'}</Text>
          </View>
          <View style = {styles.category}>
          <Icon1 name="pipe-leak" size={150} color="#00BFFF"/>
          </View>
          <View style = {styles.category}>
          <Icon1 name="tree" size={150} color="green"/>
          </View>
        </ScrollView>
        
        <View style = {styles.container2}>
        <TextInput
        style={styles.imputDesc}
        placeholder='Insira aqui a descrição da ocorrência'
        placeholderTextColor = '#FFF'
        multiline={true}
        onChangeText={description => this.setState({description})}
        value={this.state.description}
        />

        <TouchableOpacity 
        style={styles.button1}
        >  
        <Icon name="camera-alt" size={30} color="black"/> 
        <Text style={styles.buttonText}>    Inserir Foto/Vídeo </Text>                   
        </TouchableOpacity>

        <TouchableOpacity 
        style={styles.button}
        onPress={this.submit}
        >  
        <Text style={styles.buttonText}>Cadastrar </Text>            
        </TouchableOpacity>

        </View>    
        
      </View>
      
    )
  }

}



const styles = StyleSheet.create({
  categoryContainer:{
    width: '100%',
    maxHeight: 150,
  },
  textCategory: {
    paddingTop: 20,
    fontSize: 28,
    fontWeight: 'bold',
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    textAlign: 'center',

  },
  category: {
    width: width - 40,
    maxHeight: 150,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 30,
    flexDirection: 'row',

  },
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    //justifyContent: 'center',
    //alignItems: 'center',

  },
  container2: {
    //flex: 1,
    backgroundColor: '#2c3e50',
    //justifyContent: 'center',
    alignItems: 'center',

  },
  imputDesc: {
    height: 150,
    padding: 10,
    width: width - 40,
    backgroundColor: '#2c3e50',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius:3,
    borderColor: '#FFF', 
    borderWidth: 1,  
    textAlign: 'center',    
    color: '#FFF'
  },
  button: {
    marginTop: 50,
    marginBottom: 20,
    height: 45,
    width: 150,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button1: {
    marginTop: 50,
    marginBottom: 20,
    height: 45,
    width: 200,
    padding: 10,
    backgroundColor: '#FFF',
    borderRadius: 3,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',    
  },
})


export default connect(null, {postChamados})(Cadastro);

