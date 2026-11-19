import { useContext, useState } from 'react';
import { View, Text, TextInput, Button, TouchableOpacity } from 'react-native';
import { ItensContext } from '../context/ItensContext';
import { paraNumero } from '../utils/estoque';
import styles from '../styles';

const UNIDADES = ['kg', 'L', 'un.'];

export default function Cadastro({ navigation }) {
  const { adicionar } = useContext(ItensContext);
  const [nome, setNome] = useState('');
  const [unidade, setUnidade] = useState('kg');
  const [estoque, setEstoque] = useState('');
  const [planejado, setPlanejado] = useState('');
  const [local, setLocal] = useState('');
  const [erro, setErro] = useState('');

  async function salvar() {
    const e = paraNumero(estoque);
    const p = paraNumero(planejado);
    if (nome.trim() === '') return setErro('Informe o nome do item.');
    if (isNaN(e) || e < 0) return setErro('Informe um estoque válido (0 ou mais).');
    if (isNaN(p) || p < 0) return setErro('Informe uma quantidade planejada válida (0 ou mais).');

    await adicionar({
      id: Date.now().toString(),
      nome: nome.trim(),
      unidade,
      estoque: e,
      planejado: p,
      local: local.trim(),
    });
    navigation.goBack();
  }

  return (
    <View style={styles.tela}>
      <TextInput style={styles.input} placeholder="Nome do item (ex.: Sementes de feijão)" value={nome} onChangeText={setNome} />
      <View style={styles.linha}>
        {UNIDADES.map((u) => (
          <TouchableOpacity key={u} style={[styles.chip, unidade === u && styles.chipAtivo]} onPress={() => setUnidade(u)}>
            <Text style={unidade === u && styles.chipTextoAtivo}>{u}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <TextInput style={styles.input} placeholder={`Quantidade em estoque (${unidade})`} value={estoque} onChangeText={setEstoque} keyboardType="decimal-pad" />
      <TextInput style={styles.input} placeholder={`Planejado para o cultivo (${unidade})`} value={planejado} onChangeText={setPlanejado} keyboardType="decimal-pad" />
      <TextInput style={styles.input} placeholder="Local no armazém (opcional)" value={local} onChangeText={setLocal} />
      {erro !== '' && <Text style={styles.erro}>{erro}</Text>}
      <Button title="Salvar" onPress={salvar} />
    </View>
  );
}