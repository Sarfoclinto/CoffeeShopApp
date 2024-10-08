import { View, Text, ImageBackground, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Image } from "react-native";
import CusButton from "./component/CusButton";
import imageSource from "../assets/images/hero.png";
const Index = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black">
      <View>
        <Image source={imageSource} />
      </View>
      <Text className="text-5xl font-semibold text-white text-center">
        Coffee so good,
      </Text>
      <Text className="text-5xl font-semibold text-white text-center">
        your taste buds
      </Text>
      <Text className="text-5xl font-semibold text-white text-center">
        will love it
      </Text>
      <Text className="text-gray-400 text-lg font-medium text-center">
        The best grain, the finest roast,
      </Text>
      <Text className="text-gray-400 text-lg font-medium text-center">
        the powerful flavour
      </Text>
      <View><CusButton title="Get started" /></View>
    </View>
  );
};

export default Index;
