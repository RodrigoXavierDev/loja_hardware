import { Stack } from "expo-router";

export default function CategoryLayout(){
    return(
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#000000" },
                headerTintColor: "#FFFFFF",
                statusBarColor: "#000000"
            }}
        >
            <Stack.Screen name="list" options={{title: "Categorias", headerShown: false, statusBarColor: "#000000"}} />
        <Stack.Screen name="[id]" />
        </Stack>
    );
}