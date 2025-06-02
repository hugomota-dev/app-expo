// app/(auth)/register/index.tsx
import { View, Text, StyleSheet } from "react-native"; // Adicionado StyleSheet
import { Input } from "../../../components/Input"; // Caminho relativo
import { Button } from "../../../components/Button"; // Caminho relativo
import { useState } from "react"; // Adicionado useState para gerenciar inputs

export default function CadastroScreen() {
  const [nomeMaterial, setNomeMaterial] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");

  const handleCadastrar = () => {
    alert(
      `Material Cadastrado: ${nomeMaterial}, Descrição: ${descricao}, Quantidade: ${quantidade}`
    );
    // Aqui você integraria a lógica de salvar no backend/storage
    // Limpar os campos após o cadastro
    setNomeMaterial("");
    setDescricao("");
    setQuantidade("");
  };

  return (
    <View style={styles.container}>
      {" "}
      {/* Usando styles */}
      <Text style={styles.title}>Cadastro de Material</Text>
      <Input
        placeholder="Nome do Material"
        value={nomeMaterial}
        onChangeText={setNomeMaterial}
        icon={"box"}
      />
      <Input
        placeholder="Descrição"
        value={descricao}
        onChangeText={setDescricao}
        icon={"box"}
      />
      <Input
        placeholder="Quantidade"
        keyboardType="numeric"
        value={quantidade}
        onChangeText={setQuantidade}
        icon={"box"}
      />
      <Button title="Cadastrar" onPress={handleCadastrar} />
    </View>
  );
}

// Styles para o CadastroScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20, // Padding mais consistente
    gap: 15, // Espaçamento entre os inputs e botão
    alignItems: "center", // Centraliza os itens horizontalmente
  },
  title: {
    fontSize: 24, // Tamanho de fonte maior para o título
    fontWeight: "bold",
    marginBottom: 20, // Mais espaço abaixo do título
  },
});
