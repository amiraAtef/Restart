import React, { Component } from "react";
import { Text, View, Image, TouchableOpacity,TouchableHighlight, ScrollView } from "react-native";
import { styles } from "./styles";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Header from "../Common/Header";
import { responsiveHeight } from "react-native-responsive-dimensions";

class FavoriteDay extends Component {
  state = {};
  mondayCategories = () => {
    this.props.history.push("/Categories");
  };
  render() {
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <Header history={this.props.history} />
        <Image
          style={{
            alignSelf: "center",
            marginTop: "15%"
          }}
          source={require("../../main/assets/Images/MissDubai.png")}
        />
        <View style={{ height: responsiveHeight(60), marginTop: "5%" }}>
          <ScrollView>
            <TouchableHighlight
          
            underlayColor= "#EA8685"
              onPress={() => {
                this.mondayCategories();
                
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Monday</Text>
            </TouchableHighlight>

            <TouchableHighlight
                        underlayColor= "#EA8685"

              onPress={() => {
                this.mondayCategories();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Tuesday</Text>
            </TouchableHighlight>

            <TouchableHighlight
                        underlayColor= "#EA8685"

              onPress={() => {
                this.mondayCategories();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>wednesday</Text>
            </TouchableHighlight>
            <TouchableHighlight
                        underlayColor= "#EA8685"

              onPress={() => {
                this.mondayCategories();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Thursday</Text>
            </TouchableHighlight>
            <TouchableHighlight
                        underlayColor= "#EA8685"

              onPress={() => {
                this.mondayCategories();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Friday</Text>
            </TouchableHighlight>
            <TouchableHighlight
                        underlayColor= "#EA8685"

              onPress={() => {
                this.mondayCategories();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Saturday</Text>
            </TouchableHighlight>
            <TouchableHighlight
                        underlayColor= "#EA8685"

              onPress={() => {
                this.mondayCategories();
              }}
              style={styles.button}
            >
              <Text style={styles.buttonText}>Sunday</Text>
            </TouchableHighlight>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default FavoriteDay;
