import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  tela: { flex: 1, padding: 20, gap: 10, justifyContent: 'center' },
  telaLista: { flex: 1, padding: 20, gap: 10 },
  titulo: { fontSize: 24, fontWeight: 'bold' },
  input: { borderWidth: 1, borderColor: '#999', borderRadius: 6, padding: 10 },
  card: { borderWidth: 1, borderColor: '#ccc', borderRadius: 8, padding: 12, marginBottom: 10 },
  nome: { fontSize: 18, fontWeight: 'bold' },
  erro: { color: '#c62828' },
  comprar: { color: '#c62828', fontWeight: 'bold', fontSize: 16 },
  ok: { color: '#2e7d32', fontWeight: 'bold', fontSize: 16 },
  linha: { flexDirection: 'row', gap: 8 },
  chip: { borderWidth: 1, borderColor: '#999', borderRadius: 16, paddingVertical: 6, paddingHorizontal: 14 },
  chipAtivo: { backgroundColor: '#2e7d32', borderColor: '#2e7d32' },
  chipTextoAtivo: { color: '#fff' },
});