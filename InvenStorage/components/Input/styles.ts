import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row", // Ícone e input na mesma linha
    alignItems: "center",
    backgroundColor: "#F0F0F0", // Cor de fundo do input
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 10,
    marginBottom: 10, // Espaçamento entre inputs
    width: "80%", // Largura padrão para o input (ajuste conforme a necessidade)
    borderWidth: 1,
    borderColor: "#E0E0E0", // Borda sutil
  },
  input: {
    flex: 1, // Faz o TextInput preencher o espaço restante
    fontSize: 16,
    paddingLeft: 10, // Espaço entre o ícone e o texto
    color: "#333333",
  },
});