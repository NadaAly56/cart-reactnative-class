import React, { Component } from "react";import PropTypes from "prop-types";
import { View, Text } from "react-native";
import styles from "../assets/style";

class StarRating extends Component {
  render() {
    const { rating, totalStars = 5 } = this.props;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
      stars.push(
        <Text key={i} style={i <= rating ? styles.filled : styles.empty}>
          ★
        </Text>
      );
    }

    return (
      <View style={styles.starRating}>
        <Text style={styles.star}>{stars}</Text>
      </View>
    );
  }
}

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
  totalStars: PropTypes.number,
};

export default StarRating;
