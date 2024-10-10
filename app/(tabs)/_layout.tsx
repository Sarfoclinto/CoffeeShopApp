import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const TabsLayout = () => {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, size }) => {
          let iconname: string;

          if (route.name === "explore") {
            iconname = focused ? "home" : "home-outline";
          } else if (route.name === "map") {
            iconname = focused ? "list" : "list-outline";
          } else if (route.name === "favourite") {
            iconname = focused ? "heart-half" : "heart-half";
          } else if (route.name === "market") {
            iconname = focused ? "bag" : "bag-outline";
          } else if (route.name === "notification") {
            iconname = focused ? "notifications" : "notifications-sharp";
          }

          return (
            <Ionicons
              name={iconname}
              size={size}
              color={focused ? "#c67c4e" : "gray"}
            />
          );
        },
        headerShown: false,
        tabBarLabel: ({ focused }) =>
          focused && (
            <AntDesign
              name="minus"
              size={15}
              color={focused ? "#c67c4e" : ""}
            />
          ),
        tabBarStyle: {
          height: 55,
        },
      })}
    >
      <Tabs.Screen name="explore" options={{ headerShown: false }} />
      <Tabs.Screen name="favourite" />
      <Tabs.Screen name="market" />
      <Tabs.Screen name="notification" />
    </Tabs>
  );
};

export default TabsLayout;
