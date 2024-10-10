import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet, View, Text, Image, Pressable } from "react-native";
import { router, Stack, useLocalSearchParams } from "expo-router";
import { getProductById } from "../../services/product";

export default function Screen() {

    const { id } = useLocalSearchParams();
    const idProduct = parseInt(id as string);

    const product = getProductById(idProduct);
    if (!product) return router.back();

    const Comprar = () => {
        alert('Você clicou no item: ' + product.title);
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen options={{ title: '' }} />
            <ScrollView style={styles.area}>
                <View style={styles.imgBackground}>
                    <Image
                        style={styles.img}
                        source={{ uri: product.image }}
                        resizeMode="cover"
                    />
                </View>
                <View style={styles.info}>
                    <Text style={styles.price}>R$ {product.price}</Text>
                    <Text style={styles.title}>{product.title}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>
            <View style={styles.buttonArea}>
                <Pressable style={styles.button} onPress={Comprar}>
                    <Text style={styles.buttonText}>Comprar</Text>
                </Pressable>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    area: {
        flex: 1,
        width: '100%',
        padding: 10,
    },
    imgBackground: {
        width: '100%',
        height: 320,
        borderRadius: 10,
        backgroundColor: '#fb5063',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 10,
    },
    info: {
        marginTop: 10,
        padding: 10,
        width: '100%',
        borderRadius: 10,
        height: 220,
        justifyContent: 'center',
        backgroundColor: '#683080',
    },
    img: {
        width: '98%',
        height: 310,
        borderRadius: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#FFFFFF',
    },
    description: {
        fontSize: 16,
        marginVertical: 10,
        color: '#ffffff',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        marginVertical: 10,
        color: '#FFFFFF',
    },
    buttonArea: {
        paddingVertical: 10,
        width: '100%',
        alignItems: 'center',
    },
    button: {
        height: 40,
        width: '95%',
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#fb5063',
    },
    buttonText: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#FFFFFF',
    }
})