import React from 'react';
import { StyleSheet,KeyboardAvoidingView, Text, View, TextInput, Button,TouchableWithoutFeedback,Keyboard } from 'react-native';
import Header from './Components/Header'
import styled from 'styled-components';
export default function App() {

  // curl 'https://api.twilio.com/2010-04-01/Accounts/AC8a753ed6407f66bcaf83bbc1278e3160/Messages.json' -X POST \
  // --data-urlencode 'To=+923076770449' \
  // --data-urlencode 'From=+12184232960' \
  // --data-urlencode 'Body=hello' \
  // -u AC8a753ed6407f66bcaf83bbc1278e3160:66e04fbf877e499a847dafd3bafaa43d

  return (
    <KeyboardAvoidingView
    behavior={Platform.OS == "ios" ? "padding" : "height"}
    style={styles.container}
  >
    <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}} >
    <View style={styles.below}>
      
      <Header title="SMS APP" />
      <View >
        <Text style={styles.txtField} >Enter Your Number</Text>
        <TextInput 
        style={styles.InputField}
        keyboardType="numeric" 
        maxLength={11}
        placeholder='03xxxxxxxxx' 
        blurOnSubmit 

        />
      </View>

      <View>
        <Text style={styles.txtField} >Enter Your Message</Text>
        <TextInput 
          style={styles.InputField}
          placeholder='Hy, Jigar' 
          blurOnSubmit />
      </View>
      <View style={{ flexDirection:'row', justifyContent:'space-around',padding:30,  }} >
      <Button title="SEND" />
      <Button title="Reset" />
      </View>
      
    </View>
    
    </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
    
  );
}

const styles = StyleSheet.create({
  below:{
    backgroundColor:'#dee3e1',
    width:'100%',
    height:'100%',
    
  },
  InputField:{
    borderColor:'#dee3e3',
    borderBottomColor:'#632de9',
    borderWidth:3,
    width:'50%',
    fontSize:20,
    fontWeight:'700',
    height:40,
    marginHorizontal:90,
    marginVertical:30,
  },
  txtField:{
    paddingBottom:10,
    paddingVertical:20,
    fontSize:20,
    fontWeight:'bold',
    paddingHorizontal:20,
    paddingVertical:30
  },
  container: {
    flex: 1,
  },

});
