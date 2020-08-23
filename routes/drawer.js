import {createDrawerNavigator } from 'react-navigation-drawer';
import {creatAppContainer, createAppContainer} from 'react-navigation';
import HomeStack from './homeStack';
import AboutStack from './aboutstack'

const RootDrawerNavigator = createDrawerNavigator({
    Home: {
        screen: HomeStack,
    },
    About: {
        screen: AboutStack,
    }
});

export default createAppContainer(RootDrawerNavigator);
