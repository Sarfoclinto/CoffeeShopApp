import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View>
      <Text>this is the index page</Text>
      <Link href={"/(tabs)"} style={styles.textLink}>
        {" "}
        Lets Go to the Tabs
      </Link>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  textLink: {
    color: "red",
    fontSize: 17,
    cursor: "pointer"
  },
});
