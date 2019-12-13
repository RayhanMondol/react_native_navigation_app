import React from 'react';
import { createAppContainer, createSwithNavigator, createSwitchNavigator } from 'react-navigation'
import  { createStackNavigator } from 'react-navigation-stack';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import { createDrawerNavigator } from 'react-navigation-drawer'

import Example from './src/screens/Example';
import MyHomeScreen from './src/screens/MyHomeScreen';

const AuthStack = createStackNavigator({
   Landing:{
     screen: Example,
     navigationOptions:{
       headerTitle: 'Landing',
     },
   },
   SignIn: {
     screen: Example,
     navigationOptions:{
       headerTitle:'SignUp',
     },
   },
   ForgotPassword:{
     screen: Example,
     navigationOptions: {
       headerTitle: 'ForgotPassword',
     },
   },
   ResetPassword:{
     screen: Example,
     navigationOptions: {
       headerTitle: 'ResetPassword',
     },
   },
})


const FeedStack = createStackNavigator({
  Feed: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Feed'
    }
  },
  FeedDetails:{
    screen: Example,
    navigationOptions: {
      headerTitle:'FeedDetails'
    }
  }
})


const SearchStack = createStackNavigator({
  Search: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Search'
    }
  },
  SearchDetails:{
    screen: Example,
    navigationOptions: {
      headerTitle:'SearchDetails'
    }
  }
})

const SettingsStack = createStackNavigator({
  Settings: {
    screen: Example,
    navigationOptions: {
      headerTitle: 'Settings'
    }
  }
})

const MainTabs = createBottomTabNavigator({
  Feed:{
    screen: FeedStack,
    navigationOptions:{
      tabBarLabel: 'Feed'
    }
  },
  Search: {
    screen: SearchStack,
    navigationOptions: {
      tabBarLabel: 'Search'
    }
  },
  Settings:{
    screen: SettingsStack,
    navigationOptions:{
      tabBarLabel: 'Settings',
    },
  },
})
const MainDrawer = createDrawerNavigator({
  MainTabs: MainTabs,
  Settings: SettingsStack,
  HomeScreen: MyHomeScreen
})

const AppModalStack = createStackNavigator(
  {
   App: MainDrawer,
   Promotion:{
     screen: Example,
   },
  },
  {
    mode: 'modal',
    headerMode:'none',
  }
)
const App = createSwitchNavigator({
  Landing:{
    screen: Example
  },
  Auth:{
    screen: AuthStack
  },
  App:{
    screen: MainDrawer
  }
})

export default createAppContainer(App);