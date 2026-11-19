import { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';
import styles from '../styles';

export default function Login({ navigation }) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');

  function entrar() {
    if (usuario === 'produtor' && senha === '123456') {
      setErro('');
      navigation.replace('Armazem');
    } else {
      setErro('Usuário ou senha inválidos.');
    }
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>Estoque da Roça</Text>
      <TextInput style={styles.input} placeholder="Usuário" value={usuario} onChangeText={setUsuario} autoCapitalize="none" />
      <TextInput style={styles.input} placeholder="Senha" value={senha} onChangeText={setSenha} secureTextEntry />
      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
      <Button title="Entrar" onPress={entrar} />
    </View>
  );
}