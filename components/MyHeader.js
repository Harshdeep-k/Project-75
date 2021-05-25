import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import {Header} from 'react-native-elements';
import {SafeAreaProvider } from 'react-native-safe-area-context'

export default class App extends React.Component {
  render()
  {
    return (
      <SafeAreaProvider>
       <Header centerComponent={{text: "Story Hub" , style:{margin: 5,color:"white", fontSize: 24,textAlign: 'center',fontFamily:'Josefin',   textShadowColor:"#3fc1c9",
        textShadowOffset: {width:0, height:0},
        textShadowRadius:7,}}}
        backgroundColor="#fc5185"/>
      </SafeAreaProvider>
    );
  }
}
