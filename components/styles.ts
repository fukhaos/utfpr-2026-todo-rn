import { StyleSheet } from "react-native";

export const theme = {
  background: "#0A0A0A",
  tint: "yellow",
  text: "white",
  button: "#333",
};

export const styles = StyleSheet.create({
  containerButton: {
    backgroundColor: theme.button,
    height: 60,
    width: "90%",
    margin: 16,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  titleButton: {
    fontSize: 20,
    fontWeight: "300",
    color: theme.text,
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
  },
});
