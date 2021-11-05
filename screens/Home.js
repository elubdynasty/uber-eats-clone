import React, {useState, useEffect} from "react";
import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import { YELP_API_KEY } from "@env";

import Categories from '../components/Categories';
import HeaderTabs from '../components/HeaderTabs'
import SearchBar from '../components/SearchBar';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems'  

export default function Home() {

  const [restaurantData, setrestaurantData] = useState(localRestaurants);
  const [city, setCity] = useState("Union City")
  const [activeTab, setActiveTab] = useState("Delivery");

  const getRestaurantsFromYelp = async () => {
    const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
  
    const apiOptions = {
      headers: {
        Authorization: `Bearer ${YELP_API_KEY}`,
      },
    }

    const res = await fetch(yelpUrl, apiOptions);
    const data = await res.json();
    return setrestaurantData(data.businesses);
  }


 useEffect(() => {
  getRestaurantsFromYelp()
 }, [city]) 

  return (
    <SafeAreaView style={styles.safeareaContainer}>
      <View style={styles.headertabsContainer}>
        <HeaderTabs />
        <SearchBar
          searchviewContainer={styles.searchviewContainer}
          cityHandler={setCity}
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Categories />
        <RestaurantItems restaurantData={restaurantData} />
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