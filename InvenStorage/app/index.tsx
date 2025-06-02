import {
  Text,
  KeyboardAvoidingView,
  View,
  Platform,
  Image,
  Alert, // Importe Alert para exibir mensagens de erro
} from "react-native";
import { styles } from "./styles";
import { Input } from "../components/Input";
import { Button } from "../components/Button";
import { useAuth } from "../src/context/AuthContext";
import { useState } from "react";
import { useRouter } from "expo-router"; // IMPORTE useRouter AQUI

const asset = require("../assets/images/logo.png");

export default function Login() {
  const { signIn } = useAuth();
  const router = useRouter(); // USE useRouter AQUI
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async () => { // Torne a função assíncrona
    const success = await signIn(username, password);
    if (success) {
      router.replace("/(auth)/home"); // Redirecione após o sucesso do login
    } else {
      Alert.alert("Erro de Login", "Usuário ou senha inválidos."); // Use Alert para feedback ao usuário
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
      style={styles.container}
    >
      <Image style={[styles.logo, { resizeMode: "contain" }]} source={asset} />
      <View style={styles.loginBox}>
        <Text style={styles.textTitle}>Faça seu Login</Text>

        <Input
          icon="user"
          placeholder="Usuário *"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />

        <Input
          icon="key"
          placeholder="Senha *"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <Button title="Entrar" onPress={handleSignIn} />
      </View>
    </KeyboardAvoidingView>
  );
}