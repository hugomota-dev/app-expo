import { View, Text, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router"; // IMPORTE useRouter AQUI
import { styles } from "./styles";
import { useAuth } from "../../../src/context/AuthContext";

export default function MenuPrincipal() {
  const router = useRouter(); // USE useRouter AQUI
  const { signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut(); // Primeiro, remove o token
    router.replace("/"); // Depois, redireciona para a tela de login
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu Principal</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/register")}
      >
        <Text style={styles.buttonText}>Novo Cadastro</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/(auth)/search")}
      >
        <Text style={styles.buttonText}>Buscar Materiais</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.logoutButton]}
        onPress={handleSignOut} // Use a nova função assíncrona
      >
        <Text style={styles.buttonText}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}