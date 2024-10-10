import { Product } from "../types/product";
import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import { Link } from "expo-router";

type Props = {
    data: Product
}

export const ProductItem = ({data}: Props) => {
    return (
        <Link href={`/product/${data.id}`} asChild>
        <Pressable style={styles.container}>
            <Image
                style={styles.image}
                source={{uri: data.image}}
                resizeMode="cover"
            />
            <View style={styles.info}>
                <Text style={styles.title}>{data.title}</Text>
                <Text style={styles.description}>{data.description}</Text>
                <Text style={styles.price}>R$ {data.price.toFixed(2)}</Text>
            </View>
        </Pressable>
        </Link>
    )
}
const styles = StyleSheet.create({
    container: {
        marginBottom: 25,
        backgroundColor: '#683080',
        borderRadius: 10,
        width: '48%',
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        backgroundColor: '#683080',
    },
    info: {
        padding: 10,
        width: '100%',

    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginVertical: 5,
        color: '#FFFFFF',
    },
    description: {
        fontSize: 13,
        color: '#ffffff',
        marginVertical: 5,
    },
    price: {
        fontSize: 14,
        fontWeight: 'bold',
        textAlign: 'right',
        color: '#FFFFFF',
    }
})