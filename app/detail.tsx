import { View, Text, Image, TouchableOpacity } from "react-native";
import React, { useContext, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Coffees } from "./Context/CoffeeContext";
import star from "./images/star.png";
import { AntDesign } from "@expo/vector-icons";

const Details = () => {
  const { coffee } = useContext(Coffees);
  const { id } = useLocalSearchParams();
  const detailedCoffee = coffee.find((item) => item.id.toString() === id);
  console.log(detailedCoffee.image);
  console.log(coffee);

  const [sizes, setSizes] = useState([
    {
      size: "S",
      active: false,
    },
    {
      size: "M",
      active: true,
    },
    {
      size: "L",
      active: false,
    },
  ]);

  const changeSize = (index: string) => {
    setSizes((prev) => {
      return prev.map((item, theindex) => {
        return theindex.toString() === index
          ? { ...item, active: !item.active }
          : { ...item, active: false };
      });
    });
  };

  return (
    <View className="relative border h-full">
      <View className="main px-6 pt-2 flex flex-col gap-y-2">
        <View className="border h-[226px] rounded-xl"></View>
        <View className="texts">
          <Text className="text-xl font-semibold">{detailedCoffee.type}</Text>
          <Text className="text-stone-500">with {detailedCoffee.plus}</Text>
        </View>
        <View className="flex flex-row justify-between mb-5">
          <View className="left flex flex-row items-center">
            <Image source={star} />
            <Text className="font-semibold text-lg ml-1">
              {detailedCoffee.rate}
            </Text>
            <Text className="text-xs self-end mb-1 text-stone-500 ml-1">
              (230)
            </Text>
          </View>
          <View className="right flex flex-row gap-x-2">
            <View className="p-2 bg-slate-200 rounded-lg w-fit">
              <AntDesign name="codepen-circle" size={20} color="#c67c4e" />
            </View>
            <View className="p-2 bg-slate-200 rounded-lg w-fit">
              <AntDesign name="cloudo" size={20} color="#c67c4e" />
            </View>
          </View>
        </View>
        <View className="border border-stone-300 "></View>
        <View className="descriptionBox">
          <Text className="font-semibold text-lg">Description</Text>
          <Text>{detailedCoffee.description}</Text>
        </View>
        <View className="sizeBox ">
          <Text className="font-semibold text-lg mb-2">Size</Text>
          <View className="sizes mx-3 flex flex-row gap-x-3 justify-center">
            {sizes.map(({ size, active }, index) => (
              <TouchableOpacity
                onPress={() => changeSize(index.toString())}
                key={index}
                className={`border px-10 py-2 rounded-lg ${
                  active ? "border-[#c67c4e] bg-[#fff5ee]" : "border-stone-500"
                }`}
              >
                <Text
                  className={`text-lg font-bold ${
                    active ? "text-[#c67c4e]" : ""
                  }`}
                >
                  {size}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
      <View className=" mt-8 h-1/6 rounded-t-3xl bg-white px-8 flex flex-row justify-between items-center bottom-0">
        <View>
          <Text className="text-lg">Price</Text>
          <Text className="text-lg font-bold text-[#c67c4e]">
            $ {detailedCoffee.price}
          </Text>
        </View>
        <View>
          <Link href={`/order?id=${id}`} asChild>
            <TouchableOpacity className="bg-[#c67c4e] px-14 py-3 rounded-xl">
              <Text className="text-lg font-bold text-white">Buy Now</Text>
            </TouchableOpacity>
          </Link>
        </View>
      </View>
    </View>
  );
};

export default Details;
