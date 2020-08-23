import { createStackNavigator } from "react-navigation-stack";
import Home from '../screens/home'
import ReviewDetails from '../screens/reviewdetails'
import Header from '../shared/header'
import React from 'react';

const screens = {
    Home:{
        screen : Home,
        navigationOptions: ({navigation}) => {
            return {
                headerTitle: () => <Header navigation= {navigation} title='GameZone'/>,
            }
        }
 
    },
    ReviewDetails: {
        screen : ReviewDetails,
        navigationOptions: {
            title: 'Review Details',
        } 
    },
    
}

const HomeStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerTintColor: '#000',
        headerStyle: { height: 60}
    }
});
export default HomeStack;