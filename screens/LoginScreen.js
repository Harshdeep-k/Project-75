import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import {KeyboardAvoidingView} from 'react-native';
import {TextInput} from 'react-native-gesture-handler';
import db from '../config';
import firebase from 'firebase';
import MyHeader from "../components/MyHeader"

export default class LoginScreen extends React.Component{
constructor(){
  super()

  this.state={emailId:'',
  pass:''}
}

login=(email,pass)=>
{
   
  if(email && pass)
  {
  try{
       firebase.auth().signInWithEmailAndPassword(email,pass).then(()=>{ console.log("done");
             console.log("Problem connecting");
              this.props.navigation.navigate('TabNavigator')})
      
           
   }
   catch(error)
   {
     switch(error.code)
     {
       case "auth/user-not-found":
       alert("User not found");
       break;
       case "auth/invalid-email":
       alert("incorrect email or pass");
       break;
     }
   }
  }
  else{
    alert("Enter emailId and password");
  }
}
render(){
  return(
    <View>
    <MyHeader/>
    <KeyboardAvoidingView style={styles.keyvi}>
    <TextInput style={styles.login} placeholder='abc@example.com' keyboardType='email-address'
onChangeText={(text)=>{
  this.setState({
    emailId:text
  })
}}
    />

    <TextInput style={styles.login} placeholder='Password' secureTextEntry={true}
onChangeText={(text)=>{
  this.setState({
    pass:text
  })
}}
    />
    <TouchableOpacity style={styles.button} onPress={()=>{this.login(this.state.emailId,this.state.pass)}}><Text style={[styles.text,{color:"white",textAlign:"center"}]}> Login </Text></TouchableOpacity>
    
    </KeyboardAvoidingView>
    </View>
  )
}

}

const styles=StyleSheet.create({

keyvi:{
alignItems: 'center',
marginTop:20,
},
button:
{
   backgroundColor:"#364f6b",
        color:"white",
        marginTop:20,
        borderRadius:8,
       padding:3,
       width:200,
},
login:
{
    width: 250,
    borderColor:"black",
    borderRadius:8,
    borderWidth:3,                   
    marginTop:20,
    justifyContent:"center",
    textAlign:"center",
    color: "black",
    fontFamily:"Josefin",
    fontSize:20,
    alignItems:"center",
},
 text:
      {
        marginTop:10,
        fontFamily:"Josefin",
        fontSize:20,
        color: "black",
        textShadowColor:"#3fc1c9",
        textShadowOffset: {width:0, height:0},
        textShadowRadius:5,
      },

})