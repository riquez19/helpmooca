import React, { Component } from 'react';
import { View, Text, Button, StyleSheet, FlatList } from 'react-native';
import {getChamados} from '../../../actions/index';
import {connect} from 'react-redux';
import _ from 'lodash';


class Feed extends Component {

  componentDidMount(){
    this.props.getChamados()
  }

    render() {
      //console.log('///////////////////////////////////////////',this.props.listOfChamados)
      // const {image: {base64: imagemc}} = this.props.listOfChamados
      // console.log(image)
      return (
        <View style={styles.container}>
          <Text> Post </Text>
          <FlatList 
          style={{width: '100%'}}
          data={this.props.listOfChamados}
          keyExtractor={(item) => item.key}
          renderItem={({item}) => {
            return (
              <View>
                <Text>{item.description}</Text>
                {/* <Image source={{uri: `data:image/gif;base64,${item.image}`}} /> */}
              </View>
            )
          }}
          />
        </View>
      );
  }
}

function mapStateToProps(state){
  const listOfChamados = _.map(state.ChamadoList.ChamadoList, (val, key) => {
    return{
      ...val,
      key:key
    }
  })
  return{
    listOfChamados
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
  }
})

export default connect(mapStateToProps, {getChamados})(Feed);
