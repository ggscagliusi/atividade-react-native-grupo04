import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Contato from "../screens/Contato";
import Sobre from "../screens/Sobre";
import Ajuda from "../screens/Ajuda";
import CustomDrawer from "../components/CustomDrawer";

export const Rotas = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerActiveBackgroundColor: "#b2b2b2",
        drawerInactiveBackgroundColor: "#fafaf2",
        drawerInactiveTintColor: "#000",
        drawerActiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Contato" component={Contato} />
      <Drawer.Screen name="Sobre" component={Sobre} />
      <Drawer.Screen name="Ajuda" component={Ajuda} />
    </Drawer.Navigator>
  );
};
