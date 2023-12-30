import React from 'react'
import { StyleSheet, Text, Image, View, ImageBackground, Dimensions } from 'react-native'
import { ImageHeader, logo } from '../../assets'
import { Saldo} from '../../components'

const Home = () => {
  return (
    <View style={styles.page}>
      <ImageBackground source={ImageHeader} style={styles.Header}>
            <Image source={logo} style={styles.logo}/>
            <View style={styles.hello}>
            <Text style={styles.selamat}>Selamat Datang, </Text>
            <Text style={styles.username}>Di Drive Food</Text>
            </View>
      </ImageBackground>
      <Saldo />
    </View>
  )
}

export default Home

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    page: {
      flex: 1
    },
    Header: {
      width: windowWidth,
      height: windowHeight *0.3,
      paddingHorizontal: 30,
      paddingTop: 2
    },
    logo: {
      width: windowWidth *0.2,
      height: windowHeight *0.1,
    },
    hello: {
      marginTop: windowHeight *0.025
    },
    selamat: {
      fontSize: 24,
      fontFamily: 'TitilliumWeb-Regular'
    },
    username: {
      fontSize: 22,
      fontFamily: 'TitilliumWeb-Bold'
    }
});