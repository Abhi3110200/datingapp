import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { CheckBadgeIcon } from "react-native-heroicons/solid";
var { width, height } = Dimensions.get("window");
export default function DatesCard({ item }) {
  return (
    <View className="relative">
      <TouchableOpacity>
        <Image
          source={item.imgUrl}
          style={{
            width: width * 0.8,
            height: height * 0.75,
          }}
          resizeMode="cover"
          className="rounded-3xl"
        />
      </TouchableOpacity>

      <LinearGradient colors={["transparent", "rgba(0,0,0,0.9)"]} 
      style={{
        position:'absolute',
        bottom:0,
        width:'100%',
        height:'100%',
        borderBottomLeftRadius:24,
        borderBottomRightRadius:24,
      }}
      start={{x:0.5, y:0.5}}
      end={{x:0.5, y:1}}/>

      <View className='absolute bottom-10 justify-start w-full items-start pl-4'>
        <View className='flex-row items-center justify-center'>
            <Text className='text-white text-2xl font-bold'>{item.name} {item.lastName} {', '}</Text>
            <Text className='text-white text-2xl font-bold mr-2'>{item.age}</Text>
            <CheckBadgeIcon size={25} color={'#3B82F6'}/>
        </View>

        <View className='flex-row justify-center items-center'>
            <Text className='text-white text-lg font-regular'>{item.city} {', '}</Text>
            <Text className='text-white text-lg font-regular mr-2'>{item.country}</Text>
        </View>
      </View>
    </View>
  );
}
