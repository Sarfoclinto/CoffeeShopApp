import { View, Text, Image } from "react-native";
import React, { useContext, useState } from "react";
import { Link, useLocalSearchParams } from "expo-router";
import { Coffees } from "./Context/CoffeeContext";
import { TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import preview from "./images/preview.png";
import { TouchableWithoutFeedback } from "react-native";

const Order = () => {
  const { coffee } = useContext(Coffees);
  const { id } = useLocalSearchParams();

  const orderCoffee = coffee.find(
    (item) => item.id.toString() === id.toString()
  );

  const [count, setCount] = useState<number>(1);
  const [deliver, setDeliver] = useState<boolean>(true);
  const changeOrderType = () => {
    setDeliver(!deliver);
  };

  return (
    <View className="bg-white">
      <View className="order  pt-5 px-6 bg-white mb-8">
        <View className="preference  p-0.5 flex flex-row justify-center rounded-xl bg-slate-200 mb-5">
          <TouchableOpacity
            onPress={changeOrderType}
            className={` px-[59px] py-3 rounded-xl ${
              deliver ? "bg-[#c67c4e]" : ""
            }`}
          >
            <Text
              className={`font-bold text-lg text-white  ${
                deliver ? "text-white" : "text-black"
              }`}
            >
              Deliver
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeOrderType}
            className={` px-[59px] py-3 rounded-xl ${
              !deliver ? "bg-[#c67c4e]" : ""
            }`}
          >
            <Text
              className={`font-bold text-lg text-white ${
                !deliver ? "text-white" : "text-black"
              }`}
            >
              Pick Up
            </Text>
          </TouchableOpacity>
        </View>
        <View className="orderBody">
          <Text className="text-lg font-semibold mb-4">
            {deliver ? "Delivery Address" : "Pick Up Point"}
          </Text>
          <Text className="text-base  font-medium mb-1">JI. Kpg Sutoyo</Text>
          <Text className="text-sm text-stone-500 font-medium mb-1">
            Kpg Sutoyo No. 620, Bilzen, Tanjungbalai.
          </Text>
          <View className="flex flex-row gap-x-2 mt-3 mb-5">
            <TouchableOpacity className="border flex flex-row items-center gap-x-1 rounded-3xl p-2 w-fit ">
              <AntDesign name="edit" size={20} />
              <Text className="text-base font-medium ">
                {deliver ? "Edit Address" : "Edit Pick Point"}
              </Text>
            </TouchableOpacity>
            <TouchableOpacity className="border flex flex-row items-center gap-x-1 rounded-3xl p-2 w-fit ">
              <AntDesign name="file1" size={20} />
              <Text className="text-base font-medium ">Add Note</Text>
            </TouchableOpacity>
          </View>
          <View className="border border-stone-400 border-0.5 mb-5"></View>
          <View className="flex flex-row justify-between items-center">
            <View className="flex flex-row items-center gap-x-2">
              <Image source={preview} />
              <View>
                <Text className="text-lg font-semibold">Cappaucino</Text>
                <Text className="text-stone-400">with Chocolate</Text>
              </View>
            </View>
            <View className="flex flex-row items-center gap-x-3">
              <TouchableWithoutFeedback
                disabled={count == 1 && true}
                onPress={() => setCount(count - 1)}
              >
                <View className="p-2 rounded-full border border-0.5">
                  <AntDesign name="minus" size={18} />
                </View>
              </TouchableWithoutFeedback>
              <Text className="font-bold text-base mr-3">{count}</Text>
              <TouchableWithoutFeedback onPress={() => setCount(count + 1)}>
                <View className="p-2 rounded-full border border-0.5">
                  <AntDesign name="plus" size={18} />
                </View>
              </TouchableWithoutFeedback>
            </View>
          </View>
        </View>
      </View>
      <View className="border border-0.5 border-stone-400 mb-8"></View>
      <View className="others  pt-5 px-6 bg-white ">
        <View className="border flex flex-row px-5 justify-between items-center py-3 border-1 border-stone-400 rounded-2xl mb-5">
          <View className="flex flex-row items-center gap-x-3">
            <View className="bg-[#c67c4e] p-2 rounded-full">
              <AntDesign name="bulb1" size={18} color="white" />
            </View>
            <Text className="text-lg font-semibold">1 Discount is applied</Text>
          </View>
          <AntDesign name="right" size={20} />
        </View>
        <Text className="font-bold text-lg">Payment Summary</Text>
        <View className="my-3">
          <View className="flex flex-row justify-between items-center">
            <Text className="text-lg font-normal">Price</Text>
            <Text className="font-semibold text-base">$ 4.53</Text>
          </View>
          <View className="flex flex-row justify-between items-center">
            <Text className="text-lg font-normal">Delivery Fee</Text>
            <View className="flex flex-row items-center gap-x-2">
              <Text className="">$ 2.0</Text>
              <Text className="font-semibold text-base">$ 4.53</Text>
            </View>
          </View>
        </View>
        <View className="border border-0.5 border-stone-400 mb-2"></View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-lg font-normal">Total Payment</Text>
          <Text className="font-semibold text-base">$5.53</Text>
        </View>
        <View className="flex flex-row justify-between items-center">
          <View>
            <AntDesign />
            <View className=" flex flex-row items-center rounded-xl bg-slate-200">
              <Text className="bg-[#c67c4e] mr-1 px-3 py-1 rounded-xl text-white">
                Cash
              </Text>
              <Text className=" px-2">$5.53</Text>
            </View>
          </View>
          <AntDesign name="" />
        </View>
        <Link href="/map" asChild className="">
          <TouchableOpacity className="bg-[#c67c4e] px-20 py-4 mt-5 rounded-xl ">
            <View className="w-full flex flex-row justify-center ">
              <Text className="text-white font-medium text-lg">Order</Text>
            </View>
          </TouchableOpacity>
        </Link>
      </View>
    </View>
  );
};

export default Order;

/*

// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Ionicons
              name="ios-settings"
              size={25}
              color="#fff"
              style={{ marginRight: 15 }}
              onPress={() => navigation.navigate('Settings')}
            />
          ),
          headerLeft: () => (
            <Ionicons
              name="ios-menu"
              size={25}
              color="#fff"
              style={{ marginLeft: 15 }}
              onPress={() => navigation.toggleDrawer()}
            />
          ),
        })}
      >
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'My Home' }} />
        <Stack.Screen name="Details" component={DetailsScreen} options={{ title: 'Details' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

*/
