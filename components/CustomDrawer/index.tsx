import { View, Text, Image } from "react-native";
import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { styles } from "./style";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView
      contentContainerStyle={{
        backgroundColor: "#fff",
      }}
    >
      <View style={styles.container}>
        <Image source={require("../../assets/srK.png")} />

        <Text>Bom dia, bípedes!</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
