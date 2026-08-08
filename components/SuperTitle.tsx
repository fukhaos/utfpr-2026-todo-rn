import { Text } from "react-native";
import { styles } from "./styles";

interface Props {
  title: string;
  upperCase?: boolean;
}

export function SuperTitle(props: Props) {
  let content = props.title;

  if (props.upperCase) {
    content = content.toUpperCase();
  }

  return <Text style={styles.title}>{content}</Text>;
}

