import React from "react";
import { StyleSheet, Text, View, TextInput,TouchableOpacity,KeyboardAvoidingView, ToastAndroid } from "react-native";
import MyHeader from "../components/MyHeader";
import * as Font from "expo-font";
import db from '../config.js'

export default class WriteStoryScreen extends React.Component {
  constructor()
  {
    super();
    this.state={
      author:"",
      title:"",
      story:"",
    }
  }
 submitStory=async()=>
 {
   var index;
   await db.collection("stories").add({
     title: this.state.title,
     story: this.state.story,
     author: this.state.author,
   })  
 }
  componentDidMount=async()=>
  {
    await Font.loadAsync({
      Josefin : require("../assets/JosefinSans-Medium.ttf")
    })
  }
  render() {
  return (
    <View style={{backgroundColor:"#f5f5f5"}}>
    <MyHeader/>
      <View style={styles.container}>
      
      <Text style={styles.text}>  Write your story here</Text>
      <KeyboardAvoidingView>
       <TextInput
        style={styles.input}
        onChangeText={(text)=>
        {
          this.setState({author: text})
        }}
        value={this.state.author}
        placeholder="Author"
        placeholderTextColor="white"
        
      />
       <TextInput
         multiline
        style={styles.input}
        numberOfLines={2}
        onChangeText={(text)=>
        {
          this.setState({title: text})
        }}
        value={this.state.title}
        placeholder="title"
         placeholderTextColor="white"
      
      />
       <TextInput
        multiline
        style={styles.input}
        numberOfLines={10}
        onChangeText={(text)=>
        {
          this.setState({story: text})
        }}
        value={this.state.story}
        placeholder="Story"
         placeholderTextColor="white"
   
      />
       </KeyboardAvoidingView>
   
      <TouchableOpacity  style={styles.button} onPress={()=>
      {
        this.submitStory();
        this.props.navigation.navigate("WriteStoryScreen");
        ToastAndroid.show("Story has been submitted !", ToastAndroid.SHORT);

      }}>
        <Text style={[styles.text,{color:"white"}]}>Submit</Text></TouchableOpacity>
      </View>
      </View>
    )
  }
}

const styles=StyleSheet.create({
    input:
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
        backgroundColor:"#3fc1c9",
      },
      container:
      {
        justifyContent:"center",
        alignItems:"center",
        textAlign:"center",
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
      button:
      {
        backgroundColor:"#364f6b",
        color:"white",
        marginTop:20,
        borderRadius:8,
       padding:3,
       width:200,

      }

  }
)