import React, { Component } from "react";
import { View, Text } from "react-native";
import PropTypes from "prop-types";
import styles from "../assets/style";
export default class BreadCrumbs extends Component {
  static propTypes = {
    list: PropTypes.array.isRequired, // Marking list as required
  };

  render() {
    return (
      <View style={styles.breadcrumbContainer}>
        <View style={styles.container}>
          <View style={styles.breadcrumb}>
            {this.props.list.map((crumb, index) => (
              <Text key={crumb.name} style={styles.crumb}>
                {crumb.name}
                {index < this.props.list.length - 1 && (
                  <Text style={styles.separator}> / </Text>
                )}{" "}
                {/* Separator */}
              </Text>
            ))}
          </View>
        </View>
      </View>
    );
  }
}
