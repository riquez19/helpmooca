import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import Login from './components/login/index';
import Map from './components/map/index';
import Cadastro from './components/Cadastro/index';
import CriarLogin from './components/CriarLogin/index'
import Feed from './components/Cadastro/Feed';

const Routes = createAppContainer(
    createStackNavigator({
        Login,
        Feed,
        CriarLogin,
        Map,
        Cadastro,
        
        
    },  
    {
        headerMode: 'nome',
    }
    )

)
   

export default Routes;
