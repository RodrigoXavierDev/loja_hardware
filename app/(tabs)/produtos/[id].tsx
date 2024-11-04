import { View, Text, Image, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import firebase from "../../../firebase";

interface Produto {
    id: string;
    image?: string;
    title: string;
    description?: string;
    price?: string;
}

export default function ProdutoDetails() {
    const { id } = useLocalSearchParams();
    const [produto, setProduto] = useState<Produto | null>(null);

    useEffect(() => {
        if (id) {
            const docRef = firebase.firestore().collection("produtos").doc(id as string);
            docRef.get().then((doc) => {
                if (doc.exists) {
                    setProduto({ ...doc.data(), id: doc.id } as Produto);
                }
            });
        }
    }, [id]);

    if (!produto) {
        return <Text>Carregando...</Text>;
    }

    return (
        <View style={styles.container}>
            <Image source={{ uri: produto.image }} style={styles.imagem} />
            <Text style={styles.titulo}>{produto.title}</Text>
            <Text style={styles.descricao}>{produto.description}</Text>
            <Text style={styles.preco}>R$ {produto.price}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: "#ffffff",
        alignItems: "center",
    },
    imagem: {
        width: 200,
        height: 200,
        borderRadius: 10,
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
    },
    descricao: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 10,
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
        marginVertical: 10,
    },
});
