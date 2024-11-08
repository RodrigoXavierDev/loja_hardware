import { View, Text, StyleSheet, FlatList, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useRouter } from "expo-router";
import firebase from "../../../firebase";

interface Produto {
    id: string;
    idCategory: string;
    title: string;
    image?: string;
}

export default function CategoriesScreen() {
    const router = useRouter();
    const [categorias, setCategorias] = useState<string[]>([]); 

    useEffect(() => {
        const fetchCategorias = async () => {
            const snapshot = await firebase.firestore().collection("produtos").get();
            const data = snapshot.docs.map((doc) => doc.data() as Produto);

            const uniqueCategories = Array.from(new Set(data.map((produto) => produto.idCategory)));
            setCategorias(uniqueCategories);
        };

        fetchCategorias();
    }, []);

    const renderCategoria = ({ item }: { item: string }) => (
        <Pressable
            style={styles.categoria}
            onPress={() => router.push(`/categories/produtosPorCategoria?idCategory=${item}`)}
        >
            <Text style={styles.categoriaNome}>{item}</Text>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={categorias}
                renderItem={renderCategoria}
                keyExtractor={(item) => item}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
        padding: 10,
    },
    categoria: {
        backgroundColor: "#f0f0f0",
        height: 100,
        width: "100%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginVertical: 10,
    },
    categoriaNome: {
        fontSize: 16,
        fontWeight: "bold",
    },
    listContent: {
        paddingBottom: 20,
    },
});
