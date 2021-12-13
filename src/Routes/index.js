import React from "react";


import { createStackNavigator } from "@react-navigation/stack";
import { Entrar } from "../pages/Entrar";
import { Login } from "../pages/Login";
import { Aplicativo } from "../pages/Aplicativo";

const stack=createStackNavigator();

export const Routes = () => {

    return(
        <stack.Navigator screenOptions={{ headerTransparent: true, headerShown: false }}>
             <stack.Screen name="Login" component={Login}/>
             <stack.Screen name="Entrar" component={Entrar}/>
             <stack.Screen name="Aplicativo" component={Aplicativo}/>
        </stack.Navigator>
    )
} 