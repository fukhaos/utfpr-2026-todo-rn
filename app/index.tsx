import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import SuperInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import { ScrollView } from "react-native";
import { useState } from "react";
import TodoItem, { ITodoItem } from "@/components/TodoItem";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<ITodoItem[]>([]);

  const addItem = () => {
    const item: ITodoItem = {
      id: new Date().toString(),
      title: newItem,
      completed: false,
    };

    //todos.push(newItem); imutavel não permite
    setTodos([item, ...todos]);

    //limpo campo
    setNewItem("");
  }

  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Lista de compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={addItem} />

      {todos.map((todo) => {
        return <TodoItem title={todo.title} />;
      })}
    </ScrollView>
  );
}
