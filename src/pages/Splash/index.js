import React, { useEffect} from 'react'
import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import { SplashBackground, logo } from '../../assets'

const Splash = ({ navigation}) => {
  
  useEffect(() => {
    setTimeout( () => {
      navigation.replace('MainApp');
    }, 3000)
  }, [navigation]);

  return (
    <ImageBackground source={SplashBackground} style={styles.background}>
     <ImageBackground source={logo} style={styles.logo} />
    </ImageBackground>
  )
}

export default Splash

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  logo:{
    width: 200,
    height: 200
  }
  
  
})