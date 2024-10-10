import { View, StyleSheet, FlatList } from "react-native";
import { getCategoryById } from "../../../services/category";
import { ProductItem } from "../../../components/product-item";
import { router, useLocalSearchParams, Stack } from "expo-router";
import { getProductsByCategory } from "../../../services/product";


export default function Screen() {
    const {id} = useLocalSearchParams();

    const idCategory = parseInt(id as string);

    const category = getCategoryById(idCategory);
    if(!category) return router.back();

    const products = getProductsByCategory(idCategory);

    return (
        <View style={Style.container}>
            <Stack.Screen options={{title: category.title}}/>
            <FlatList
                data={products}
                renderItem={({ item }) => <ProductItem data={item} />}
                keyExtractor={(item) => item.id.toString()}
                style={Style.list}
                numColumns={2}
                showsVerticalScrollIndicator={false}
                columnWrapperStyle={Style.row}
            />
        </View>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    list: {
        flex: 1,
        width: '100%',
        padding: 20,
    },
    row: {
        justifyContent: 'space-between',
    },
});
