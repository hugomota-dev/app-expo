import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token: string) {
  try {
    await AsyncStorage.setItem('@app:token', token);
  } catch (error) {
    console.error('Erro ao salvar token', error);
  }
}

export async function getToken(): Promise<string | null> {
  try {
    return await AsyncStorage.getItem('@app:token');
  } catch (error) {
    console.error('Erro ao recuperar token', error);
    return null;
  }
}

export async function removeToken() {
  try {
    await AsyncStorage.removeItem('@app:token');
  } catch (error) {
    console.error('Erro ao remover token', error);
  }
}