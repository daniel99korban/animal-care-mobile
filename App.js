import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ClienteONG from './views/cliente-ong';
import TelaLogin from './views/login-usuario';

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        {/* <ClienteONG clienteOngStyle={styles.clienteONG}/> */}
        <TelaLogin/>
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