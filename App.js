import React from "react";
import { StyleSheet, Text, View,Image } from "react-native";
import { createAppContainer,createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import LoginScreen from "./screens/LoginScreen"

import Read from "./screens/ReadStoryScreen.js";
import Write from "./screens/WriteStoryScreen.js";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}


const TabNavigator = createBottomTabNavigator({
   Write: { screen: Write },
  Read: { screen: Read },
  },

  {
    defaultNavigationOptions:({navigation})=>({
      tabBarIcon:()=>{
    const routeName=navigation.state.routeName;
    if(routeName==="Read"){
      return(
        <Image source={require("./assets/read.jpg")} style={{width:30, height:30}}></Image>
      )
    }
    else if(routeName==="Write"){
      return(
        <Image source={require("./assets/write.jpg")} style={{width:30, height:30}}></Image>
      )
    }
  }
  })

});
const switchNavigator=createSwitchNavigator({
  LoginScreen: LoginScreen,
  TabNavigator:TabNavigator
})

const AppContainer = createAppContainer(switchNavigator);