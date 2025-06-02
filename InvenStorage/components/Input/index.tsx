// components/Input/index.tsx
import { TextInput, View, TextInputProps } from "react-native"; // Adicione TextInputProps
import { Feather } from "@expo/vector-icons";
import { styles } from "./styles"; // Assumindo que 'styles.ts' está na mesma pasta do componente

// Estenda TextInputProps para ter acesso a todas as props nativas do TextInput
type Props = TextInputProps & {
  icon: keyof typeof Feather.glyphMap;
  placeholder?: string;
  // secureTextEntry?: boolean; // Já incluído em TextInputProps
  // value?: string; // Já incluído em TextInputProps
  // keyboardType?: string; // Já incluído em TextInputProps
  // onChangeText?: (text: string) => void; // Já incluído em TextInputProps
};

export function Input({
  icon,
  placeholder,
  // Remova as props que já são do TextInputProps
  // secureTextEntry, value, keyboardType, onChangeText,
  ...rest // Coleta todas as outras props e passa para o TextInput
}: Props) {
  return (
    <View style={styles.inputContainer}>
      <View>
        <Feather name={icon} size={24} color={"black"} />
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        {...rest} // Passa todas as props restantes para o TextInput
      />
    </View>
  );
}