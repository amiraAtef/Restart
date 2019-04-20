import React, { Component } from 'react';
import { GlobalStyles } from "../../global_styles/globalStyles";
import Header from "../Common/Header";
import { Text, View, Image } from "react-native";
import Event from './Event'
class EventDetails extends Component {
    state = {  };

    render() {
        return (
            <View style={GlobalStyles.Top_AlginmentCMP}>
            <Header  history={this.props.history} Heading="Event Details"/>
            <Event/>
            </View>            
        );
    }
}

export default EventDetails;