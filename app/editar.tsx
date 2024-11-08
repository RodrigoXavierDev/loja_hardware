import { View, TextInput, StyleSheet, Text, Pressable, ScrollView } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../firebase";
import { Picker } from "@react-native-picker/picker";

const App = () => {
    // Estados para Produto
    const [idCategory, setIdCategory] = useState("Placa de video"); // Valor padrão
    const [image, setImage] = useState("");
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    // Função para cadastrar Produto
    const handleAddProduct = async () => {
        try {
            const productRef = await firebase.firestore().collection("produtos").add({
                idCategory,
                image,
                title,
                description,
                price,
            });
            alert(`Produto cadastrado com sucesso: ${productRef.id}`);
            setIdCategory("Placa de video"); // Reset para valor padrão
            setImage("");
            setTitle("");
            setDescription("");
            setPrice("");
        } catch (error) {
            alert("Erro ao cadastrar o produto.");
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
                <View style={styles.container}>
                    
                    <Text style={styles.header}>Cadastrar Produto</Text>

                    <Text style={styles.titulo}>Categoria:</Text>
                    <View style={styles.pickerContainer}>
                        <Picker
                            selectedValue={idCategory}
                            onValueChange={(itemValue) => setIdCategory(itemValue)}
                            style={styles.picker}
                        >
                            <Picker.Item label="Placa de video" value="Placa de video" />
                            <Picker.Item label="Processador" value="Processador" />
                            <Picker.Item label="Memoria RAM" value="Memoria RAM" />
                            <Picker.Item label="Fonte" value="Fonte" />
                            <Picker.Item label="Placa mãe" value="Placa mãe" />
                        </Picker>
                    </View>

                    
                    <TextInput
                        style={styles.input}
                        placeholder="Link da Imagem"
                        placeholderTextColor="#666"
                        onChangeText={setImage}
                        value={image}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Título"
                        placeholderTextColor="#666"
                        onChangeText={setTitle}
                        value={title}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Descrição"
                        placeholderTextColor="#666"
                        onChangeText={setDescription}
                        value={description}
                        multiline
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Preço"
                        placeholderTextColor="#666"
                        onChangeText={setPrice}
                        value={price}
                        keyboardType="numeric"
                    />
                    <Pressable style={styles.button} onPress={handleAddProduct}>
                        <Text style={styles.buttonText}>Adicionar Produto</Text>
                    </Pressable>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#000000",
    },
    scrollViewContent: {
        flexGrow: 1,
        paddingVertical: 20,
    },
    container: {
        paddingHorizontal: 20,
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#ffffff",
        marginBottom: 20,
        textAlign: "center",
    },
    input: {
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        fontSize: 16,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 2,
        color: "#333",
    },
    button: {
        height: 50,
        backgroundColor: "#683080",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        elevation: 3,
        marginBottom: 20,
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    pickerContainer: {
        backgroundColor: "#fff",
        borderRadius: 10,
        marginBottom: 15,
    },
    picker: {
        height: 50,
        color: "#333",
    },
    titulo: {
        
    }
});

export default App;
