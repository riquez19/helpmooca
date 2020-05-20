import React, {Component} from 'react';
import {
  View,
  ScrollView,
  StyleSheet,
  Dimensions,
  TextInput,
  TouchableOpacity,
  Text,
  Plataform,
  Image,
  Alert,
  ImageComponent
} from 'react-native';
import {postChamados} from '../../../actions/index';
import {connect} from 'react-redux';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import ImagePicker from 'react-native-image-picker';
import firebase from 'firebase';
import RNFetchBlob from  'react-native-fetch-blob';

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
      {
        id: 4,
        title: 'Outros'

      },
    ],
    categorieName:"Farol",
    description: "",
    localAddress: this.props.navigation.getParam('local'),
    image: undefined,
  }

  pickImage = () => {
    ImagePicker.showImagePicker({
      title: 'Escolha uma imagem',
      maxHeight: 600,
      maxWidth: 800,
    }, res => {
      if (!res.didCancel) {
        this.setState({image: {uri:res.uri, base64: res.data }})
      }
    })
  }

  save = async () => {
    Alert.alert('Imagem adicionada!')
  }

  submit = () => {
    this.props.postChamados(this.state.categorieName, this.state.description, this.state.localAddress, this.state.image )
    this.setState({
      categorieName:'',
      description:'',      
    })
  }


  render() {
    const {id, title} = this.state.categories[0]
    return (
      <View style = {styles.container}>
        <Animatable.View
          animation="fadeInUpBig">
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
          {'SEMÁFOROS'}</Text>
          </View>
          <View style = {styles.category}>
          <Icon1 name="pipe-leak" size={150} color="#00BFFF"/>
          <Text style = {styles.textCategory2}>
          {'VAZAMENTOS'}</Text>
          </View>
          <View style = {styles.category}>
          <Icon1 name="tree" size={150} color="green"/>
          <Text style = {styles.textCategory}>
          {'ÁRVORES'}</Text>
          </View>
          <View style = {styles.category}>
          <Icon1  name="help-circle-outline" size={150} color="black"/>
          <Text style = {styles.textCategory}>
          {'OUTROS'}</Text>
          </View>
        </ScrollView>
        
        <Text style={styles.text_footer2}>Descrição</Text>
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
        onPress={this.pickImage}
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
        </Animatable.View>
      </View>
      
    )
  }

}



const styles = StyleSheet.create({
  categoryContainer:{
    width: '100%',
    maxHeight: 150,
  },
  text_footer2:{
    color:'#FFF',
    fontSize:18,
    marginLeft: 40,
    marginTop: 25,
  },
  textCategory: {
    paddingTop: 20,
    fontSize: 28,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    textAlign: 'center',
    textAlignVertical: 'center'
  },
  textCategory2: {
    paddingTop: 20,
    fontSize: 25,
    marginRight: 30,
    alignItems: 'center',
    justifyContent: 'center',
    width: 160,
    textAlign: 'center',
    textAlignVertical: 'center'
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

