import {combineReducers} from 'redux';

import ChamadoReducer from './ChamadoReducer';

const rootReducer = combineReducers({
    ChamadoList:ChamadoReducer

})

export default rootReducer;