import React from 'react';
import MapViewDirections from 'react-native-maps-directions';

const Directions = ({destionation, origin, onReady}) => (
    <MapViewDirections
        destionation={destionation}
        origin={origin}
        onReady={onReady}
        apikey="AIzaSyBQ82uOA2zQ7ZZwotsHzrPqZ5Qk_6IiNHY"
        strokeWidth={3}
        strokeColor="#222"



    />
)

export default Directions;