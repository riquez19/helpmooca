import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
} from 'react-native';

import style from '../../styles/index';

import Icon from 'react-native-vector-icons/MaterialIcons';

import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';

import Icon2 from 'react-native-vector-icons/Entypo';

const {height, width} = Dimensions.get('window');

export default class Cadastro extends Component{

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
    ]
  }

  render() {
    const {id, title} = this.state.categories[0]
    console.log(id, title)
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

          console.log(id, title)

        }}
        >          
          <View style = {styles.category}>
          <Icon name="traffic" size={150} color="black"/>
          </View>
          <View style = {styles.category}>
          <Icon1 name="pipe-leak" size={150} color="#00BFFF"/>
          </View>
          <View style = {styles.category}>
          <Icon1 name="tree" size={150} color="green"/>
          </View>
        </ScrollView>
        
        
        <TextInput
        style={styles.imputDesc}
        placeholder='Descrição da ocorrência:'
        placeholderTextColor = '#FFF'
        />

        <TouchableOpacity 
        style={styles.button}
        >
  
        <Text style={styles.buttonText}>Cadastrar </Text>  
          
        </TouchableOpacity>
        
      </View>
      
    )
  }

}

const styles = StyleSheet.create({
  categoryContainer:{
    width: '100%',
    maxHeight: 150,
  },
  category: {
    width: width - 40,
    maxHeight: 150,
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: 30,

  },
  container: {
    flex: 1,
    backgroundColor: '#2c3e50',
    justifyContent: 'center',
    alignItems: 'center',

  },
  container2: {
    //flex: 'flex-start',
    backgroundColor: '#FFF',
    justifyContent: 'center',
    alignItems: 'center',

  },
  imputDesc: {
    //marginVertical: 20,
    padding: 10,
    width: width - 40,
    backgroundColor: '#2c3e50',
    fontSize: 16,
    fontWeight: 'bold',
    borderRadius:3,
    borderColor: '#FFF', 
    borderWidth: 1,  
  },
  button: {
    //marginTop: 150,
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
})




