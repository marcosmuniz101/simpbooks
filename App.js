import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  Button

} from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from './src/paginas/login/';
import Home from './src/paginas/home/';
import cadastrarLivro from './src/paginas/cadastrarLivro/';
import EditarLivro from './src/paginas/editarLivro/';
import Perfil from './src/paginas/perfil/'

const Stack = createStackNavigator();


export default function App({ navigation }) {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTintColor: "#F92E",
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: "#fff",
            headerLeftLabelVisible: false,
            headerStyle: {
              backgroundColor: "#F92E",
            }
          }
          }

        />
        <Stack.Screen
          name="Cadastrar Livro"
          component={cadastrarLivro}
          options={{
            headerTintColor: "#F92E",
          }}

        />
        <Stack.Screen
          name="Editar Livro"
          component={EditarLivro}
          options={{
            headerTintColor: "#F92E",
          }}

        />
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{
            headerTintColor: "#F92E",
          }}

        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});


