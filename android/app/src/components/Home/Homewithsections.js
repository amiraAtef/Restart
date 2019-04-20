import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Sections from "./Sections";
class Homewithsection extends Component {
  state = {
    search: ""
  };
  updateSearch = search => {
    this.setState({ search });
  };
  render() {
    const { search } = this.state;

    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Icon name="square" />
          <View style={{ flexDirection: "row", justifyContent: "center" }}>
            <Icon name="filter" />
            <Icon name="bell" color="#EA8685" size={30} />
          </View>
        </View>
                {/* <SearchBar
          placeholder="Type Here..."
          onChangeText={this.updateSearch}
          value={search}
          
        /> */}
{/* <View> */}
<Sections/>
{/* // </View> */}

      </View>
    );
  }
}

export default Homewithsection;
