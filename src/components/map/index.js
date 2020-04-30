import React, {Component} from 'react';
import {View, TouchableOpacity, Text, Button} from 'react-native';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
import Search from '../search/';
import Directions from '../Directions/';
import styles from '../../styles/index';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Map extends Component {
    state = {
        region: undefined, 
        destination: undefined,
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
            region: {
                latitude,
                longitude,
            }
        })

        this.mapView.animateToCoordinate({
            latitude,
            longitude
        }, 1000)



    }

	render() {
        const {region, destination} = this.state 
        console.log(region, destination)
        console.disableYellowBox = true
		return (
			<View style={{flex:1}}>
                <MapView
                style={{flex:1}}  
                provider={PROVIDER_GOOGLE}              
                initialRegion={region}
                loadingEnabled = {true}
                showsUserLocation = {true}
                ref = {(el) => {this.mapView = el}}
                >     
                <Marker
                coordinate={
                    region
                }
                />
                </MapView>  

                <Search onLocationSelected = {this.handleLocationSelected}/>        

                <View style={styles.containerButton}>
                <TouchableOpacity 
                style={styles.buttonAdd}
                onPress={ () => {this.props.navigation.navigate('Cadastro')}
                }
                >
                <Icon name="add-circle" size={80} color={'#2c3e50'} style={styles.icon} />                        
                </TouchableOpacity>       
                </View>    


			</View>
		);
	}
}



