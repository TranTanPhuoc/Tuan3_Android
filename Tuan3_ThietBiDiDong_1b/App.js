import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TouchableOpacity, SafeAreaView,ImageBackground,TextInput} from 'react-native';
import { useState } from "react";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={require('./assets/background.png')}  style={styles.backgroundImage} >
        <View style={styles.containerImg}>
          <Image source={require('./assets/lock.png')} style={styles.imageCircle} />
        </View>
        <Text style ={styles.TxtHeader}>FORGET{'\n'} PASSWORD</Text>
        <Text style ={styles.TxtMiddle}>Provide your account’s email for which you{'\n'} want to reset your password</Text>
        <View style={styles.sectionStyle}>
          <Image
            source={require('./assets/mail.png')}
            style={styles.imageStyle}
          />
          <TextInput
            style={{flex: 1}}
            placeholder="Email"
          />
        </View>
        <TouchableOpacity color="#" style={styles.button}>
            <Text style={styles.txtbutton}> NEXT</Text>
          </TouchableOpacity>
        </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  backgroundImage: {
    flex:1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
    alignItems: 'center'
  },
  containerImg:{
    
  },
  imageCircle:{
    
  },
  TxtHeader:{
    textAlign: 'center',
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 40,
    
  },
  TxtMiddle:{
    fontWeight:'bold',
    marginTop: 60,
    textAlign: 'center'
  },
   

  button:{
    marginTop:30,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff',
    width: "95%",
    height: 50,
    
  },
  txtbutton:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  
  textContainerBotton:{
    fontWeight:'bold',
    textAlign:'center'
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    borderWidth: 0.5,
    borderColor: '#000',
    borderRadius: 5,
    marginLeft:10,
    marginRight:10,
    marginTop:40,
    padding:2,
  },
  imageStyle: {
    marginRight:20,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
