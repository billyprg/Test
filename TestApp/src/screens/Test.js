import { StyleSheet, Text, View,SafeAreaView , ScrollView} from 'react-native'
import React from 'react'
import WaveForm from '../../components/WaveForm'
import { getWaveForms } from '../../constants/waveconstant'
import Wave from '../../components/Wave';


const WAVEFORMS = getWaveForms();
const Test = () => {


  return (
    <SafeAreaView style={{backgroundColor:'black',flex:1}}>
    <ScrollView horizontal>
      <View style={{flex:1,justifyContent:'center',marginLeft:'50%'}}>
        <Wave waveForms={WAVEFORMS}/>
        <Wave waveForms={WAVEFORMS} reversed/>
      </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Test

const styles = StyleSheet.create({})