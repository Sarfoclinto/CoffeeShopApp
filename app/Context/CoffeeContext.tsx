import { View, Text } from "react-native";
import React, { createContext, useState } from "react";
import coffee1 from "../images/coffee1.png";
import coffee2 from "../images/coffee2.png";
import coffee3 from "../images/coffee3.png";
import coffee4 from "../images/coffee4.png";
import bigCoffee1 from "../images/bigCoffee1.png";
import bigCoffee2 from "../images/bigCoffee2.jpg";
import bigCoffee4 from "../images/bigCoffee4.jpg";
import bigCoffee3 from "../images/bigCoffee3.jpg";

// console.log("react: ",React);

// console.log("coffee1: ", coffee1);
// console.log("coffee2: ", coffee2);
// console.log("coffee3: ", coffee3);
// console.log("coffee4: ", coffee4);
// console.log("bigcoffee1: ", bigCoffee1);
// console.log("bigcoffee2: ", bigCoffee2);
// console.log("bigcoffee3: ", bigCoffee3);
// console.log("bigcoffee4: ", bigCoffee4);

export const Coffees = createContext();

interface CoffeeProp {
  id: number;
  type: string;
  plus: string;
  price: number;
  rate: number;
  image: string;
  description: string;
}

const CoffeeContext = ({ children }) => {
  const [coffee, setCoffee] = useState<CoffeeProp[]>([
    {
      id: 1,
      type: "Cappucino",
      plus: "Chocolate",
      price: 4.53,
      rate: 4.8,
      image: coffee1,
      description:
        "Strong and black coffee made by forcing hot water through finely ground coffee beans. Often enjoyed in small quantities, and forms the base for many other coffee drinks. Originating from Italy, it’s the ultimate go-to for a quick caffeine hit. Espresso’s intensity and rich flavor make it beloved by coffee enthusiasts around the globe.",
    },
    {
      id: 2,
      type: "Cappucino",
      plus: "Oat Milk",
      price: 3.9,
      rate: 4.9,
      image: coffee2,
      description:
        "Smooth and creamy coffee made with espresso and steamed milk. Known for its velvety texture and often topped with foam art. Perfect for those who enjoy a milder coffee experience with a touch of elegance. It’s a staple in cafes worldwide and pairs beautifully with a variety of flavors, from vanilla to caramel.",
    },
    {
      id: 3,
      type: "Cappucino",
      plus: "Something",
      price: 8.75,
      rate: 5.0,
      image: coffee3,
      description:
        "Rich coffee made with equal parts espresso, steamed milk, and foamed milk. Distinguished by its frothy top and often dusted with cocoa powder. A harmonious balance of strong and sweet, originating from Italy. Cappuccinos are not just a morning indulgence but also a mid-day treat, offering a perfect blend of flavor and texture.",
    },
    {
      id: 4,
      type: "Cappucino",
      plus: "Powder",
      price: 4.56,
      rate: 4.7,
      image: coffee4,
      description:
        "Diluted espresso coffee, giving a similar strength but different flavor to traditionally brewed coffee. Created by adding hot water to espresso, it’s a versatile option for those who prefer a longer drink. The Americano's history dates back to World War II, when American soldiers in Europe would dilute espresso to approximate the coffee they were used to.",
    },
    {
      id: 6,
      type: "Cuppucino",
      description:
        "Velvety smooth coffee made with espresso and steamed milk, similar to a latte but with less milk. Known for its silky microfoam and strong coffee flavor, it’s a favorite in Australia and New Zealand. The Flat White offers a more intense coffee experience compared to a latte, highlighting the quality and flavor of the espresso.",
      price: 3.75,
      rate: 4.6,
      plus: "Oat",
      image: coffee1,
    },
  ]);

  return (
    <Coffees.Provider value={{ coffee, setCoffee }}>
      {children}
    </Coffees.Provider>
  );
};

export default CoffeeContext;
