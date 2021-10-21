import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs() {
    return (
      <View style={styles.headercontainer}>
        <HeaderButton text="Delivery" />
        <HeaderButton text="Pickup" />
      </View>
    );
}

const HeaderButton = ({ text }) => (
  <TouchableOpacity style={styles.headerbackground}>
    <Text style={styles.headertext}>{text}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    
    headercontainer: {
        flexDirection: "row",
        alignSelf: "center"
    },

    headerbackground: {
        backgroundColor: "black"
    },

    headertext: {
        color: "white"
    }

})