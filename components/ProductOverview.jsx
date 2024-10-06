import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, Image, TouchableOpacity, FlatList } from "react-native";
import Counter from "./Counter";
import StarRating from "./StarRating";
import { AppContext } from "../lib/AppContext";
import styles from "../assets/style";
import Favorite from "../assets/images/icons/Favorite";
import Share from "../assets/images/icons/Share";

export default class ProductOverview extends Component {
  state = {
    count: 1,
  };

  static propTypes = {
    product: PropTypes.object.isRequired,
  };

  static contextType = AppContext;

  handleCountChange = (newCount) => {
    this.setState({ count: newCount });
  };

  componentDidUpdate(prevProps) {
    if (prevProps.product.name !== this.props.product.name) {
      this.setState({ count: 1 });
    }
  }

  render() {
    const { addProductToCart, handleOpenCart } = this.context;
    const { product } = this.props;
    const { count } = this.state;
    const Img = product.imgSrc;
    return (
      <View style={styles.row}>
        <View style={styles.productImg}>
          {product.inSale && (
            <View style={styles.saleBadge}>
              <Text style={styles.saleBadgeText}>
                {product.saleAmount * 100}% Off
              </Text>
            </View>
          )}
          <Img />
        </View>
        <View style={styles.productInfo}>
          <Text style={styles.productName}>{product.name}</Text>
          <StarRating rating={+product.rate} />
          <View style={styles.row}>
            <Text style={styles.price}>
              {product.inSale
                ? product.price - Math.floor(product.price * product.saleAmount)
                : product.price}{" "}
              EP
            </Text>
            {product.inSale && (
              <Text style={styles.textLine}>{product.price}</Text>
            )}
          </View>
          <Text style={styles.desc}>{product.desc}</Text>
          <View style={styles.addAction}>
            <Counter count={count} onCountChange={this.handleCountChange} />
            <TouchableOpacity
              style={styles.addButton} // Add a style for your button
              onPress={() => {
                addProductToCart({
                  ...product,
                  count,
                });
                handleOpenCart();
              }}
            >
              <Text style={styles.addButtonText}>Buy now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.additionalActions}>
            <FlatList
              contentContainerStyle={styles.additionalActions}
              data={[
                { icon: Favorite, text: "Add to wishlist" },
                { icon: Share, text: "Share" },
              ]}
              renderItem={({ item }) => {
                const Icon = item.icon;
                return (
                  <View style={styles.row}>
                    <View style={styles.bigCircleIcon}>
                      <Icon />
                    </View>
                    <Text>{item.text}</Text>
                  </View>
                );
              }}
              keyExtractor={(item) => item.text}
            />
          </View>
        </View>
      </View>
    );
  }
}
