import React, {Component} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import MapView from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../search/';
import Directions from '../Directions/';
import styles from '../../styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Map extends Component {
    state = {
        region: undefined, 
        destination: null,
    };

    async componentDidMount(){
        Geolocation.getCurrentPosition(
            ({coords: {latitude, longitude}}) => {
                this.setState({region: {latitude, longitude, latitudeDelta: 0.0143, 
                    longitudeDelta: 0.0134}})
            }
        )
    }
    
    handleLocationSelected = (data, {geometry}) => {
        const {location: { lat: latitude, lng: longitude}} = geometry

        this.setState({
            destination: {
                latitude,
                longitude,
                title: data.structured_formatting.main_text,
            }
        })


    }

	render() {
        const {region, destination} = this.state 
        console.log(region, destination)
        console.disableYellowBox = true
		return (
			<View style={{flex:1}}>
                <MapView
                style={{flex:1}}                
                initialRegion={region}
                loadingEnabled = {true}
                showsUserLocation = {true}
                ref = {(el) => {this.mapView = el}}
                >
                    
                    {destination && (
                        <Directions
                            origin={region}
                            destination={destination}
                            onReady={result => {
                                this.mapView.fitToCoordinates(result.coordinates, {
                                    edgePadding: {
                                        right: 50,
                                        left: 50,
                                        top: 50,
                                        bottom: 50
                                    }
                                });

                            }}
                        />    

                    )}
                    
                </MapView>  

                <Icon.Button
                    name="add-circle"
                    color="red"
                    onPress={() => alert('Login with Facebook')}
                    backgroundColor={"transparent"}
                

                >
                    
                </Icon.Button> 

                <Search onLocationSelected = {this.handleLocationSelected}/>                     


			</View>
		);
	}
}



