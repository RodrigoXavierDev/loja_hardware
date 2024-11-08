import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import firebase from "../firebase";

export default function Usuario() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleCreateUser = async () => {
        try {
            // Criar o usuário no Firebase Authentication
            const userCredential = await firebase.auth().createUserWithEmailAndPassword(email, password);
            const user = userCredential.user;

            if (user) {
                // Armazenar dados adicionais do usuário no Firestore
                await firebase.firestore().collection("usuarios").doc(user.uid).set({
                    name: name,
                    email: email,
                });

                Alert.alert("Sucesso", "Usuário criado com sucesso!");
                setName("");
                setEmail("");
                setPassword("");
            } else {
                Alert.alert("Erro", "Erro ao criar usuário. Usuário não foi retornado.");
            }
        } catch (error) {
            // Garante que o 'error' seja tratado como um objeto com 'message'
            const errorMessage = error instanceof Error ? error.message : "Erro desconhecido";
            Alert.alert("Erro", `Erro ao criar usuário: ${errorMessage}`);
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.header}>Criar Conta</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Nome"
                    placeholderTextColor="#666"
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={styles.input}
                    placeholder="Email"
                    placeholderTextColor="#666"
                    onChangeText={setEmail}
                    value={email}
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
                <TextInput
                    style={styles.input}
                    placeholder="Senha"
                    placeholderTextColor="#666"
                    onChangeText={setPassword}
                    value={password}
                    secureTextEntry
                />

                <Pressable style={styles.button} onPress={handleCreateUser}>
                    <Text style={styles.buttonText}>Criar Conta</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: "#000000",
    },
    container: {
        paddingHorizontal: 20,
        flex: 1,
        justifyContent: "center",
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
    },
    buttonText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
});
