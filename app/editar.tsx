import { View, TextInput, StyleSheet, Text, Pressable } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../firebase";

const App = () => {
    const [idCategory, setIdCategory] = useState("");
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const handle = async () => {
        const produtos = await firebase.firestore().collection("produtos").add({
            idCategory: idCategory, // Corrigido
            image: image,
            title: title,
            description: description,
            price: price
        });

        alert(`Produto cadastrado: ${produtos.id}`);
    };

    return (
        <SafeAreaView>
            <View style={style.container}>
                <Text>Cadastrar produto:</Text>
                <TextInput
                    placeholder="ID da categoria"
                    onChangeText={text => setIdCategory(text)}
                    value={idCategory}
                />
                <TextInput
                    placeholder="Link da Imagem"
                    onChangeText={text => setImage(text)}
                    value={image}
                />
                <TextInput
                    placeholder="Título"
                    onChangeText={text => setTitle(text)}
                    value={title}
                />
                <TextInput
                    placeholder="Descrição"
                    onChangeText={text => setDescription(text)}
                    value={description}
                />
                <TextInput
                    placeholder="Preço"
                    onChangeText={text => setPrice(text)}
                    value={price}
                />
            </View>
            <View>
                <Pressable style={style.enviar} onPress={handle}>
                    <Text style={style.h1}>Adicionar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
};

const style = StyleSheet.create({
    container: {
        padding: 20,
    },
    enviar: {
        height: 40,
        width: 80,
        backgroundColor: "#000",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    h1: {
        color: "#FFF"
    }
});

export default App;
