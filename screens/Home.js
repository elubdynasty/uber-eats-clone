import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import HeaderTabs from '../components/HeaderTabs'

export default function Home() {
    return (
      <SafeAreaView style={styles.safeareacontainer}>
        <View style={styles.headertabscontainer}>
          <HeaderTabs />
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeareacontainer: {
    backgroundColor: "#eee",
    flex: 1,
  },

  headertabscontainer: {
    backgroundColor: "white",
    padding: 15
  },

});

//react native f(x) component