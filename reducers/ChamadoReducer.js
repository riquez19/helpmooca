export default function (state={}, action){
    switch(action.type){
        case "CHAMADOS_FETCH":
            return{
                ...state,
                ChamadoList:action.payload

            }
        default:
            return state    
    }
}