import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const Notification = () => {
  return (
    <View>
      <Text>Notification</Text>
      <Link href={"/detail"}>Go back to the detail page</Link>
      <Link href={"/map"}>Go back to the map page</Link>
      <Link href={"/order"}>Go back to the order page</Link>
    </View>
  );
};

export default Notification;
