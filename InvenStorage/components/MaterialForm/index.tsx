import { View, TextInput, Button, StyleSheet } from 'react-native';
import { useState } from 'react';

export default function MaterialForm() {
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');

  const handleSalvar = () => {
    console.log('Salvo:', { nome, descricao });
    // Lógica para salvar os dados (API, contexto, etc.)
    // Limpar os campos após salvar
    setNome('');
    setDescricao('');
    alert('Material salvo com sucesso!');
  };

  return (
    <View>
      <TextInput
        style={styles.input}
        placeholder="Nome do material"
        value={nome}
        onChangeText={setNome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
      />
      <Button title="Salvar" onPress={handleSalvar} />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    borderColor: '#ccc',
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderRadius: 6,
  },
});