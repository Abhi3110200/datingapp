import { View, Text, Platform } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import {
    heightPercentageToDP as hp,
  } from "react-native-responsive-screen";
import Matches from '../components/Matches';
const android = Platform.OS === "android";
export default function ChatScreen() {
  return (
    <SafeAreaView
    style={{
        paddingTop: android ? hp(3) : 0,
    }}>
      <View className='px-4'>
        <Text className='uppercase font-semibold text-neutral-500 tracking-wider'>Matches</Text>
      </View>

      <Matches/>
    </SafeAreaView>
  )
}