import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { DrawerContentScrollView } from "@react-navigation/drawer";
import ProductsIcon from "../assets/images/icons/Products";
import BestSellerIcon from "../assets/images/icons/BestSeller";
import NewArrivalIcon from "../assets/images/icons/NewArrival";
import ContactIcon from "../assets/images/icons/ContactUs";

const CustomDrawerContent = ({ navigation }) => {
  return (
    <DrawerContentScrollView style={styles.drawerContainer}>
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("Products")}
      >
        <ProductsIcon style={styles.icon} />
        <Text style={styles.menuText}>Products</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("BestSeller")}
      >
        <BestSellerIcon style={styles.icon} />
        <Text style={styles.menuText}>Best Seller</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("NewArrival")}
      >
        <NewArrivalIcon style={styles.icon} />
        <Text style={styles.menuText}>New Arrival</Text>
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        style={styles.menuItem}
        onPress={() => navigation.navigate("ContactUs")}
      >
        <ContactIcon style={styles.icon} />
        <Text style={styles.menuText}>Contact Us</Text>
      </TouchableOpacity>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 0,
    backgroundColor: "#EEEDED",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 30,
    paddingHorizontal: 40,
  },
  icon: {},
  menuText: {
    fontSize: 18,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#000",
  },
});

export default CustomDrawerContent;
