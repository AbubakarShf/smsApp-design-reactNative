import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const Header=props=>{
    return(
        <View style={{backgroundColor:'#fef200', height:'24%', width:'100%', justifyContent:'center', alignItems:'center'}} >
            <Text style={styles.LetsTryTxt} >Let's Try Our</Text>
                <View style={styles.custHead}>
                <Text style={styles.text}>{props.title}</Text>
                </View>
           </View>
    );
};


const styles=StyleSheet.create({

    custHead:{
        backgroundColor:'#2138ab',
        width:'100%',
        height:'50%',
        alignItems:'center',
        justifyContent:'center',
        borderBottomRightRadius:50,
        borderBottomLeftRadius:50,
        borderRadius:290,
        marginTop:10
    },
    text:{
        color:'white',
        fontSize:30,
        fontWeight:'bold'
    },
    LetsTryTxt:{
        fontSize:30,
        paddingTop:60,
        fontWeight:'bold'
      }

});



export default Header;