import React from 'react'
import {View, Text, Image} from 'react-native';
import Botao from '../components/Botao';
import cssBtnOngCliente from '../assets/css/styles-ong-cliente';

export default function ClienteONG(props){
    const formatText1 = {
        color:'#fff',
        fontWeight: 'bold', 
        textAlign:'center',
        marginBottom: 20
    }
    const formatText2 = { 
        textAlign:'center',
        marginTop: 150,
        color: '#543A61'
    }
    const styleLogoMarca = {
        marginBottom: 20, 
        alignSelf:'center'
    }
    return (
        <>
            <View style={props.clienteOngStyle}>
                <Image 
                    source={require('../assets/img/logo-animal-care.png')} 
                    style={styleLogoMarca}
                />
                <Text style={formatText1}>Queremos saber quem é você</Text>   
                <Botao 
                    title="CLIENTE" 
                    buttonStyle={cssBtnOngCliente.buttonOngCliente} 
                    titleStyle={cssBtnOngCliente.textoOngCliente}
                />      
                <Botao title="ONG"
                    buttonStyle={cssBtnOngCliente.buttonOngCliente} 
                    titleStyle={cssBtnOngCliente.textoOngCliente}
                />
            </View>
            <Text style={formatText2}>&copy;2021 Animal Care. All Rights Reserved</Text>      
        </>
    );
}