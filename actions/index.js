import firebase from '../fb';
import {
    Alert,
  } from 'react-native';

export function getChamados(){
    return(dispatch) => {
        firebase.database().ref('/chamados').on('value', snapshot => {
            dispatch({
                type: "CHAMADOS_FETCH",
                payload: snapshot.val()
            })
        })
    }
}

export function postChamados(categorieName, description, localAddress, image){
    return(dispatch) => {
        firebase.database().ref('/chamados').push({categorieName, description, localAddress, image})
        Alert.alert(
            'Parabéns',
            'Ocorrência cadastrada com sucesso'
        )
    }
}
