import { useContext } from 'react';
import { View, Text } from 'react-native';
import { ItensContext } from '../context/ItensContext';
import { falta, textoCompra } from '../utils/estoque';
import styles from '../styles';

export default function Detalhe({ route }) {
  const { itens } = useContext(ItensContext);
  const item = itens.find((i) => i.id === route.params.id);

  if (!item) {
    return <View style={styles.tela}><Text>Item não encontrado.</Text></View>;
  }

  return (
    <View style={styles.tela}>
      <Text style={styles.titulo}>{item.nome}</Text>
      <Text>Em estoque: {item.estoque} {item.unidade}</Text>
      <Text>Planejado: {item.planejado} {item.unidade}</Text>
      <Text>Local: {item.local || 'Não informado'}</Text>
      <Text style={falta(item) > 0 ? styles.comprar : styles.ok}>{textoCompra(item)}</Text>
    </View>
  );
}