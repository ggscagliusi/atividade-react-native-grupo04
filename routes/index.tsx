import { View, Text } from "react-native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../screens/Home";
import Contato from "../screens/Contato";
import Sobre from "../screens/Sobre";
import Ajuda from "../screens/Ajuda";
import CustomDrawer from "../components/CustomDrawer";
import Feather from "react-native-vector-icons/Feather";

export const Rotas = () => {
  const Drawer = createDrawerNavigator();

  return (
    <Drawer.Navigator
      drawerContent={CustomDrawer}
      screenOptions={{
        drawerStyle: { width: 200, shadowColor: "#000", shadowRadius: 5 },
        drawerActiveBackgroundColor: "#b2b2b2",
        drawerInactiveBackgroundColor: "#fafaf2",
        drawerInactiveTintColor: "#000",
        drawerActiveTintColor: "#fff",
      }}
    >
      <Drawer.Screen
        name="Home"
        component={Home}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Feather name="home" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Contato"
        component={Contato}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Feather name="phone" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Sobre"
        component={Sobre}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Feather name="info" color={color} size={size} />;
          },
        }}
      />
      <Drawer.Screen
        name="Ajuda"
        component={Ajuda}
        options={{
          drawerIcon: ({ color, size }) => {
            return <Feather name="help-circle" color={color} size={size} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};
