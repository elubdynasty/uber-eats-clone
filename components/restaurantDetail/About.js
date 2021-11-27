import React from 'react'
import { View, Image, Text } from "react-native";

const yelpRestaurantInfo = {
  name: "Pacific PourHouse",
  image: "https://s3-media0.fl.yelpcdn.com/bphoto/cQnjaigCmegkR6DGwEMb2Q/o.jpg",
  price: "$$",
  reviews: "968",
  rating: 4,
  categories: [
    { title: "American" },
    { title: "Burgers" },
    { title: "Wings" },
  ],
};

const {name, image, price, reviews, rating, categories} = yelpRestaurantInfo

const formattedCategories = categories.map((cat) => cat.title).join(" · ")

const description = `${formattedCategories} ${
  price ? " · " + price : ""
} · 🎟 · ${rating} ⭐ ${reviews}+`;



const About = () => {
    return (
      <View>
        <RestaurantImage image={image} />
        <RestaurantName name={name} />
        <RestaurantDescription description={description} />
      </View>
    );
}


const RestaurantImage = ({ image }) => (
    <Image
      source={{
        uri: image,
      }}
      style={{
        width: "100%",
        height: 180,
      }}
    />

)

const RestaurantName = ({ name }) => (
  
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }}>
        {name}
    </Text>
  
);

const RestaurantDescription = ({ description }) => (
  <Text
    style={{
      fontSize: 15.5,
      fontWeight: "400",
      marginTop: 10,
      marginHorizontal: 15,
    }}
  >
    {description}
  </Text>
);


export default About
