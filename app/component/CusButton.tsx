import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Link } from "expo-router";

interface Prop {
  title: string;
}
const CusButton = ({ title }: Prop) => {
  return (
    <TouchableOpacity className="bg-orange-400 px-20 py-4 mt-5 rounded-xl">
      <Link href="/(tabs)/explore">
        <View className="w-full h-full">
          <Text className="text-white font-medium text-lg">{title}</Text>
        </View>
      </Link>
    </TouchableOpacity>
  );
};

export default CusButton;
