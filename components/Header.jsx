import React, { Component } from "react";import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import Menu from "../assets/images/icons/Menu";
import Search from "../assets/images/icons/Search";
import User from "../assets/images/icons/User";
import BrandLogo from "../assets/images/Brand";
import CartComp from "../components/Cart";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cartCount: "0",
    };
  }

  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.headerContainer}>
        <View style={styles.logo}>
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Menu />
          </TouchableOpacity>
          <BrandLogo />
        </View>

        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.circleIcon}>
            <Search />
          </TouchableOpacity>
          <CartComp />
          <TouchableOpacity style={styles.circleIcon}>
            <User />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    backgroundColor: "white",
    height: 60,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  logo: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    gap: 10,
  },
  iconContainer: {
    flexDirection: "row",
  },
  iconButton: {
    marginHorizontal: 10,
  },
  badge: {
    position: "absolute",
    right: 0,
    top: -4,
    backgroundColor: "red",
    borderRadius: 10,
    width: 16,
    height: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontSize: 10,
  },
  circleIcon: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#fafafa",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});

export default Header;
