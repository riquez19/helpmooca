import React, {Component} from 'react';
import {Plataform} from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

export default class search extends Component{
    state = {
        searchFocused: false,
    }

    render(){
        const { searchFocused } = this.state 
        const { onLocationSelected } = this.props               
        
        return <GooglePlacesAutocomplete
            enablePowerredByContainer = {false}            
            placeholder="Para Onde?"
            placeholderTextColor="#333"
            onPress={onLocationSelected}
            query={{
                key: 'AIzaSyCGYGnFBOxJXi3y40CE5LY5Fg4-mnCVX6s',
                langague: 'pt-BR'
                //types: '(address)',
                
            }}
            currentLocation={false} // Will add a 'Current location' button at the top of the predefined places list  
            nearbyPlacesAPI="GoogleReverseGeocoding"
            textInputProps={{
                onFocus: () => {this.setState({ searchFocused: true})},
                onBlur: () => {this.setState({ searchFocused: false})},
                autoCapitalize: "none",
                autoCorrect: false,
            }}
            listViewDisplayed={searchFocused}
            fetchDetails = {true}
            ref={c => this.googlePlacesAutocomplete = c}
            
            
            
            styles={{
                container:{
                    position: 'absolute',
                    top: 30,
                    width: '100%',
                },
                textInputContainer:{
                    flex: 1,
                    backgroundColor: 'transparent',
                    height: 54,
                    marginHorizontal: 20,
                    borderTopWidth: 0,
                    borderBottonWidth: 0,
                },
                textInput: {
                    height: 54,
                    margin: 0,
                    borderRadius: 0,
                    paddingTop: 0,
                    paddingBottom: 0,
                    paddingLeft: 20,
                    paddingRight: 20,
                    marginTop: 0,
                    marginRight: 0,
                    marginLeft: 0,
                    elevation: 5,
                    borderWidth: 1,
                    borderColor: '#DDD',
                    fontSize: 18,
                },
                listView: {
                    borderWidth: 1,
                    borderColor: '#DDD',
                    backgroundColor: '#FFF',
                    marginHorizontal: 20,
                    elevation: 5,
                    marginTop: 10,
                },
                description: {
                    fontSize: 16
                },

            }}  
            
            
        />
        

    }
    
}
