import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { STICK_MARGIN, STICK_WIDTH } from '../constants/constants'

const Wave = (props) => {
  return (
    <View
      style={[
        styles.container,
        props.reversed && styles.containerReversed,
      ]}
    >
      {props.waveForms.map((value, index) => (
        <View
          key={index}
          style={[styles.stick, { height: `${value}%` }]}
        />
      ))}
    </View>
  )
}

export default Wave

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%',
      },
      containerReversed: {
        alignItems: 'flex-start',
        opacity: 0.3,
      },
      stick: {
        backgroundColor: 'white',
        width: STICK_WIDTH,
        marginRight: STICK_MARGIN,
      },
})