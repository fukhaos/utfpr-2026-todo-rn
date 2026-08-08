import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export interface ITodoItem {
  id: string;
  title: string;
  completed: boolean;
}

export default function TodoItem({ title }: ITodoItem) {
  return (
    <TouchableOpacity style={styles.card}>
      <Text style={styles.titleButton}>{title}</Text>
      <Text style={styles.description}>subtitulo</Text>

      <View style={styles.checkbox}>
        <Ionicons name="checkmark" size={30} color="white" />
      </View>
    </TouchableOpacity>
  );
}
