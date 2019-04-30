import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  ScrollView
} from "react-native";
import Review from "./Review";
import {
  Content,
  Button,
  Textarea,
  List,
  Input,
  ListItem,
  Form,
  Left,
  Body,
  Right,
  Thumbnail
} from "native-base";
import { GlobalStyles } from "../../../global_styles/globalStyles";
import {
  responsiveWidth,
  responsiveHeight
} from "react-native-responsive-dimensions";

class Reviews extends Component {
  state = {};

  render() {
    return (
      <View
        style={{
          backgroundColor: "#EA8685",
          borderRadius: 50,
          width: responsiveWidth(96),
          alignSelf: "center",
          // height:responsiveHeight(51)
        }}
      >
        <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1
            //  top:"10%"
          }}
        />
        <View
          style={{
            flexDirection: "row",
            padding: "7%",
            justifyContent: "space-between",
            alignItems: "baseline"
          }}
        >
          <Text
            style={[
              GlobalStyles.title,
              { color: "white", fontWeight: "bold", fontSize: 14 }
            ]}
          >
            Reviews
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "baseline"
            }}
          >
            <Image
              style={{ marginRight: "2%" }}
              source={require("../../../main/assets/Images/message.png")}
            />
            <Text style={[GlobalStyles.title, { color: "white" }]}>
              150 K review
            </Text>
          </View>
        </View>
        <View style={{ height: responsiveHeight(45) }}>
          <ScrollView>
            <View>
              <View
                style={{
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  top: "10%"
                }}
              />
              <Review />
            </View>
            <View>
              <View
                style={{
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  top: "10%"
                }}
              />
              <Review />
            </View>
            <View>
              <View
                style={{
                  borderBottomColor: "white",
                  borderBottomWidth: 1,
                  top: "10%"
                }}
              />
              <Review />
            </View>
          </ScrollView>
          <View
          style={{
            flexDirection: "row",
            justifyContent: "space-around",
            alignItems: "center",
            
          }}
        >
          <View style={{marginLeft:"5%"}}>
            <Image
              style={{ width: 50, height: 50, }}
              source={require("../../../main/assets/Images/MissDubai.png")}
            />
          </View>
          <View style={{ width: "40%" }}>
            <Textarea
              style={{ height: "30%" }}
              rowSpan={4}
              bordered
              placeholder="Textarea"
            />
          </View>
          <View>
            <Button style={{backgroundColor:'white'}}>
              <Text
              style={{color:"#EA8685",padding:"1%"}}
              >POST</Text>
            </Button>
          </View>
        </View>
        </View>
     
      </View>
    );
  }
}

export default Reviews;
