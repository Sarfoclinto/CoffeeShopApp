import { View, Text } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";

type Prop = {
  type: string;
  active: boolean;
  index: number;
  changeCoffeeType: (index: number) => void;
};
const CoffeeTypeBtn = ({ type, active, index, changeCoffeeType }: Prop) => {
  return (
    <View className="mr-2">
      <TouchableOpacity
        onPress={() => {
          changeCoffeeType(index);
        }}
        className={` ${
          active ? "bg-[#c67c4e] " : "bg-white"
        } p-3 rounded-xl h-fit`}
      >
        <Text
          className={`${
            active ? "text-white" : "text-black"
          } text-lg font-medium`}
        >
          {type}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CoffeeTypeBtn;
