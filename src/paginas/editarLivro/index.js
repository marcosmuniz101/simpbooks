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
    FlatList,
    TextInput
} from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import database from '@react-native-firebase/database';

import auth from '@react-native-firebase/auth';
import styles from './style';


export default function EditarLivro({ navigation, route }, props) {

    const user = auth().currentUser;
    const [titulo, setTitulo] = useState();
    const [editora, setEditora] = useState();
    const [autor, setAutor] = useState();
    const [edicao, setEdicao] = useState(0);
    const [objLivro, setObjLivro] = useState({});


    function Ler() {
        (database().ref(`usuarios/${user.uid}/livros/${route.params.id}`)).on('value', snapshot => {

            if (snapshot.val() != null) {
                setObjLivro(snapshot.val());
                setTitulo(snapshot.val().titulo);
                setEdicao(snapshot.val().edicao);
                setAutor(snapshot.val().autor);
                setEditora(snapshot.val().editora);
            }
        });
    }

    function atualizar() {
        database()
            .ref(`usuarios/${user.uid}/livros/${route.params.id}`)
            .update({
                titulo: titulo,
                autor: autor,
                editora: editora,
                edicao: edicao,
            })
            .then(() => console.log('Data updated.'));
        navigation.navigate("Home")
    }

    function Remover() {
        database().ref(`usuarios/${user.uid}/livros/${route.params.id}`).remove()
            .then(() => console.log('Excluido'));
        navigation.navigate("Home")
    }

    useEffect(() => {
        Ler();
    }, [])

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
                keyboardType='number-pad'
                returnKeyType='done'
                placeholder="Número da edição"
                placeholderTextColor='#eca53b'
                onChangeText={setEdicao}
                value={edicao}
            />
            <TouchableOpacity
                style={styles.buttonSalvar}
                onPress={atualizar}
            >
                <Text style={styles.iconButton}>Salvar</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={styles.buttonExcluir}
                onPress={Remover}            >
                <Text style={{ color: '#F92E6A' }}>Apagar</Text>
            </TouchableOpacity>
        </View>
    )
}