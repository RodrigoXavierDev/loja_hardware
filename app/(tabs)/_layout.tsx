import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function TabLayout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: { backgroundColor: "#000000" },
                
            }}
        >
            <Tabs.Screen
                name="inicio"
                options={{
                    tabBarStyle: { backgroundColor: "#000000" },
                    title: "Inicio",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={28} name="home" color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="categories"
                options={{
                    title: "Categorias",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="list" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="menu"
                options={{
                    title: "Menu",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="th-large" size={28} color={color} />
                    ),
                }}
            />
            <Tabs.Screen
                name="sobre"
                options={{
                    title: "Sobre",
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={28} color={color} />
                    ),
                }}
            />
        </Tabs>
    );
}
