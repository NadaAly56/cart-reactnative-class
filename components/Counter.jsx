import React, { Component } from "react";
import PropTypes from "prop-types";
import { View, Text, TouchableOpacity } from "react-native";
import styles from "../assets/style";

export default class Counter extends Component {
  static propTypes = {
    onCountChange: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
  };

  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    this.props.onCountChange(this.props.count + 1);
  }

  decrement() {
    if (this.props.count > 1) {
      this.props.onCountChange(this.props.count - 1);
    }
  }

  render() {
    return (
      <View style={styles.counter}>
        <TouchableOpacity
          style={this.props.count <= 1 ? styles.disabled : styles.pointer}
          onPress={this.decrement}
          disabled={this.props.count <= 1}
        >
          <Text style={styles.counterText}>-</Text>
        </TouchableOpacity>
        <Text style={styles.counterText}>{this.props.count}</Text>
        <TouchableOpacity style={styles.pointer} onPress={this.increment}>
          <Text style={styles.counterText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
