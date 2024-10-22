import { Stack } from "expo-router";
import CoffeeContext from "./Context/CoffeeContext";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function RootLayout() {
  return (
      <CoffeeContext>
        <Stack
          screenOptions={{
            headerShown: false,
            contentStyle: { paddingHorizontal: 0 },
          }}
        >
          <Stack.Screen name="index" />
          <Stack.Screen
            name="detail"
            options={{
              headerShown: true,
              contentStyle:{paddingTop: 0},
              headerRight: () => (
                <Ionicons name="heart-outline" size={25} color="black" />
              ),
              headerTitle: "Detail",
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen name="order" options={{ headerShown: true }} />
          <Stack.Screen
            name="map"
            options={() => ({
              headerShown: false,
              headerTitleAlign: "center",
              headerTitle: "Map",
              contentStyle: { paddingTop: 50 },
            })}
          />
          <Stack.Screen
            name="(tabs)"
            options={{ contentStyle: { paddingTop: 30 } }}
          />
        </Stack>
      </CoffeeContext>
  );
}
