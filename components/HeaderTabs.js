import React, { useState } from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function HeaderTabs() {

    const [activeTab, setActiveTab] = useState("Delivery")

    return (
      <View style={styles.headercontainer}>
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

const HeaderButton = ({
  text,
  activeTab,
  setActiveTab,
}) => (
  <TouchableOpacity
    style={[
      styles.headerbackground,
      { backgroundColor: activeTab === text ? "black" : "white" },
    ]}
    onPress={() => setActiveTab(text)}
  >
    <Text
      style={[
        styles.headertext,
        { color: activeTab === text ? "white" : "black" },
      ]}
    >
      {text}
    </Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
    
    headercontainer: {
        flexDirection: "row",
        alignSelf: "center"
    },

    headerbackground: {
        marginTop: 30,
        paddingVertical: 6,
        paddingHorizontal: 16,
        borderRadius: 30
        
    },

    headertext: {
        fontSize: 15,
        fontWeight: "bold"
    }

})