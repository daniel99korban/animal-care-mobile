import React from 'react'
import {View, Text, Image, StyleSheet} from 'react-native';
import Botao from '../components/Botao';
import cssBtnOngCliente from '../assets/css/styles-ong-cliente';
import { signOut } from 'firebase/auth';
import { authentication } from '../src/firebase/config';

export default function ClienteONG(props){
    function sair(){
        alert("Saindo do sistema");
        signOut(authentication);
    }
    
    return (
        <>
            <View style={props.clienteOngStyle}>
                <Image 
                    source={require('../assets/img/logo-animal-care.png')} 
                    style={styles.styleLogoMarca}
                />
                <Text style={styles.formatText1}>Queremos saber quem é você</Text>   
                <Botao 
                    title="CLIENTE" 
                    buttonStyle={cssBtnOngCliente.buttonOngCliente} 
                    titleStyle={cssBtnOngCliente.textoOngCliente}
                />      
                <Botao title="ONG"
                    buttonStyle={cssBtnOngCliente.buttonOngCliente} 
                    titleStyle={cssBtnOngCliente.textoOngCliente}
                />
                <Botao
                    title="Sair"
                    buttonStyle={cssBtnOngCliente.buttonOngCliente}
                    titleStyle={cssBtnOngCliente.textoOngCliente} 
                    clique={sair}
                />
            </View>
            <Text style={styles.formatText2}>&copy;2021 Animal Care. All Rights Reserved</Text>      
        </>
    );
}

const styles = StyleSheet.create({
    formatText1 : {
        color:'#fff',
        fontWeight: 'bold', 
        textAlign:'center',
        marginBottom: 20
    },
    formatText2 : { 
        textAlign:'center',
        marginTop: 150,
        color: '#543A61'
    },
    styleLogoMarca : {
        marginBottom: 20, 
        alignSelf:'center'
    }
})