import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import { useEffect, useState } from "react";
import { useLocalSearchParams } from "expo-router";
import firebase from "../../firebase";
import { SafeAreaView } from "react-native-safe-area-context";

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
        <SafeAreaView style={styles.background}>
            <View style={styles.container}>
                <Image source={{ uri: produto.image }} style={styles.imagem} />
                <View style={styles.box}>
                    <Text style={styles.titulo}>{produto.title}</Text>
                    <Text style={styles.descricao}>{produto.description}</Text>
                    <Text style={styles.preco}>R$ {produto.price}</Text>
                </View>
                <Pressable style={styles.botaoComprar}>
                    <Text style={styles.botaoComprarText}>Comprar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    container: {
        padding: 20,
        backgroundColor: "#000000",
        alignItems: "center",
        height: "100%",
        width: "100%",
        justifyContent: "center",
    },
    imagem: {
        width: 275,
        height: 275,
        borderRadius: 10,
    },
    box: {
        width: 275,
        height: 200,
        borderRadius: 10,
        marginVertical: 30,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#FFF",
    },
    titulo: {
        fontSize: 24,
        fontWeight: "bold",
        marginVertical: 10,
        color: "#000000",
    },
    descricao: {
        fontSize: 16,
        textAlign: "center",
        marginVertical: 10,
        color: "#000000",
    },
    preco: {
        fontSize: 18,
        fontWeight: "bold",
        color: "green",
        marginVertical: 10,
    },
    botaoComprar: {
        width: 275,
        height: 50,
        borderRadius: 10,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
    },
    botaoComprarText: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#FFF",
    }
});
