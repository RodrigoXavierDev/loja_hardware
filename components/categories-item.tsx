import { Pressable, Text, StyleSheet, Image, View } from "react-native";
import { Category } from "../types/category";
import { router } from "expo-router";

type props = {
    data: Category
        
}

export const CategoryItem = ({data}: props) => {
    const click = () => {
        router.navigate(`categories/${data.id}`);
    }
    return(
        <Pressable style={styles.container} onPress={click}>
            <Image 
                source={{uri: data.cover}}
                style={styles.image}
            />
            <View style={styles.bg}></View>
            <View style={styles.box}>
                <Text style={styles.title}>{data.title}</Text>
            </View>
        </Pressable>
    );
}
const styles = StyleSheet.create({
    container: {
        margin: 10,
        backgroundColor: '#333333',
        borderRadius: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 10,
        
    },
    bg: {
        height: 150,
        borderRadius: 10,
        backgroundColor: '#000000',
        opacity: 0.6,
        marginTop: -150,
    },
    box: {
        height: 150,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -150,
    },
    title: {
        color: '#FFFFFF',
        fontSize: 16,
    }
})