import React from 'react';
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Login from '../screens/Login';
import Produtos from '../screens/produtos';

const Rotas = {
    Login: {
        nome: "Login",
        screen: Login
    },
    Produtos: {
        nome: "Produtos",
        screen: Produtos
    }
}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);