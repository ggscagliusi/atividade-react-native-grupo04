import { View, Text, Linking } from "react-native";
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

      <Botao
        onPress={() =>
          Linking.openURL("https://www.youtube.com/watch?v=88JllShOMl8")
        }
        title={"Conheça o sr.K"}
      />

      <Botao
        onPress={() => Linking.openURL("Contato")}
        title={"Teste do link pra telas"}
      />
    </View>
  );
}
