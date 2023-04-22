import React from 'react'
import {Button} from 'react-native-elements';

export default function Botao(props){
    return (
        <Button
            title={props.title}
            buttonStyle={props.buttonStyle} 
            titleStyle={props.titleStyle}
        />      
    );
}