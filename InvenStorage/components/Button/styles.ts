import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  button: {
    backgroundColor: "#007AFF", // Azul padrão iOS (você pode ajustar a cor)
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    width: "80%", // Largura padrão para o botão (ajuste conforme a necessidade)
    marginTop: 10, // Pequena margem superior para espaçamento
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
  },
});