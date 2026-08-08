import { styles } from "@/components/styles";
import SuperButton from "@/components/SuperButton";
import SuperInput from "@/components/SuperTextInput";
import { SuperTitle } from "@/components/SuperTitle";
import { View } from "react-native";
import { useState } from "react";

export default function Index() {
  const [newItem, setNewItem] = useState("");

  return (
    <View style={styles.container}>
      <SuperTitle title="Lista de compras"></SuperTitle>
      <SuperInput value={newItem} onChangeText={setNewItem} />
      <SuperButton title="novo item" />

      <SuperTitle title={newItem}></SuperTitle>
    </View>
  );
}
