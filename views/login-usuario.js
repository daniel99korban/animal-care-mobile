import React from 'react'
import {View, Text, Image, StyleSheet, TextInput} from 'react-native';

export default function TelaLogin(props){
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