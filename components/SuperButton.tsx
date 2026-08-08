import { TouchableOpacity, Text } from "react-native";

import { styles } from "@/components/styles";
interface Props {
  title: string;
  onPress: () => void;
}

export default function SuperButton({ title, onPress }: Props) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.containerButton}>
      <Text style={styles.titleButton}>{title}</Text>
    </TouchableOpacity>
  );
}
