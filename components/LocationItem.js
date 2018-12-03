import React, { PureComponent } from 'react';

import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default class LocationItem extends PureComponent {

  handlePlace = async () => {
    const res = await this.props.fetchDetails(this.props.place_id);
    console.log("Details:", res);
  }

  render() {
    return (
        <TouchableOpacity style={styles.container} onPress={this.handlePlace}>
          <Text>{this.props.description}</Text>
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 45,
    marginHorizontal: 30,
    borderBottomWidth: StyleSheet.hairlineWidth,
    justifyContent: 'center'
  },
});
