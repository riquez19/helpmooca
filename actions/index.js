import firebase from '../fb';

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

export function postChamados(categorieName, description, localAddress){
    return(dispatch) => {
        firebase.database().ref('/chamados').push({categorieName, description, localAddress})
    }
}
