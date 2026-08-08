import { View, Text } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function TodoItem() {
  return (
    <View style={styles.card}>
      <Text style={styles.titleButton}>Comprar arroz</Text>
      <Text style={styles.description}>subtitulo</Text>

      <View style={styles.checkbox}>
        <Ionicons name="checkmark" size={30} color="white" />
      </View>
    </View>
  );
}
