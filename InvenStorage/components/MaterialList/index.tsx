import { FlatList, Text, View, StyleSheet } from 'react-native';

const mockMateriais = [
  { id: '1', nome: 'Mouse', descricao: 'Mouse sem fio' },
  { id: '2', nome: 'Teclado', descricao: 'Teclado mecânico' },
  { id: '3', nome: 'Monitor', descricao: 'Monitor ultrawide 27 polegadas' },
  { id: '4', nome: 'Webcam', descricao: 'Webcam HD para reuniões' },
  { id: '5', nome: 'Microfone', descricao: 'Microfone condensador USB' },
];

export default function MaterialList() {
  return (
    <FlatList
      data={mockMateriais}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.nome}>{item.nome}</Text>
          <Text>{item.descricao}</Text>
        </View>
      )}
      ListEmptyComponent={() => (
        <Text style={styles.emptyText}>Nenhum material encontrado.</Text>
      )} // Adicionado para quando a lista estiver vazia
    />
  );
}

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f1f1f1',
    padding: 16,
    marginBottom: 12,
    borderRadius: 8,
  },
  nome: { fontWeight: 'bold', fontSize: 16 },
  emptyText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
  },
});