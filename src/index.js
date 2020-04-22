import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Login from './components/login/index';
import Map from './components/map/index'

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Map,
    },  
    {
        headerMode: 'nome',
    }
    )

)
   

export default Routes;
