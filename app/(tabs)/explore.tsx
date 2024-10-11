import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import profile from "../images/Image.png";
import CoffeeTypeBtn from "../component/CoffeeTypeBtn";
import CoffeeCard from "../component/CoffeeCard";
import CoffeeContext, { Coffees } from "../Context/CoffeeContext";

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

  const { coffee, setCoffee } = useContext(Coffees);

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
    <View className="main h-full bg-[#f9f9f9]">
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

        <View className=" mt-6 mr-6 flex justify-center">
          <View className="h-[307px] pb-2 flex flex-col justify-between">
            <FlatList
              className=" ml-2"
              data={coffee}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(coffee) => coffee.id.toString()}
              renderItem={({ item }) => (
                <CoffeeCard
                  image={item.image}
                  key={item.id}
                  plus={item.plus}
                  price={item.price}
                  rate={item.rate}
                  type={item.type}
                  id={item.id}
                  coffee={coffee}
                />
              )}
              contentContainerStyle={{
                display: "flex",
                width: 350,
                justifyContent: "space-between",
              }}
            />
          </View>
        </View>
      </View>
      {/* bottom section ends here */}
    </View>
  );
};

export default Explore;

const styles = StyleSheet.create({});
