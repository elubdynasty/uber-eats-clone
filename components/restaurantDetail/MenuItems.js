import React from "react";
import { View, Text, StyleSheet, Image, ScrollView } from "react-native";
import { Divider } from "react-native-elements";

const foods = [
  {
    title: "Pour House Fries",
    description: "Served with ketchup.",

    price: "$6.95",
    image:
      "https://houseofnasheats.com/wp-content/uploads/2019/07/Homemade-French-Fries-22.jpg",
  },
  {
    title: "Pour House Spicy Seasoning Fries",
    description: "Served with ketchup.",

    price: "$7.95",
    image:
      "https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/03/08/bcb87bba-8350-43fe-9046-9a00bcc0a56c_9abfc6c6.jpg",
  },
  {
    title: "Hot Mess Fries",
    description:
      "Topped with melted American cheese, minced meat, buffalo hot sauce and ranch sauce. Sauce substitutions available (Ketchup, Thousand Island, Tzatziki).",

    price: "$9.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/e562441c-f839-418b-b6d9-3546077f78aa.jpeg",
  },
  {
    title: "Slider Trio",
    description:
      "Lamb or beef Angus patty charbroiled in low heat. Served with American cheese, grilled onion, and sliced jalapenos.",

    price: "$10.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/729eca4a-80d1-47a7-9ca0-d3d00303013b.jpeg",
  },

  {
    title: "Veggie Slider Trio",
    description:
      "Veggie patty charbroiled in low heat. Served with American cheese, grilled onion, and sliced jalapenos.",

    price: "$8.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/729eca4a-80d1-47a7-9ca0-d3d00303013b.jpeg",
  },
  {
    title: "Spinach Stuffed Mushroom (Veg)",
    description:
      "Stuffed Portobello with spinach, paneer (curd cheese), herbs, and glazed with garlic olive oil.",

    price: "$8.95",
    image:
      "https://d1ralsognjng37.cloudfront.net/e92f860e-2a1d-4b85-b794-a9d26faf364f.jpeg",
  },
];

const MenuItems = () => {

    return (
      <ScrollView showsVerticalScrollIndicator={false}>
        {foods.map((menuItem, index) => (
          <View key={index}>
            <View style={styles.menuItemStyle}>
              <FoodInfo food={menuItem} />
              <FoodImage food={menuItem} />
            </View>
            <Divider width={0.5} orientation="vertical" />
          </View>
        ))}
      </ScrollView>
    );

}

const FoodInfo = ({ food }) => (
  <View style={{
    width: 240,
    justifyContent: "space-evenly"
  }}>
    <Text style={styles.titleStyle}>{food.title}</Text>
    <Text>{food.description}</Text>
    <Text>{food.price}</Text>
  </View>
);


const FoodImage = ({ food }) => (
  <View>
    <Image
      source={{ uri: food.image }}
      style={{
        width: 100,
        height: 100,
        borderRadius: 8
      }}
    />
  </View>
);

const styles = StyleSheet.create({
  menuItemStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    margin: 20,
  },

  titleStyle: {
    fontSize: 19,
    fontWeight: "600"
  
  },
});

export default MenuItems