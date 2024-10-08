import { View, Text } from "react-native";
import React from "react";
import { Tabs } from "expo-router";

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false,  }}>
      <Tabs.Screen name="explore" options={{headerShown: false}} />
      <Tabs.Screen name="favourite" />
      <Tabs.Screen name="market" />
      <Tabs.Screen name="notification" />
    </Tabs>
  );
};

export default TabsLayout;
