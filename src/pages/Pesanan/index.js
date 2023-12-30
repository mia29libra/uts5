import React from 'react'
import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import { Imagenasigoreng } from '../../assets'

const Pesanan= () => {
  return (
    <View style={styles.page}>
      <ImageBackground 
      source={Imagenasigoreng} style={styles.nasigoreng}>
      </ImageBackground>
    </View>
  )
}

export default Pesanan

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    
});