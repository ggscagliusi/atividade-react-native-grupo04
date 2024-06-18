import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import Botao from "../../components/Botao";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Botao
        onPress={() => navigation.jumpTo("Ajuda")}
        title={"Você precisa de ajuda?"}
      />
    </View>
  );
}
