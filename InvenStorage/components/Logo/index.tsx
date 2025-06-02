import { Image, ImageProps } from "react-native"; // Adicione StyleSheet e ImageProps
import { styles } from "./styles"; // Assumindo que 'styles.ts' está na mesma pasta do componente

// Defina as props para o componente Logo, estendendo ImageProps
type LogoProps = ImageProps & {
  // Você pode adicionar props específicas aqui se precisar
};

// Renomeado para 'Logo' para maior clareza e consistência
export function Logo({ source, style, ...rest }: LogoProps) {
  return (
    <Image
      style={[styles.logo, style, { resizeMode: "contain" }]} // Permite que estilos externos sejam aplicados
      source={source} // A fonte da imagem agora é uma prop
      {...rest}
    />
  );
}