import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import coffee1 from "../images/coffee1.png";
import star from "../images/star.png";
import { Link } from "expo-router";

type Prop = {
  coffee: {
    id: number;
    type: string;
    plus: string;
    price: number;
    rate: number;
    image: string;
  };
  id: number;
  image: string;
  price: number;
  rate: number;
  plus: string;
  type: string;
};
const CoffeeCard = ({ image, price, plus, rate, type, id, coffee }: Prop) => {
  return (
    <View className="bg-white mr-5 pb-3 px-3 pt-1 mb-5 rounded-lg relative ">
      <View className="absolute top-2 left-5 z-50 flex flex-row items-center">
        <Image source={star} />
        <Text className="text-white font-medium">{rate}</Text>
      </View>
      <Link href={`/detail?id=${id}`} asChild>
        <TouchableOpacity className="image">
          <Image source={image} />
        </TouchableOpacity>
      </Link>
      <View className="px-1">
        <Link href={`/detail?id=${id}`}>
          <View className="text">
            <Text className="font-bold text-xl">{type}</Text>
            <Text className="text-base font-medium text-stone-500 mb-2">
              with {plus}
            </Text>
          </View>
        </Link>
        <View className="flex flex-row justify-between items-center">
          <Text className="font-bold text-2xl">${price}</Text>
          <TouchableOpacity>
            <View className="bg-[#c67c4e] p-3 w-fit rounded-xl">
              <AntDesign name="plus" size={20} color="white" />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CoffeeCard;
