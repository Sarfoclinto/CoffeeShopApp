import { Stack } from "expo-router";
import CoffeeContext from "./Context/CoffeeContext";
import { AntDesign, Ionicons } from "@expo/vector-icons";

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
            headerRight: () => (
              <Ionicons name="heart-outline" size={25} color="black" />
            ),
            headerTitle: "Detail",
            headerTitleAlign: "center",
          }}
        />
        <Stack.Screen name="order" options={{ headerShown: true }} />
        <Stack.Screen name="map" options={{ headerShown: true }} />
        <Stack.Screen
          name="(tabs)"
          options={{ contentStyle: { paddingTop: 50 } }}
        />
      </Stack>
    </CoffeeContext>
  );
}
