import { View, Text, Platform, Image, TouchableOpacity, Dimensions } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
const android = Platform.OS === 'android';
import { heightPercentageToDP as hp } from 'react-native-responsive-screen';

import {user1} from '../../assets/images';
import { BellIcon } from 'react-native-heroicons/outline';
import Carousel from 'react-native-snap-carousel';
import { datesData } from '../constant';
const { width, height } = Dimensions.get('window');
import DatesCard from '../components/DatesCard';
export default function HomeScreen() {
  return (
    <SafeAreaView className='bg-white flex-1 justify-between'
    style={{
        paddingTop: android ? hp(2) : 0,
    }}>
      <View className='w-full flex-row justify-between items-center px-4 mb-8'>
        <View className='justify-center rounded-full items-center'>
            <Image  source={user1}
            style={{
                width:hp(4.5),
                height:hp(4.5),
                resizeMode:'cover',
            }}
            className='rounded-full'
            />
        </View>

        <View>
            <Text className='text-xl font-semibold text-center uppercase'>STACKS Dates</Text>
        </View>

        <View className='bg-black/10 p-2 rounded-full items-center justify-center'>
            <TouchableOpacity>
                <BellIcon size={25} color='black' strokeWidth={2}/>
            </TouchableOpacity>
        </View>
      </View>

      <View className='pb-4'>
        <View className='mx-4 mb-4'>
            <Text className='capitalize text-2xl font-semibold'>Find Your Love</Text>
        </View>

        <View>
            <Carousel 
                data={datesData}
                renderItem={({item})=> <DatesCard item={item}/>}
                firstItem={1}
                inactiveSlideOpacity={0.6}
                inactiveSlideScale={0.86}
                sliderWidth={width}
                itemWidth={width*0.8}
                slideStyle={{display:'flex', alignItems:'center'}}
            />
        </View>
      </View>
    </SafeAreaView>
  )
}