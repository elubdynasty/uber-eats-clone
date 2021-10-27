import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
      <View style={styles.headerContainer}>
        <HeaderButton
          text="Delivery"
          btnColor="black"
          txtColor="white"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />

        <HeaderButton
          text="Pickup"
          btnColor="white"
          txtColor="black"
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </View>
    );
}

const HeaderButton = ({ text, activeTab, setActiveTab }) => (
  <TouchableOpacity
    style={[
      styles.headerbackgroundWrapper,
      { backgroundColor: activeTab === text ? "black" : "white" },
    ]}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={[
        styles.headertextWrapper,
        { color: activeTab === text ? "white" : "black" },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    
    headerContainer: {
        flexDirection: "row",
        alignSelf: "center"
    },

    headerbackgroundWrapper: {
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
        
    },

    headertextWrapper: {
        fontSize: 15,
        fontWeight: "bold"
    }

})