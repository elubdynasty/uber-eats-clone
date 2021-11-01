import React from 'react'
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import RestaurantItem from '../components/RestaurantItem'

export default function Home() {
    return (
      <SafeAreaView style={styles.safeareaContainer}>

        <View style={styles.headertabsContainer}>
          <HeaderTabs />
          <SearchBar searchviewContainer={styles.searchviewContainer} />
        </View>

        <ScrollView showsVerticalScrollIndicator={false}>
          <Categories />
          <RestaurantItem />
        </ScrollView>
        
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
  safeareaContainer: {
    backgroundColor: "#eee",
    flex: 1,
  },

  headertabsContainer: {
    backgroundColor: "white",
    padding: 15,
  },

  searchviewContainer: {
    marginTop: 15,
    flexDirection: "row"
  },
});