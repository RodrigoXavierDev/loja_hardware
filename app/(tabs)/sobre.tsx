import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Linking } from 'react-native'; 

export default function Inicio() {

    const handlePressGitHub = () => {
        Linking.openURL('https://github.com/RodrigoXavierDev'); // Abre o link do GitHub
    };

    const handlePressLinkedIn = () => {
        Linking.openURL('https://www.linkedin.com/in/rodrigo-xavier-lima/'); // Abre o link do LinkedIn
    };

    return (
        <SafeAreaView style={Style.container}>
            <View style={Style.centralizar}>
            <View style={Style.imgPerfil}>
                <Image source={require('../../assets/icone.png')} style={Style.icone} />
            </View>
            <Pressable style={Style.button} onPress={handlePressGitHub}>
                <Image source={require('../../assets/github.png')} style={Style.icons} />
                <Text style={Style.text}>Github</Text>
            </Pressable>
            <Pressable style={Style.button} onPress={handlePressLinkedIn}>
                <Image source={require('../../assets/linkedin.png')} style={Style.icons} />
                <Text style={Style.text}>LinkedIn</Text>
            </Pressable>
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
    centralizar: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 100,
    },
    imgPerfil: {
        width: 100,
        height: 100,
        borderRadius: 100,
        marginBottom: 10,
        justifyContent: 'center',
        backgroundColor: '#fb5063',
    },
    icone: {
        width: 100,
        height: 100,
        borderRadius: 100,
    },
    button: {
        width: 300,
        height: 40,
        borderRadius: 10,
        marginVertical: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#cccccc',
        flexDirection: 'row',
    },
    text: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000000',
    },
    icons: {
        width: 20,
        height: 20,
        marginRight: 10,
    }
});
