import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Image,
    TouchableOpacity,
    Alert,
    TextInput,
    KeyboardAvoidingView
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import styles from './style';

import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';













export default function cadastrarLivro({ navigation }) {
    const [titulo, setTitulo] = useState();
    const [editora, setEditora] = useState();
    const [autor, setAutor] = useState();
    const [edicao, setEdicao] = useState();

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user) {
                console.log(user)
            }
        })
    }, []);

    function Gravar() {
        database()
            .ref(`/usuarios/${user?.uid}/livros`)
            .push({
                titulo: titulo,
                autor: autor,
                editora: editora,
                edicao: edicao,

            })
            .then(() => console.log('gravado'))
        navigation.navigate("Home")

    }


    const user = auth().currentUser;
    const reference = database().ref(`/usuarios/${user?.uid}`);




    return (
        <View style={styles.container}>
            <Text style={styles.label}>Título</Text>
            <TextInput
                style={styles.input}
                placeholder="Título do Livro"
                placeholderTextColor='#eca53b'
                onChangeText={setTitulo}
                value={titulo}
            />
            <Text style={styles.label}>Autor</Text>
            <TextInput
                style={styles.input}
                placeholder="Nome do Autor"
                placeholderTextColor='#eca53b'
                onChangeText={setAutor}
                value={autor}
            />
             <Text style={styles.label}>Editora</Text>
        <TextInput
        style={styles.input}
        placeholder="Editora do livro"
        placeholderTextColor='#eca53b'    
        onChangeText={setEditora}
        value={editora}
        />
         <Text style={styles.label}>Edição</Text>
        <TextInput
        style={styles.input}
        keyboardType= 'number-pad'
        returnKeyType='done'
        placeholder="Número da edição"
        placeholderTextColor='#eca53b'
        onChangeText={setEdicao}
        value={edicao}
        />

            <TouchableOpacity
                style={styles.buttonSalvar}
                onPress={Gravar}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
        </View>
       
        

    );


}