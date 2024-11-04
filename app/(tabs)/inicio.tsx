import { View, TextInput, StyleSheet, Text, Pressable, FlatList, Image } from "react-native";
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
        <Pressable style={styles.produto} onPress={() => router.push(`/categories/${item.id}`)}>
            <Image source={{ uri: item.image }} style={styles.imagem} />
            <Text>{item.title}</Text>
            <Text>{item.description}</Text>
            <Text>R$ {item.price}</Text>
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
        height: 240,
        width: 180,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        marginHorizontal: 8,
        marginVertical: 8,
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
        width: 120,
        height: 120,
        borderRadius: 10
    },
});
