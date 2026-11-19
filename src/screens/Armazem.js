import { useContext } from 'react';
import { View, Text, Button, FlatList, TouchableOpacity } from 'react-native';
import { ItensContext } from '../context/ItensContext';
import { falta, textoCompra } from '../utils/estoque';
import styles from '../styles';

export default function Armazem({ navigation }) {
  const { itens, carregado } = useContext(ItensContext);

  if (!carregado) {
    return <View style={styles.tela}><Text>Carregando...</Text></View>;
  }

  return (
    <View style={styles.telaLista}>
      <FlatList
        data={itens}
        keyExtractor={(i) => i.id}
        ListEmptyComponent={<Text>Nenhum item cadastrado.</Text>}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Detalhe', { id: item.id })}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text>{item.estoque} {item.unidade} em estoque</Text>
            <Text style={falta(item) > 0 ? styles.comprar : styles.ok}>{textoCompra(item)}</Text>
          </TouchableOpacity>
        )}
      />
      <Button title="Novo item" onPress={() => navigation.navigate('Cadastro')} />
    </View>
  );
}