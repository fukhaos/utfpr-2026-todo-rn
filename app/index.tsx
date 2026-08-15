import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import SuperInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import { ScrollView } from "react-native";
import { useState } from "react";
import TodoItem, { Todo } from "@/components/TodoItem";

export default function Index() {
  const [newItem, setNewItem] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const addItem = () => {
    if (newItem.length < 4) return;

    const item: Todo = {
      id: Date.now().toString(),
      title: newItem,
      completed: false,
    };

    //todos.push(newItem); imutavel não permite
    setTodos([item, ...todos]);

    //limpo campo
    setNewItem("");
  }

  const updateItem = (id: string) => {
    setTodos((todos) =>
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteItem = (id: string) => {
    setTodos((todos) => todos.filter((todo) => todo.id !== id));
  };

  return (
    <ScrollView style={styles.container}>
      <SuperTitle title="Lista de compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" onPress={addItem} />

      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo?.id}
            todo={todo}
            updateItem={updateItem}
            deleteItem={deleteItem}
          />
        );
      })}
    </ScrollView>
  );
}
