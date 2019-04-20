import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import {GlobalStyles} from "../../global_styles/globalStyles";

class BackNavigator extends Component {
    state = {  };

    render() {

        return (
            <View style={GlobalStyles.Row_alignItems_baseline}>
            <TouchableOpacity 
            style={{width:"10%"}}
             onPress={()=>{this.props.history.goBack()}}>
            <Icon
              size={30}
              name={"angle-left"}
              style={{ fontWeight: 50 }}
              color="black"
            />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 18,
                fontWeight: "bold",
                color: "black"
              }}
            >
              Back
            </Text>
          </View>
        );
    }
}

export  default BackNavigator;