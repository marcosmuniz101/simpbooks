import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';
import database from '@react-native-firebase/database';

import auth from '@react-native-firebase/auth';
import firebase from '@react-native-firebase/app';
import styles from './style';

import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';



export default function Home({ navigation }) {

    const user = auth().currentUser;
    const [livros, setLivros] = useState([]);

    useEffect(() => {
        database().ref(`usuarios/${user.uid}/livros`).on("value", dataSnapshot => {
            let lista = [];
            dataSnapshot.forEach(child => {
                lista.push(
                    { id: child.key, valor: child.val() }
                )
            });
            setLivros(lista);
        });
    }, []);
    return (
        <View style={styles.container}>
            <View>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={livros}
                    renderItem={({ item }) => {
                        return (
                            <View style={styles.card}>
                                <TouchableOpacity onPress={() => navigation.navigate("Editar Livro", { id: item.id })} style={styles.touch}>

                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <Text style={styles.titulo}>
                                            {item.valor.titulo}
                                        </Text>
                                        <Text style={styles.edicao}>Edição: {item.valor.edicao}</Text>
                                    </View>

                                    <View View style={{ flexDirection: 'row', justifyContent: 'flex-start' }}>
                                        <Text style={styles.autor}>Autor: {item.valor.autor} </Text>
                                    </View>
                                </TouchableOpacity>
                            </View>)
                    }} />
            </View>
            <TouchableOpacity style={styles.buttonCadastrar}
                onPress={() => navigation.navigate("Cadastrar Livro")}
            ><Text style={styles.textoBt}>+</Text></TouchableOpacity>
        </View>
    );

}
