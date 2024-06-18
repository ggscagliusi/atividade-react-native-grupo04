import { View, Text } from "react-native";
import React from "react";
import { styles } from "./style";
import Botao from "../../components/Botao/index";
import { useNavigation } from "@react-navigation/native";

export default function Contato() {
  const navigation = useNavigation;
  return (
    <View style={styles.container}>
      <Botao
        onPress={() => navigation.jumpTo("Sobre")}
        title={"Quer saber sobre nós?"}
      />
    </View>
  );
}
