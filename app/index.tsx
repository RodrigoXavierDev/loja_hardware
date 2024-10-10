import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, Pressable, TextInput } from "react-native";
import { router } from "expo-router";

export default function Screen() {
    const Start = () => {
        router.replace('/inicio')
    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.h1}>Uma loja{'\n'}de Computador{'\n'}Especialiazada</Text>
            </View>
            <View style={styles.login}>
                <Text style={styles.h2}>Faça seu Login</Text>
                <View style={styles.caixaInput}>
                    <Text style={styles.h3}>Email:</Text>
                    <TextInput placeholder="exemplo@email.com" style={styles.email} />
                </View>
                <View style={styles.caixaInput}>
                    <Text style={styles.h3}>Senha:</Text>
                    <TextInput placeholder="senha" style={styles.email} />
                </View> 
                <Pressable style={styles.loginButton} onPress={Start}>
                    <Text style={styles.h3}>Logar</Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    cabecalho: {
        width: '90%',
        height: 205,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        backgroundColor: '#fb5063',
    },
    login: {
        width: '90%',
        height: 395,
        borderRadius: 10,
        backgroundColor: '#683080',
        justifyContent: 'center',
        alignItems: 'center',
    },
    h1: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF',
        marginHorizontal: 10,
    },
    h2: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
        color: '#FFFFFF',
        marginHorizontal: 10,
    },
    h3: {
        fontSize: 14,
        color: '#ffffff'
    },
    email: {
        width: '100%',
        height: 40,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        padding: 10,
    },
    caixaInput: {
        marginBottom: 40,
        width: '80%',
    },
    loginButton: {
        width: '80%',
        height: 35,
        borderRadius: 10,
        backgroundColor: '#000000',
        justifyContent: 'center',
        alignItems: 'center',
    },
})