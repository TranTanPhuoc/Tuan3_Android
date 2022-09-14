import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TouchableOpacity, SafeAreaView,ImageBackground} from 'react-native';
import { useState } from "react";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={require('./assets/background.png')}  style={styles.backgroundImage} >
        <View style={styles.containerImg}>
          <Image source={require('./assets/circle.png')} style={styles.imageCircle} />
        </View>
        <Text style ={styles.TxtHeader}>GROW {'\n'} YOUR BUSINESS</Text>
        <Text style ={styles.TxtMiddle}>We will help you to grow your business{'\n'} using online server</Text>
        <View style= {styles.containerButton}>
          <TouchableOpacity color="#" style={styles.button}>
            <Text style={styles.txtbutton}> LOGIN</Text>
          </TouchableOpacity>
          <TouchableOpacity color="#" style={styles.button}>
            <Text style={styles.txtbutton}> SING UP</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.containerbotom}> 
          <Text style= {styles.textContainerBotton}>
            HOW WE WORK?
          </Text>
        </View>
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
    fontSize: 20,
    
  },
  TxtMiddle:{
    fontWeight:'bold',
    marginTop: 60,
    textAlign: 'center'
  },
  containerButton:{
    display: 'flex',
    flexDirection: 'row',
    marginTop: 50,
  },  

  button:{
    marginRight:40,
    marginLeft:40,
   marginTop:10,
    paddingTop:10,
    paddingBottom:10,
    backgroundColor:'#1E6738',
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#fff'
  },
  txtbutton:{
      color:'#fff',
      textAlign:'center',
      paddingLeft : 10,
      paddingRight : 10
  },
  containerbotom:{
    marginTop:20,
  },
  textContainerBotton:{
    fontWeight:'bold',
    textAlign:'center'
  }
});
