import { View, Text, Button, Pressable } from "react-native";
import React from "react";
import { styles } from "./style";

export default function Botao({ onPress, title }) {
  return (
    <Pressable style={styles.botaoEstilo} onPress={onPress}>
      <Text>{title}</Text>
    </Pressable>
  );
}
