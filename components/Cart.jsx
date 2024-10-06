import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { AppContext } from "../lib/AppContext";
import styles from "../assets/style"; // Make sure the path to your styles file is correct
import Cart from "../assets/images/icons/Cart";
import Trash from "../assets/images/icons/Trash";

export default class CartComp extends Component {
  static contextType = AppContext;

  render() {
    const {
      products,
      productsCount,
      removeProductFromCart,
      isCartOpen,
      handleOpenCart,
      handleCloseCart,
    } = this.context;

    const subTotal = products.reduce(
      (acc, current) =>
        acc +
        (current.inSale
          ? current.price - Math.floor(current.price * current.saleAmount)
          : current.price) *
          (current.count ?? 1),
      0
    );

    return (
      <>
        {/* {isCartOpen && <View style={styles.overlay} />} */}

        <TouchableOpacity onPress={handleOpenCart} style={styles.circleIcon}>
          <View style={styles.cartBadge}>
            <Text style={styles.cartBadgeText}>{productsCount}</Text>
          </View>
          <Cart />
          {isCartOpen && (
            <View style={styles.cartCard}>
              <View style={[styles.row, styles.cartHeader]}>
                <Text style={styles.cartTitle}>My Cart ({productsCount})</Text>
                <TouchableOpacity onPress={handleCloseCart}>
                  <Text style={styles.cartTitle}>✖</Text>
                </TouchableOpacity>
              </View>

              {productsCount === 0 ? (
                <View style={styles.emptyCart}>
                  <Text>Cart is empty.</Text>
                </View>
              ) : (
                <>
                  <FlatList
                    data={products}
                    keyExtractor={(item) => item.name}
                    renderItem={({ item: product }) => (
                      <View style={styles.cartProduct}>
                        <View style={styles.productInfo}>
                          <View>
                            <Text style={styles.productName}>
                              {product.name}
                            </Text>
                            <Text style={styles.price}>
                              {product.inSale
                                ? product.price -
                                  Math.floor(product.price * product.saleAmount)
                                : product.price}{" "}
                              EGP
                              {product.count > 1 && (
                                <Text> X {product.count}</Text>
                              )}
                            </Text>
                          </View>
                        </View>
                        <TouchableOpacity
                          onPress={() => removeProductFromCart(product.id)}
                        >
                          <Trash />
                        </TouchableOpacity>
                      </View>
                    )}
                  />

                  <View style={styles.subTotal}>
                    <Text>Subtotal</Text>
                    <Text style={styles.total}>{subTotal} EGP</Text>
                  </View>

                  <TouchableOpacity style={styles.cartButton}>
                    <Text style={styles.cartButtonText}>Go to Cart</Text>
                  </TouchableOpacity>
                </>
              )}
            </View>
          )}
        </TouchableOpacity>
      </>
    );
  }
}
