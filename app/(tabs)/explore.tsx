import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import profile from "../images/Image.png";
import CoffeeTypeBtn from "../component/CoffeeTypeBtn";

interface CoffeeProp {
  id: number;
  type: string;
  with: string;
  price: number;
  rate: number;
}
const Explore = () => {
  const [coffeeTypes, setCoffeeType] = useState([
    {
      type: "Cuppuccino",
      active: true,
    },
    {
      type: "Machiato",
      active: false,
    },
    {
      type: "Latte",
      active: false,
    },
    {
      type: "Another",
      active: false,
    },
    {
      type: "Another",
      active: false,
    },
  ]);

  const [coffee, setCoffee] = useState<CoffeeProp[]>([
    {
      id: 1,
      type: "Cappucino",
      with: "Chocolate",
      price: 4.53,
      rate: 4.8,
    },
    {
      id: 2,
      type: "Cappucino",
      with: "Oat Milk",
      price: 3.9,
      rate: 4.9,
    },
    {
      id: 3,
      type: "Cappucino",
      with: "Something",
      price: 8.75,
      rate: 5.0,
    },
    {
      id: 4,
      type: "Cappucino",
      with: "Powder",
      price: 4.56,
      rate: 4.7,
    },
  ]);

  const changeCoffeeType = (index: number) => {
    setCoffeeType((prev) => {
      return prev.map((coffee, thisIndex) => {
        return thisIndex === index
          ? { ...coffee, active: !coffee.active }
          : coffee;
      });
    });
  };
  return (
    <View className="main h-full">
      {/* top section starts here */}
      <View className="h-2/5 flex flex-col bg-[#1f1f1f] p-6">
        <View className="first flex flex-row justify-between ">
          <View className="text ">
            <Text className="text-gray-300">Location</Text>
            <View className="flex flex-row gap-2 items-center pt-1">
              <Text className="text-gray-300 ">Bilzen, Tanjungbalai</Text>
              <AntDesign name="down" size={17} color="white" />
            </View>
          </View>
          <View className="profile">
            <Image source={profile} />
          </View>
        </View>
        <View className="searchbox bg-[#313131] mt-10 flex flex-row items-center rounded-xl justify-between p-1 pl-2">
          <AntDesign name="search1" color="white" size={25} className="w-1/5" />
          <TextInput
            placeholder="Search coffee"
            className="w-4/6  h-full text-xl placeholder:text-white text-gray-400"
          />
          <TouchableOpacity className="bg-orange-500 p-4 rounded-xl">
            <AntDesign
              name="rightsquareo"
              size={25}
              color="white"
              className="w-1/5 self-end"
            />
          </TouchableOpacity>
        </View>
      </View>
      {/* top section ends here */}
      {/* bottom section starts here */}
      <View className="mt-20 pl-6">
        <ScrollView
          showsHorizontalScrollIndicator={false}
          horizontal={true}
          style={{ margin: 0, padding: 0 }}
          className="filters w-full"
        >
          {coffeeTypes.map((coffee, index) => (
            <CoffeeTypeBtn
              key={index}
              type={coffee.type}
              active={coffee.active}
              index={index}
              changeCoffeeType={changeCoffeeType}
            />
          ))}
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="border mt-8 mr-6 grid grid-cols-2 gap-x-2"
        >
          <Text>hello</Text>
        </ScrollView>
      </View>
      {/* bottom section ends here */}
    </View>
  );
};

export default Explore;
