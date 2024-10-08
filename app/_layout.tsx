import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        contentStyle: { paddingHorizontal: 0 },
      }}
    >
      <Stack.Screen name="index" />
      <Stack.Screen name="detail" options={{ headerShown: true }} />
      <Stack.Screen name="order" options={{ headerShown: true }} />
      <Stack.Screen name="map" options={{ headerShown: true }} />
      <Stack.Screen
        name="(tabs)"
        options={{ contentStyle: { paddingTop: 50 } }}
      />
    </Stack>
  );
}
