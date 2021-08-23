import React, { useState, useEffect } from 'react';
import {
    Text,
    View,
    Image
} from 'react-native';
import auth from '@react-native-firebase/auth';
import { GoogleSignin, GoogleSigninButton, statusCodes } from '@react-native-google-signin/google-signin';
import styles from './style.js';

export default function login({ navigation }) {

    const [autenticado, setAutenticado] = useState(false);
    const user = auth().currentUser;

    useEffect(() => {

        GoogleSignin.configure({
            scopes: ['email'], // what API you want to access on behalf of the user, default is email and profile
            webClientId: '77476128823-jb6p4edsdal2vksd92igfqt1cibe6due.apps.googleusercontent.com', // client ID of type WEB for your server (needed to verify user ID and offline access)
            offlineAccess: true, // if you want to access Google API on behalf of the user FROM YOUR SERVER
        });
        auth().onAuthStateChanged((user) => {
            if (user) {
                setAutenticado(true);
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Perfil' }],
                });
            }
        })
    }, []);

    const signIn = async () => {
        try {
            await GoogleSignin.hasPlayServices();
            const { accessToken, idToken } = await GoogleSignin.signIn();
            const googleCredential = auth.GoogleAuthProvider.credential(idToken);
            setAutenticado(true);
            return auth().signInWithCredential(googleCredential);

        } catch (error) {
            if (error.code === statusCodes.SIGN_IN_CANCELLED) {
                // user cancelled the login flow
                alert('Login Cancelado');
            }
        }
    };

    return (

        <View style={styles.container}>
            <View style={styles.containerLogo}>
                <View>
                    <Image style={styles.imgLogo} source={require('../../imgs/logo.jpg')}></Image>
                </View>
                <Text style={styles.text1}> Bem-Vindo</Text>
            </View>
            <Text style={styles.text2}>Sem complicação!</Text>
            <Text style={styles.text2}>Faça já se login com sua conta google!</Text>
            <GoogleSigninButton
                style={styles.botaoGoogle}
                size={GoogleSigninButton.Size.Wide}
                color={GoogleSigninButton.Color.Light}
                onPress={signIn} />
        </View>
    );

}
