import React from 'react'
import { View, Image, Text } from "react-native";

const image =
  "https://s3-media0.fl.yelpcdn.com/bphoto/cQnjaigCmegkR6DGwEMb2Q/o.jpg";

const title = 'Pacific PourHouse'
const description = 'American · Burgers · Wings · $$ · 🎟'

const About = () => {
    return (
      <View>
        <RestaurantImage image={image} />
        <RestaurantTitle title={title} />
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

const RestaurantTitle = ({ title }) => (
  
    <Text style={{
        fontSize: 29,
        fontWeight: '600',
        marginTop: 10,
        marginHorizontal: 15
    }}>
        {title}
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
