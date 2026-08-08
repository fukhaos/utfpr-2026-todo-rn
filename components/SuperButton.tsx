import { TouchableOpacity, Text } from "react-native";
import { styles } from "@/components/styles";

interface ISuperButton {
  title: string;
  onPress?: () => void;
}

/**
 * Principal botão do app
 * @param title Titulo do botão
 * @param onPress acao do botão do clicado
 * @returns Um super botão
 */

export default function SuperButton({ title, onPress }: ISuperButton) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerButton}>
      <Text style={styles.titleButton}>{title}</Text>
    </TouchableOpacity>
  );
}
