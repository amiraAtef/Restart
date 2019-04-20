import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableHighlight,
  Button,
  ScrollView
} from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global_styles/globalStyles";
import MyBook from "./MyBook";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
import Tab from "../Common/Tab";

class MyBookings extends Component {
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
      <View>
        <View style={[GlobalStyles.Top_AlginmentCMP]}>
          <Text style={{ fontSize: 18, color: "black" }}>My Bookings</Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginTop: 20
            }}
          >
            <TouchableHighlight
              underlayColor="transperant"
              onPress={() => this.ToggleTabs()}
              style={{ marginLeft: 53, backgroundColor: "transparent" }}
            >
              <Text style={!Pressed ? styles.pressed : styles.Notpressed}>
                Active
              </Text>
            </TouchableHighlight>

            <TouchableHighlight
              onPress={() => this.ToggleTabs()}
              underlayColor="transperant"
              style={{ marginRight: "20%", backgroundColor: "transparent" }}
            >
              <Text style={Pressed ? styles.pressed : styles.Notpressed}>
                History
              </Text>
            </TouchableHighlight>
          </View>
          <View style={{ height: responsiveHeight(82), marginTop: "2%" }}>
            <ScrollView>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 0
                }}
              >
                <MyBook />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 0
                }}
              >
                <MyBook />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 0
                }}
              >
                <MyBook />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 0
                }}
              >
                <MyBook />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 0
                }}
              >
                <MyBook />
              </View>
              <View
                style={{
                  borderBottomColor: "black",
                  borderBottomWidth: 1,
                  margin: 0
                }}
              >
                <MyBook />
              </View>
              <View
              style={{
                height:50
              }}
              ></View>
            </ScrollView>
          </View>
        </View>
        <Tab history={this.props.history} />
      </View>
    );
  }
}

export default MyBookings;
