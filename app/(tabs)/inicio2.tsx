import { View, Text, ScrollView, StyleSheet, Pressable, TextInput, FlatList, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getAllProducts } from "../../services/product";
import { ProductItem } from "../../components/product-item";
import { StatusBar } from 'expo-status-bar';



export default function Inicio() {
    const products = getAllProducts();

    return (
        <SafeAreaView style={Style.container}>
            <StatusBar />
            <View style={Style.barraPesquisa}>
                <TextInput placeholder="Pesquisar"></TextInput>
            </View>
            <View style={Style.produtos}>
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
        </SafeAreaView>
    );
}

const Style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#000000',
        alignItems: 'center',
    },
    barraPesquisa: {
        width: '95%',
        height: 40,
        borderRadius: 10,
        marginBottom: 10,
        justifyContent: 'center',
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 10,
    },
    list: {
        width: '100%',
    },
    produtos: {
        width: '100%',
        height: '100%',
        borderRadius: 10,
        marginBottom: 10,
        marginHorizontal: 10,
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
    row: {
        justifyContent: 'space-between',
    }
})