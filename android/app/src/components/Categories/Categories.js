import React, { Component } from "react";
import { styles } from "./styles";
import { responsiveHeight } from "react-native-responsive-dimensions";

import {
  Text,
  View,
  Image,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity
} from "react-native";
import Header from "../Common/Header";
import { GlobalStyles } from "../../global_styles/globalStyles";
import ImageOverlay from "react-native-image-overlay";

class Categories extends Component {
  state = {};
  SpaOffers = () => {
    this.props.history.push("/Offers");
  };
  render() {
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <Header Heading="Categories" history={this.props.history} />
        <View style={{ height: responsiveHeight(90), marginTop: "20%",width:"100%" }}>
          <ScrollView
          >
            <TouchableOpacity
              onPress={() => {
                this.SpaOffers();
              
              }}
            >
              <ImageOverlay
                containerStyle={{ width: "99%" }}
                overlayAlpha={0}
                height={160}
                titleStyle={{ fontSize: 24 }}
                contentPosition="center"
                title="BEACHCLUBS"
                rounded={10}
                source={require("../../main/assets/Images/Logo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.SpaOffers();
              }}
            >
              <ImageOverlay
                containerStyle={{ marginTop: "3%", width: "99%" }}
                overlayAlpha={0}
                height={160}
                titleStyle={{ fontSize: 24 }}
                contentPosition="center"
                title="SPA"
                rounded={10}
                source={require("../../main/assets/Images/Logo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.SpaOffers();
              }}
            >
              <ImageOverlay
                containerStyle={{ marginTop: "3%", width: "99%" }}
                overlayAlpha={0}
                height={160}
                titleStyle={{ fontSize: 24}}
                contentPosition="center"
                title="RESTAURANT"
                rounded={10}
                source={require("../../main/assets/Images/Logo.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.SpaOffers();
              }}
            >
              <ImageOverlay
                containerStyle={{ marginTop: "3%", width: "99%" }}
                overlayAlpha={0}
                height={160}
                titleStyle={{ fontSize: 24}}
                contentPosition="center"
                title="NIGHTCLUBS"
                rounded={10}
                source={require("../../main/assets/Images/Logo.png")}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default Categories;
