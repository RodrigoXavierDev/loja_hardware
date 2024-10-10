import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        statusBarColor: "#000000",
        headerStyle: { backgroundColor: "#000000" },
        headerTintColor: "#ffffff",
      }}
    >
      <Stack.Screen 
        name="index" 
        options={{ title: "Home" }}
      />
      <Stack.Screen 
        name="(tabs)" 
        options={{ headerShown: false }}
      />
    </Stack>
  );
}
