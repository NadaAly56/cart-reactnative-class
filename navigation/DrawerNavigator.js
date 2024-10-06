import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screens/HomeScreen";
import BestSellerScreen from "../screens/BestSellerScreen";
import NewArrivalScreen from "../screens/NewArrivalScreen";
import ContactUsScreen from "../screens/ContactUsScreen";
import Header from "../components/Header";
import DrawerSideBar from "../components/Drawer"; // Adjust the import path as needed

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      drawerContent={(props) => <DrawerSideBar {...props} />} // Use custom drawer
      screenOptions={{
        header: ({ navigation }) => <Header navigation={navigation} />,
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Products" component={HomeScreen} />
      <Drawer.Screen name="BestSeller" component={BestSellerScreen} />
      <Drawer.Screen name="NewArrival" component={NewArrivalScreen} />
      <Drawer.Screen name="ContactUs" component={ContactUsScreen} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
