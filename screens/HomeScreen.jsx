import { Component } from "react";import { View, SafeAreaView, StyleSheet } from "react-native";
import BreadCrumbs from "../components/BreadCrumbs";
import ProductOverview from "../components/ProductOverview";
// import Carousel from "../components/Carousel";
import { AppContext } from "../lib/AppContext";
import styles from "../assets/style";

class ProductDetails extends Component {
  static contextType = AppContext;

  render() {
    const breadcrumbsData = [
      { name: "Home" },
      { name: "Products" },
      { name: "POS" },
      { name: "Name Of Product" },
    ];
    const { currentProduct } = this.context;

    return (
      <SafeAreaView contentContainerStyle={styles.bodyContainer}>
        <BreadCrumbs list={breadcrumbsData} />
        <View style={styles.container}>
          <ProductOverview product={currentProduct} />
        </View>
      </SafeAreaView>
    );
  }
}

export default ProductDetails;
