import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Menu() {

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.cabecalho}>
                <Text style={styles.h1}>Menu</Text>
            </View>
            <Link href={"../../../editar"} asChild={true}>
                <Pressable style={styles.opcao}>
                    <Image source={require('../../../assets/configuracao.png')} style={styles.icone} />
                    <Text style={styles.h1}>Editar</Text>
                </Pressable>
            </Link>
            <Link href={"../../../usuario"} asChild={true}>
            <Pressable style={styles.opcao}>
                <Image source={require('../../../assets/usuario.png')} style={styles.icone} />
                <Text style={styles.h1}>Meu perfil</Text>
            </Pressable>
            </Link>
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
        width: '94%',
        height: 40,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        backgroundColor: '#fb5063',
    },
    icone: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
    h1: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#FFFFFF',
        marginHorizontal: 10,
    },
    opcao: {
        width: '94%',
        height: 40,
        borderRadius: 10,
        marginVertical: 5,
        alignItems: 'center',
        backgroundColor: '#683080',
        flexDirection: 'row',
    },
})
