import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './components/login/index';
import Map from './components/map/index';
import Cadastro from './components/Cadastro/index';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Map,
        Cadastro,
        
    },  
    {
        headerMode: 'nome',
    }
    )

)
   

export default Routes;
