import SuperButton from "@/components/SuperButton";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <SuperButton title="novo item" />
    </View>
  );
}
