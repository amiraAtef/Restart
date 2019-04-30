import React, { Component } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet
} from "react-native";
import { Input, Icon, Item } from "native-base";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Tab from "../Common/Tab";
import HomeWithMap from "./Homewithmap";
import HomeWithSection from "./Homewithsections";
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ToggleHome: false
    };
  }
  Toggle = () => {
    this.setState({
      ToggleHome: !this.state.ToggleHome
    });
  };
  render() {
    const { ToggleHome } = this.state;
    return (
      <View style={GlobalStyles.Top_AnmentCMP}>
     
        <Item rounded style={{ borderColor: "#EA8685"}}>
          <Input placeholder="Search" style={{ marginLeft: "2%" }} />
          <Icon name="ios-search" style={{ color: "#EA8685" ,fontSize:29}} fontSize={45}/>
        </Item>

          <HomeWithMap history={this.props.history} />

      
        <Tab history={this.props.history} />

      </View>
    );
  }
}

export default Home;
