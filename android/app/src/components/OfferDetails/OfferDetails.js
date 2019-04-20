import React from "react";
import ItemDetails from "../Common/ItemDetails";
import Header from "../Common/Header";
import { GlobalStyles } from "../../global_styles/globalStyles";

import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";

export default class OfferDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
goToBook=()=>{
  this.props.history.push('/MyBookings')
}
  render() {
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <Header Heading="Offer Details" history={this.props.history} />
        <View style={{ marginTop: "15%" }}>
          <ItemDetails />
          <View style={{ height: responsiveHeight(45), marginTop: "5%" }}>
<ScrollView >
          <View >
      
            <Text
              style={[
                GlobalStyles.H2,
                GlobalStyles.Maincolor,
                { alignSelf: "center" }
              ]}
            >
              MONDAY NIGHTCLUBS
            </Text>
            <Text style={GlobalStyles.h2}>Nightclub</Text>
            <Image
              style={{ width: 60, height: 60, margin:"5%",borderRadius:10 }}
              source={require("../../main/assets/Images/DumyImage.jpg")}
            />
            <Text style={GlobalStyles.h3}>Rock Nightclub</Text>
            <Text style={GlobalStyles.h3Bold}>Description</Text>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adi cing elit, sed do
              eiusmod tempor incididunt abore et dolore magna aliqua. Quis ipsum
              s
            </Text>
          </View>
        

        <TouchableOpacity
          style={[GlobalStyles.button, { left:"3%" ,marginTop:"5%"}]}
          // onPress={() => this.login()}
          //  onPress={this.onPress}

          onPress={()=>this.goToBook()}
        >
          <Text style={GlobalStyles.buttonText}>Book Your Offer</Text>
        </TouchableOpacity>
        </ScrollView>
        </View>

      </View>
      </View>
    );
  }
}
