import { createContext, useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CHAVE = '@estoque-da-roca/itens';

export const ItensContext = createContext();

export function ItensProvider({ children }) {
  const [itens, setItens] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(() => {
    async function carregar() {
      try {
        const salvo = await AsyncStorage.getItem(CHAVE);
        if (salvo != null) setItens(JSON.parse(salvo));
      } catch (e) {
        console.log('Erro ao carregar', e);
      }
      setCarregado(true);
    }
    carregar();
  }, []);

  async function adicionar(item) {
    const novos = [...itens, item];
    setItens(novos);
    await AsyncStorage.setItem(CHAVE, JSON.stringify(novos));
  }

  return (
    <ItensContext.Provider value={{ itens, adicionar, carregado }}>
      {children}
    </ItensContext.Provider>
  );
}