import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    gap: 15, // Adicionado gap para espaçamento entre os botões
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#007AFF", // Cor azul padrão iOS
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    width: "80%", // Ocupa 80% da largura
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  logoutButton: {
    backgroundColor: "#DC3545", // Cor vermelha para logout
    marginTop: 20, // Margem superior para separar dos outros botões
  },
});