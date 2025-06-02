import { View, Text, StyleSheet } from 'react-native'; // Adicionado StyleSheet
import MaterialList from '@/components/MaterialList'; // Caminho relativo
import { Input } from '@/components/Input'; // Adicionado para um campo de busca
import { useState } from 'react'; // Adicionado para gerenciar o termo de busca

export default function BuscaScreen() {
  const [searchTerm, setSearchTerm] = useState('');

  // A lógica de filtragem da MaterialList baseada no searchTerm seria implementada aqui
  // Por agora, o MaterialList ainda usa dados mockados.

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Buscar Materiais</Text>
      <Input
        icon="search" // Ícone para o campo de busca
        placeholder="Digite o nome do material"
        value={searchTerm}
        onChangeText={setSearchTerm}
      />
      <MaterialList />
    </View>
  );
}

// Styles para o BuscaScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    gap: 15, // Espaçamento entre o input e a lista
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center', // Centraliza o título
  },
});