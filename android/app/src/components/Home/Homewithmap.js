import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity
} from "react-native";
import {
  Container,
  Label,
  Header,
  Form,
  Content,
  Item,
  Input,
  Icon
} from "native-base";
import Sections from "./Sections";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import MapView , { PROVIDER_GOOGLE ,OverlayComponent } from "react-native-maps";
import { styles } from "./style";
import Tab from "../Common/Tab";
const Styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height: 1200,
    width: 400,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    flex: 1,
    ...StyleSheet.absoluteFillObject
  }
});

export default class HomeWithMap extends React.Component {
  state = {
    search: "",
    Event: true,
    IconEvent: "arrow-right-circle"
  };
  ToggleEvent = () => {
    this.setState({
      Event: !this.state.Event
    });

    console.log("this.state.Event", this.state.Event);
    if (this.state.IconEvent == "arrow-right-circle") {
      this.setState({ IconEvent: "arrow-left-circle" });
    } else {
      this.setState({ IconEvent: "arrow-right-circle" });
    }
  };
  render() {
    return (
      <View style={Styles.container}>
   
        <MapView
          style={Styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
        />

        <View
          style={{
            position: "absolute",
            top: responsiveHeight(2),
            flexDirection: "row",
            justifyContent: "space-between",
            left:responsiveWidth(2),
            width: responsiveWidth(100)
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.history.push("/Homewithsection");
            }}
          >
            <Image
              source={require("../../main/assets/Images/SquareMap.png")}
            />
          </TouchableOpacity>
          <View
            style={{
              width: responsiveWidth(100),
              flexDirection: "row",
              justifyContent: "center",
              left: responsiveWidth(30)
            }}
          >
            <Image source={require("../../main/assets/Images/Filter.png")} />
            <Image
              style={{ marginLeft: "3%" }}
              source={require("../../main/assets/Images/Notification.png")}
            />
          </View>
        </View>
        <Item
          rounded
          style={{
            position: "absolute",
            left: responsiveWidth(3),
            borderColor: "#EA8685",
            width: responsiveWidth(95),
            height: responsiveHeight(7),
            top: responsiveHeight(8)
          }}
        >
          <Input style={{ fontSize: 12,color:"#EA8685" }} placeholder="Search" />
          <Icon style={{ color: "#EA8685" }} name="search" />
        </Item>

        <View
          style={[
            styles.viewEventStyle,
            {
              position: "absolute",
              top: responsiveHeight(48),
              left: responsiveWidth(3)
            }
          ]}
        >
          <Text style={styles.textH0}>Offers</Text>
          <TouchableOpacity onPress={() => this.ToggleEvent()}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "baseline",
                marginLeft:responsiveWidth(50)
              }}
            >
              <Text>{`View all\u00A0`} </Text>
              <Icon
                type="SimpleLineIcons"
                style={{ color: "#EA8685", fontSize: 20 }}
                name={`${this.state.IconEvent}`}
              />
            </View>
          </TouchableOpacity>
        </View>
        <View
          style={{
            height: responsiveHeight(35),
            flex: 1,
            position: "absolute",
            top: responsiveHeight(53),
            left: responsiveWidth(3)
          }}
        >
          <ScrollView horizontal={this.state.Event}>
          <TouchableOpacity
          onPress={()=>{
            this.props.history.push('/OfferDetails')
          }}
          >
            <Sections />
            </TouchableOpacity>
            <TouchableOpacity
          onPress={()=>{
            this.props.history.push('/OfferDetails')
          }}
          >
            <Sections />
            </TouchableOpacity>

         { this.state.Event?  
          <View style={{width:80}}/>
          :<View style={{height:50}}/>
         }
          </ScrollView>
        </View>
        <View
      style={{top:responsiveHeight(88),
      height:responsiveHeight(80),
      left:0,zIndex:100,position:'absolute'}}
      >
         <Tab 
         position={true}
           history={this.props.history} />
           </View>
      </View>
    );
  }
}
