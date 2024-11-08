import { View, StyleSheet, Text, Pressable, FlatList, Image } from "react-native";
import { useEffect, useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../../firebase";
import { useRouter } from "expo-router";

interface Produto {
    id: string;
    idCategory?: string;
    image?: string;
    title: string;
    description?: string;
    price?: string;
}

export default function Screen() {

    
    const router = useRouter();


    const [id, setid] = useState("");
    const [idCategory, setidCategory] = useState("");
    const [image, setimage] = useState("");
    const [title, settitle] = useState("");
    const [description, setdescription] = useState("");
    const [price, setprice] = useState("");
    const [produtos, setProdutos] = useState<Produto[]>([]);
    useEffect(() => {
        const unsubscribe = firebase.firestore().collection('produtos').onSnapshot((snapshot) => {
            const data = snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id } as Produto));
            setProdutos(data);
        });
        return () => unsubscribe();
    }, []);

    const renderProdutos = ({ item }: { item: Produto }) => (
        <Pressable style={styles.produto} onPress={() => router.push(`/produtos/${item.id}`)}>
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
        <SafeAreaView style={styles.fundo}>
            <View style={styles.container}>
                <FlatList
                    data={produtos}
                    renderItem={renderProdutos}
                    keyExtractor={(item) => item.id}
                    numColumns={2}
                    contentContainerStyle={styles.listContent}
                />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#000"
    },
    container: {
        alignItems: "center"
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
        padding: 10

    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    listContent: {
        paddingBottom: 20,
    },
    imagem: {
        width: 125,
        height: 125,
        borderRadius: 10
    },
    botao: {
        width: 100,
        height: 30,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#e0e0e0'
    }
});
