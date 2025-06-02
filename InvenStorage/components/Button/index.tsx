import { TouchableOpacity, Text, TouchableOpacityProps } from "react-native";
import { styles } from "./styles"; // Assumindo que 'styles.ts' está na mesma pasta do componente

type Props = TouchableOpacityProps & {
  title: string;
};

export function Button({ title, ...rest }: Props) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}