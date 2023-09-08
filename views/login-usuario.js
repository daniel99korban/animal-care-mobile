import React, { useState } from 'react'
import {View, Text, Image, StyleSheet, TextInput, Button, Alert} from 'react-native';
import { 
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword
} from "firebase/auth";

import { authentication } from '../src/firebase/config';

export default function TelaLogin(props){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    
    const signIn = () =>{
        signInWithEmailAndPassword(authentication, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            alert("Bem vindo(a)!");
        }).catch((error) => {
            if (error.code == 'auth/invalid-email') {
                alert('Email invalido!');
                setError(error.message);
            } else {
                alert('Usuario ou senha incorretos!');
                setError(error.message);
            }
        })  
    }

    const signUp = () => {
        createUserWithEmailAndPassword(authentication, email, password)
        .then((userCredential)=>{
            const user = userCredential.user;
            alert("Usuario cadastrado no sistema!");
        })
        .catch((error)=>{
            if (error.code == 'auth/email-already-in-use') {
               alert('Email ja em uso!');  
               setError(error.message);
            }
            else if(error.code == 'auth/invalid-email') {
                alert('Insira um email válido!');  
                setError(error.message);
            }
            else if(error.code == 'auth/weak-password'){
                alert('Senha deve ter no minimo 6 caracteres');  
                setError(error.message);
            }else {
                alert('Usuario ou senha incorretos!');
                setError(error.message);
            }
        });

    }

    return(
        <>
            <View>
                <Image style={styles.headerImg} source={require('../assets/img/logo-login.png')}/>
                <Text>Acolha uma pequena vida em seu lar temporariamente</Text>
            </View>
            <View>
                <Image style={styles.headerImg} source={require('../assets/img/icon-user.png')}/>
                <TextInput
                    style={{
                        backgroundColor: '#BEAEC6',
                        height: 40,
                        width: 320,
                        paddingLeft: 20,
                        borderRadius: 5,
                        alignSelf: 'center'
                    }}
                    placeholder="email ou nome de usuario"
                    value={email} // Atribui o valor do estado 'email' ao campo de entrada
                    onChangeText={(text) => setEmail(text)} // Atualiza o estado 'email' quando o texto muda
                />
                <TextInput
                    style={{
                        marginVertical: 20,
                        backgroundColor: '#BEAEC6',
                        height: 40,
                        width: 320,
                        paddingLeft: 20,
                        borderRadius: 5,
                        alignSelf: 'center'
                    }}
                    placeholder="senha"
                    secureTextEntry={true} // Para esconder a senha enquanto é digitada
                    value={password} // Atribui o valor do estado 'password' ao campo de entrada
                    onChangeText={(text) => setPassword(text)} // Atualiza o estado 'password' quando o texto muda
                />
                 <Button
                    title="Entrar"
                    onPress={signIn}
                />
                <Button
                    title="Cadastrar"
                    onPress={signUp}
                />
            </View>
        </>
    );
}

const styles = StyleSheet.create({
    headerImg:{
        alignSelf: 'center',
        marginVertical: 10
    },
    formLoginIcon:{
        alignSelf: 'center'
    }
})