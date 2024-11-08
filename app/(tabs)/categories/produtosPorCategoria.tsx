import { View, Text, StyleSheet, FlatList, Image, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams, useRouter, useNavigation } from "expo-router";
import firebase from "../../../firebase";

interface Produto {
    id: string;
    idCategory?: string;
    image?: string;
    title: string;
    description?: string;
    price?: string;
}

export default function ProdutosDaCategoria() {
    const { idCategory } = useLocalSearchParams();
    const router = useRouter();
    const navigation = useNavigation();
    const [produtos, setProdutos] = useState<Produto[]>([]);

    // Define o título do cabeçalho como "Categorias"
    useEffect(() => {
        navigation.setOptions({ title: "Categorias" });
    }, [navigation]);

    // Busca produtos com base no idCategory
    useEffect(() => {
        if (idCategory) {
            const fetchProdutos = async () => {
                const snapshot = await firebase
                    .firestore()
                    .collection("produtos")
                    .where("idCategory", "==", idCategory)
                    .get();

                const data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() } as Produto));
                setProdutos(data);
            };

            fetchProdutos();
        }
    }, [idCategory]);

    const renderProduto = ({ item }: { item: Produto }) => (
        <Pressable
            style={styles.produto}
            onPress={() => router.push(`/produtos/${item.id}`)}
        >
            <Image source={{ uri: item.image }} style={styles.imagem} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>R$ {item.price}</Text>
            <View style={styles.botao}>
                <Text>Comprar</Text>
            </View>
        </Pressable>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={produtos}
                renderItem={renderProduto}
                keyExtractor={(item) => item.id}
                numColumns={2}
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
    produto: {
        backgroundColor: "#ffffff",
        height: 280,
        width: 165,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        padding: 10,
    },
    listContent: {
        paddingBottom: 20,
    },
    imagem: {
        width: 125,
        height: 125,
        borderRadius: 10,
    },
    botao: {
        width: 100,
        height: 30,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    },
});
