import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Reviews from "./Reviews/Reviews";
import ItemDetails from "../Common/ItemDetails";
class Event extends Component {
  state = { Pressed: false };
  ToggleTabs = () => {
    this.setState({
      Pressed: !this.state.Pressed
    });
  };

  render() {
    const { Pressed } = this.state;
    console.log("Pressed", Pressed);
    return (
      <View style={{ marginTop: 70 }}>
       <ItemDetails/>
        <Text
          style={[
            { alignSelf: "center", fontWeight: "bold" },
            GlobalStyles.H2,
            GlobalStyles.Maincolor
          ]}
        >
          Event name
        </Text>
        <ScrollView style={{ left: 15, top: 10, height: 300 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
            Date/Time
          </Text>
          <Text>SUN,MAR.25 - 4:30 PM EST</Text>
          <Text style={{ fontSize: 16, fontWeight: "bold", color: "black" }}>
            Description
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adi cing elit, sed do
            eiusmod tempor incididunt abore et dolore magna aliqua. Quis ipsum s
          </Text>
          <Text style={GlobalStyles.title}>Location </Text>
          <Text style={GlobalStyles.Maincolor}>Stage 48</Text>
          <Text>605 w 48th street.down town 10036</Text>
          <Text style={GlobalStyles.Maincolor}>3.5 km nearby</Text>
          <Text style={GlobalStyles.title}>Price</Text>
          <Text>$150-$200</Text>

          <TouchableOpacity
            style={GlobalStyles.button}
            onPress={() => this.login()}
            //  onPress={this.onPress}
          >
            <Text style={GlobalStyles.buttonText}>Book Your Offer</Text>
          </TouchableOpacity>
          <Text style={[GlobalStyles.title, { marginTop: 10 }]}>Contact</Text>
          <View style={{ flexDirection: "row", textAlign: "center" }}>
            <Text>Send us an email at</Text>
            <Text style={GlobalStyles.Maincolor}>help@inkdesign.com</Text>
            
          </View>
          <View style={{ flexDirection: "row", textAlign: "center" }}>

          <Text> or call us at</Text>
            <Text style={GlobalStyles.Maincolor}>+20 11 9 11 12 14</Text>
            </View>

          <View style={{marginTop:10}}>
            <Text>Map</Text>
            <View style={{ width: 300, top: 30 }}>
              <Reviews />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}

export default Event;
