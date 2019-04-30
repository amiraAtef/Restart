import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import {
  responsiveHeight,
  responsiveWidth
} from "react-native-responsive-dimensions";
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
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Sections from "./Sections";
import { styles } from "./style";
import Tab from "../Common/Tab";
class Homewithsection extends Component {
  state = {
    search: "",
    Event: true,
    NearBy: true,
    spa: true,
    IconEvent: "arrow-right-circle",
    IconSpa: "arrow-right-circle",
    IconNearby: "arrow-right-circle"
  };
  updateSearch = search => {
    this.setState({ search });
  };
  Toggle = () => {
    this.setState({
      ToggleHome: !this.state.ToggleHome
    });
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
  ToggleSpa = () => {
    this.setState({
      spa: !this.state.spa
    });

    if (this.state.IconSpa == "arrow-right-circle") {
      this.setState({ IconSpa: "arrow-left-circle" });
    } else {
      this.setState({ IconSpa: "arrow-right-circle" });
    }
  };
  ToggleNearBy = () => {
    this.setState({
      NearBy: !this.state.NearBy
    });
    if (this.state.IconNearby == "arrow-right-circle") {
      this.setState({ IconNearby: "arrow-left-circle" });
    } else {
      this.setState({ IconNearby: "arrow-right-circle" });
    }
  };
  render() {
    const { search } = this.state;

    return (
      <View>
        <View
          style={{
            padding: "3%",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <TouchableOpacity
            onPress={() => {
              this.props.history.push("/HomeWithMap");
            }}
          >
            <Image
              source={require("../../main/assets/Images/SectionsImage.png")}
            />
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              margin: "2%"
            }}
          >
            <Image source={require("../../main/assets/Images/Filter.png")} />
            <Image
              source={require("../../main/assets/Images/Notification.png")}
            />
          </View>
        </View>
        <Item
          rounded
          style={{
            borderColor: "#EA8685",
            width: "93%",
            height: "5%",
            marginLeft: "3%"
          }}
        >
          <Input style={{ fontSize: 10 }} placeholder="Search" />
          <Icon style={{ color: "#EA8685" }} name="search" />
        </Item>
        <View style={GlobalStyles.Top_AlginmentCMP}>
          <View style={{ height: responsiveHeight(79), marginTop: "2%" }}>
            <ScrollView>
              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Events</Text>
                  <TouchableOpacity onPress={() => this.ToggleEvent()}>
                    <View
                      style={{ flexDirection: "row", alignItems: "baseline" }}
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

                <View>
                  <ScrollView horizontal={this.state.Event}>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.history.push("/EventDetails");
                      }}
                    >
                      <Sections />
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => {
                        this.props.history.push("/EventDetails");
                      }}
                    >
                      <Sections />
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>
              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Spa</Text>
                  <TouchableOpacity onPress={() => this.ToggleSpa()}>
                    <View
                      style={{ flexDirection: "row", alignItems: "baseline" }}
                    >
                      <Text>{`View all\u00A0`} </Text>
                      <Icon
                        type="SimpleLineIcons"
                        style={{ color: "#EA8685", fontSize: 20 }}
                        name={`${this.state.IconSpa}`}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <ScrollView horizontal={this.state.spa}>
                  <TouchableOpacity
          onPress={()=>{
            this.props.history.push('/EventDetails')
          }}
          >
                    <Sections />
                    </TouchableOpacity>
                    <TouchableOpacity
          onPress={()=>{
            this.props.history.push('/EventDetails')
          }}
          >
                    <Sections />
                    </TouchableOpacity>
                                      </ScrollView>
                </View>
              </View>
              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Nearby</Text>

                  <TouchableOpacity onPress={() => this.ToggleNearBy()}>
                    <View
                      style={{ flexDirection: "row", alignItems: "baseline" }}
                    >
                      <Text>{`View all\u00A0`} </Text>
                      <Icon
                        type="SimpleLineIcons"
                        style={{ color: "#EA8685", fontSize: 20 }}
                        name={`${this.state.IconNearby}`}
                      />
                    </View>
                  </TouchableOpacity>
                </View>

                <View>
                  <ScrollView horizontal={this.state.NearBy}>
                  <TouchableOpacity
          onPress={()=>{
            this.props.history.push('/EventDetails')
          }}
          >
                    <Sections />
                    </TouchableOpacity>
                    <TouchableOpacity
          onPress={()=>{
            this.props.history.push('/EventDetails')
          }}
          >
                    <Sections />
                    </TouchableOpacity>
                  </ScrollView>
                </View>
              </View>

              <View
                style={{
                  height: 80
                }}
              />
            </ScrollView>
          </View>
        </View>

        <Tab position={false} history={this.props.history} />
      </View>
    );
  }
}

export default Homewithsection;
