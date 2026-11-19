import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ItensProvider } from './src/context/ItensContext';
import Login from './src/screens/Login';
import Armazem from './src/screens/Armazem';
import Cadastro from './src/screens/Cadastro';
import Detalhe from './src/screens/Detalhe';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <ItensProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Login">
          <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
          <Stack.Screen name="Armazem" component={Armazem} options={{ title: 'Meu armazém', headerBackVisible: false }} />
          <Stack.Screen name="Cadastro" component={Cadastro} options={{ title: 'Novo item' }} />
          <Stack.Screen name="Detalhe" component={Detalhe} options={{ title: 'Detalhe do item' }} />
        </Stack.Navigator>
      </NavigationContainer>
    </ItensProvider>
  );
}