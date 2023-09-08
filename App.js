//import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ClienteONG from './views/cliente-ong';
import TelaLogin from './views/login-usuario';
import { useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { authentication } from './src/firebase/config';

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(authentication, (authUser) => {
      setUser(authUser); // Atualize o estado do usuário com o objeto authUser
    });
    // Limpa o efeito quando o componente é desmontado
    return () => unsubscribe();
  }, []);

  return (
      <View style={styles.container}>
        <View>
          {user?<ClienteONG clienteOngStyle={styles.clienteONG}/> : <TelaLogin/>}
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  clienteONG:{
    justifyContent:'center',
    textAlign: 'center',
    width: 400,
    height: 400,
    backgroundColor: '#A074B5',
    borderRadius: 5
  }
})