import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Gap = ({height, width}) => {
  return (
    <View style={{height : height, width : width}}>
      <Text>Gap</Text>
    </View>
  )
}

export default Gap

const styles = StyleSheet.create({})