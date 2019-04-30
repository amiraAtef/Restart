import React, { Component } from "react";

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  ScrollView
} from "react-native";
import { GlobalStyles } from "../../../global_styles/globalStyles";
class Review extends Component {
  state = {};

  render() {
    return (
      <View
        style={{
          flexDirection: "row",
          padding: "5%",
          justifyContent: "space-around"
        }}
      >
        <View >
          <Image
          style={{width:50,height:50}}
            source={require("../../../main/assets/Images/MissDubai.png")}
          />
        </View>
        <View style={{ width: "30%" }}>
          <Text style={GlobalStyles.subtitle}>Adam Gamel</Text>
          <Text style={GlobalStyles.description}>
            Lorem ipsum dolor sit amet
          </Text>
        </View>
        <View style={{ width: "20%" }}>
          <Text style={GlobalStyles.subtitle}>03:10 pm</Text>
        </View>
      </View>
    );
  }
}

export default Review;
