import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View , Image,TouchableOpacity, SafeAreaView,ImageBackground,TextInput} from 'react-native';
import { useState } from "react";


export default function App() {
  return (
    <SafeAreaView style={styles.container}>
       <ImageBackground source={require('./assets/background.png')}  style={styles.backgroundImage} >
          <Text style ={styles.TxtHeader}>CODE</Text>
          <Text style ={styles.TxtHeader2}>VERIFICATION</Text>
          <Text style ={styles.TxtMiddle}>Enter ontime password sent on{'\n'}++849092605798</Text>
          <View style={styles.sectionStyle}>
            <Image
              source={require('./assets/Rectangle 2.png')}
              style={styles.imageStyle}
            />
            <Image
              source={require('./assets/Rectangle 2.png')}
              style={styles.imageStyle}
            />
            <Image
              source={require('./assets/Rectangle 2.png')}
              style={styles.imageStyle}
            />
            <Image
              source={require('./assets/Rectangle 2.png')}
              style={styles.imageStyle}
            />
            <Image
              source={require('./assets/Rectangle 2.png')}
              style={styles.imageStyle}
            />
            <Image
              source={require('./assets/Rectangle 2.png')}
              style={styles.imageStyle}
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
 
  TxtHeader:{
    textAlign: 'center',
    marginTop: 60,
    fontWeight: 'bold',
    fontSize: 80,
    
  },
  TxtHeader2:{
    textAlign: 'center',
    marginTop: 30,
    fontWeight: 'bold',
    fontSize: 25,
    
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
    marginTop:40,
    padding:2,
  },
  imageStyle: {
    width:60,
    height:60,
    marginRight:0.5,
    borderWidth: 0.5,
    resizeMode: 'stretch',
    alignItems: 'center',
  },
});
