import 'react-native-gesture-handler';
import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';
import auth from '@react-native-firebase/auth';
import database from '@react-native-firebase/database';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import styles from './style/';

export default function Perfil({ navigation }) {

    useEffect(() => {
        auth().onAuthStateChanged((user) => {
            if (user === null) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }],
                });
            }
        })
    }, []);


    const Sair = async () => {
        try {
            await GoogleSignin.revokeAccess();
            await GoogleSignin.signOut();
            auth().signOut()
        } catch (error) {
            console.error(error);
        } navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }],
        });
    };

    const user = auth().currentUser;
    const reference = database().ref(`/usuarios/${user?.uid}`);

    return (

        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <View>
                    <Image style={styles.imgLogo} source={{ uri: user?.photoURL }}></Image>
                </View>
                <Text style={styles.text1}>{user?.displayName}</Text>
                <Text style={styles.text2}>{user?.email}</Text>
            </View>

            <TouchableOpacity
                style={styles.buttonSeguir}
                onPress={() => navigation.navigate("Home")} >
                <Text style={{ color: "#F92E", fontWeight: 'bold' }}>Ver meus livros</Text>
            </TouchableOpacity>

            <Text style={styles.sair}
                onPress={Sair}
            > Sair </Text>

        </View>

    );


}