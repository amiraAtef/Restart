import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  ImageBackground,
  TouchableOpacity
} from "react-native";
import { responsiveHeight } from "react-native-responsive-dimensions";
import { Card, ListItem, Button, Icon } from "react-native-elements";
import ImageOverlay from "react-native-image-overlay";

class Offer extends Component {
  state = {};

  render() {
    return (


      <ImageOverlay
        containerStyle={{ width: "99%" ,marginTop:"5%" }}
        overlayAlpha={0}
        height={160}
        titleStyle={{ fontSize: 30 }}
        contentPosition="center"
        title="Offer Name"
        rounded={10}
        source={require("../../main/assets/Images/Logo.png")}
      >
      <View style={{flexDirection:'row',padding:"2%"}}>
      <View
      
      style={{width:"50%"}}
      >
          <Text
      style={{
               color: "white",
               fontSize: 22,
          }}
     >Offer Name</Text>
     </View>
      <View style={{height:"90%",width:"50%",
        borderRadius: 25,
      backgroundColor:'#EA8685'}}>
     <Text
      style={{
               color: "white",
               fontSize: 22,
               textAlign:'center',

          }}
     >$150-$200</Text>
     </View>
    
      </View>
      </ImageOverlay>
    );
  }
}

export default Offer;
