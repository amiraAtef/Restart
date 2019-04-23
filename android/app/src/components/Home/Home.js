import React, { Component } from 'react';
import {
  Text,
  ScrollView,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import { GlobalStyles } from "../../global_styles/globalStyles";
import Icon from "react-native-vector-icons/FontAwesome";
import Tab from "../Common/Tab"
import HomeWithMap from './Homewithmap'
import HomeWithSection from './Homewithsections'
class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ToggleHome: false
        };
      }
Toggle=()=>{
    this.setState({
        ToggleHome:!this.state.ToggleHome
    })
}
    render() {
        const {ToggleHome} =this.state
        return (
        <View style={GlobalStyles.Top_AlginmentCMP}>
        <TouchableOpacity
        onPress={()=>{this.Toggle()}}
        >
        <Icon name="square"/>
        </TouchableOpacity>
        {ToggleHome?(
            <HomeWithMap/>
        ):(
            <HomeWithSection/>
        )

        }
        </View>
        );
    }
}

export default  Home;