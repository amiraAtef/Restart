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
import { SearchBar } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Sections from "./Sections";
import { styles } from "./style";
import Tab from "../Common/Tab"
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
      <View>
        <View style={GlobalStyles.Top_AlginmentCMP}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Icon name="th-large" color="#EA8685" size={25} />
            <View style={{ flexDirection: "row", justifyContent: "center" }}>
              <Icon name="filter" color="#EA8685" size={25} />
              <Icon name="bell" color="#EA8685" size={25} />
            </View>
          </View>
          <View style={{ height: responsiveHeight(88), marginTop: "2%" }}>
            <ScrollView>
              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Events</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text>View all</Text>
                    <Icon color="#EA8685" name="arrow-circle-right" size={20} />
                  </View>
                </View>

                <View>
                  <ScrollView horizontal={true}>
                    <Sections />
                    <Sections />
                  </ScrollView>
                </View>
              </View>
              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Spa</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text>View all</Text>
                    <Icon color="#EA8685" name="arrow-circle-right" size={20} />
                  </View>
                </View>

                <View>
                  <ScrollView horizontal={true}>
                    <Sections />
                    <Sections />
                  </ScrollView>
                </View>
              </View>
              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Nearby</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text>View all</Text>
                    <Icon color="#EA8685" name="arrow-circle-right" size={20} />
                  </View>
                </View>

                <View>
                  <ScrollView horizontal={true}>
                    <Sections />
                    <Sections />
                  </ScrollView>
                </View>
              </View>

              <View>
                <View style={[styles.viewEventStyle]}>
                  <Text style={styles.textH0}>Spa</Text>
                  <View style={{ flexDirection: "row" }}>
                    <Text>View all</Text>
                    <Icon color="#EA8685" name="arrow-circle-right" size={20} />
                  </View>
                </View>

                <View>
                  <ScrollView horizontal={true}>
                    <Sections />
                    <Sections />
                  </ScrollView>
                </View>
              </View>
              <View
                style={{
                  height: 50
                }}
              />
            </ScrollView>
          </View>
        </View>

        <Tab history={this.props.history} />
      </View>
    );
  }
}

export default Homewithsection;
