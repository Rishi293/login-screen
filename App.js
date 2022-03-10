import React, {useLayoutEffect, useState } from 'react';
import {Pressable, TextInput, Text, View, StyleSheet, SafeAreaView, KeyboardAvoidingView, Platform, ScrollView, } from 'react-native';
import { AntDesign, FontAwesome, MaterialIcons, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons'
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  let [isThere, setIsThere] = useState(true)

  const disappear = () => {
    setIsThere(false)
  }

  
  return (
    <View style={styles.container}>
      { isThere ?
      <View>
         <Text>    
          username: 
        </Text>   
           <TextInput 
style={{height: 45,width: "95%",borderColor: "black",borderWidth: 2,backgroundColor: "lightblue", borderRadius: 10}}
// Adding hint in TextInput using Placeholder option.
placeholder="user name"          
placeholderTextColor="white"
// Making the Under line Transparent.
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>   
  <Text>     
     email or phone number:  
   </Text>    
       <TextInput
style={{height: 45,width: "95%",borderColor: "black",borderWidth: 2,backgroundColor: "lightblue", borderRadius: 10}}
// Adding hint in TextInput using Placeholder option.
placeholder="email or phone number"          
placeholderTextColor="white"
// Making the Under line Transparent.
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={false}
/>
  <Text>  
    password:
    </Text>
    <TextInput
style={{height: 45,width: "95%",borderColor: "black",borderWidth: 2,backgroundColor: "lightblue", borderRadius: 10}}
// Adding hint in TextInput using Placeholder option.
placeholder="Password"          
placeholderTextColor="white"
// Making the Under line Transparent.
underlineColorAndroid="transparent"
// Making the Text Input Text Hidden.
secureTextEntry={true}
/>
<Pressable style={styles.signUpButton} onPressIn={disappear}>
   <Text>
   Sign Up 
   </Text>
   </Pressable>
   </View>
      : <Text style={styles.thanksText}>thanks for registering!</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "thistle",
    padding: 8,
  },
signUpButton: {
  backgroundColor: "blue",
  color: "white",
  transform: "translate(100px, 50px)",
  padding: "5%",
  width: 100,
  borderRadius: 10,
},
thanksText: {
  transform: "translate(100px, 10px)", 
  fontWeight: "Bold",
  fontSize: "200%",
}
});
