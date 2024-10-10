import { View, Text, StyleSheet, FlatList } from "react-native";
import { getAllCategories } from "../../../services/category";
import { CategoryItem } from "../../../components/categories-item";

export default function Screen() {
    //puxando todas as categorias

    const categories = getAllCategories();

    return (
        
        <View style={styles.container}>
            <FlatList
                data={categories}
                renderItem={({ item }) => <CategoryItem data={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={styles.list}
                contentContainerStyle={styles.listContent}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    listContent: {
        paddingBottom: 20,
    },
});
