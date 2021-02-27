import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity,Alert, Platform } from 'react-native';

import Fundo from '../../../assets/fundoescuro.jpg';

import styles from './styles'

const nataly = {
    id: 1,
    email: "natalyflor@gmail.com",
    senha: "cachorro"
}

function Login ({navigation}) {

    function autenticacao() {

        if (nataly.email === usuario && nataly.senha === senha) {
            navigation.navigate("Produtos");
        }else {
            Alert.alert("Não foi possível fazer o Login!", "Usuário e/ou senha inválidos!")
        }
    }

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return (
        <View style={styles.caixa}>
            <ImageBackground source={Fundo} style={styles.fundo}>
                <View>
                    <Text style={styles.titulo}>Login</Text>
                </View>

                <View style={styles.inputs}>
                    <TextInput 
                    placeholder="Digite aqui o seu e-mail" 
                    style={styles.input}
                    value={usuario}
                    onChangeText={(text) => setUsuario(text)}
                />
                    <TextInput 
                    placeholder="Digite aqui o sua senha" 
                    style={styles.input} 
                    secureTextEntry={true}
                    value={senha}
                    onChangeText={(text) => setSenha(text)}
                />

                    <TouchableOpacity style={styles.btn} onPress={autenticacao}>
                        <Text style={styles.textbtn }>Entrar!</Text>
                    </TouchableOpacity>
                </View>

            </ImageBackground>
        </View>
    )
}

export default Login;

// function autenticacao() {
//     if (Platform === "web") {
//         alert("Você está navegando da web")
//     }else {
//         Alert.alert(Platform.OS)
//     }    
// }