import React from 'react';
import {View, Text, Image} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


import Fogao1 from '../../../assets/mercadorias/Fogao1.jpg';
import Fogao2 from '../../../assets/mercadorias/Fogao2.jpg';
import Geladeira1 from '../../../assets/mercadorias/Geladeira1.jpg';
import Microondas1 from '../../../assets/mercadorias/Microondas1.jpg';
import Microondas2 from '../../../assets/mercadorias/Microondas2.jpg';

const mercadorias = [
    {
        nome: "Fogão Brastemp",
        imagem: <Image source={Fogao1}/>,
        preco: "R$ 999,00"
    },
    {
        nome: "Fogão Esmaltec",
        imagem: <Image source={Fogao2}/>,
        preco: "R$ 500,00"
    },
    {
        nome: "Geladeira Eletrolux",
        imagem: <Image source={Geladeira1}/>,
        preco: "R$ 1750,00"
    },
    {
        nome: "Microondas Eletrolux",
        imagem: <Image source={Microondas1}/>,
        preco: "R$ 450,00"
    },
    {
        nome: "Microondas Brastemp",
        imagem: <Image source={Microondas2}/>,
        preco: "R$ 500,00"
    }
]

function Produtos() {
    return (
        <View>
            <ScrollView>
            
                <Text>Confira nossos produtos!</Text>
                {
                    mercadorias.map((produto, key) => {
                        return (
                            <View>
                                <Text>{produto.imagem}</Text>
                                <Text>{produto.nome}</Text>
                                <Text>R$ {produto.preco}</Text>
                            </View>
                        )
                    }
                    )
                }
            
            </ScrollView>
        </View>
    )
}

export default Produtos;