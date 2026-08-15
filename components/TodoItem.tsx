import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';


export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

export interface ITodoItem {
  todo: Todo;
  updateItem: (id: string) => void;
}

export default function TodoItem({ todo, updateItem }: ITodoItem) {
  const updatedTodo = () => {
    updateItem(todo.id);
  };

  return (
    <TouchableOpacity style={styles.card} onPress={updatedTodo}>
      <Text style={styles.titleButton}>{todo.title}</Text>
      <Text style={styles.description}>
        {todo.completed
          ? "Concluída"
          : "Toque para concluir · segure para excluir"}
      </Text>

      <View style={styles.checkbox}>
        {todo.completed && (
          <Ionicons name="checkmark" size={30} color="white" />
        )}
      </View>
    </TouchableOpacity>
  );
}
