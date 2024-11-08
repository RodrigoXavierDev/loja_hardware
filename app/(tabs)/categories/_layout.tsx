import { Stack } from "expo-router";

export default function CategoryLayout() {
    return (
        <Stack
            screenOptions={{
                headerStyle: { backgroundColor: "#000000" },
                headerTintColor: "#FFFFFF",
                statusBarColor: "#000000"
            }}
        >
            <Stack.Screen 
                name="[idCategory]" 
                options={{ title: "Categorias" }} 
            />
            <Stack.Screen 
                name="produtosDaCategoria" 
                options={{ title: "Produtos" }} 
            />
        </Stack>
    );
}
