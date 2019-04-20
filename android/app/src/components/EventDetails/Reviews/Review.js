import React, { Component } from 'react';

import {
    Text,
    View,
    Image,
    TouchableHighlight,
    Button,
    ScrollView
  } from "react-native";
import { GlobalStyles } from '../../../global_styles/globalStyles';
class Review extends Component {
    state = {  };

    render() {
        return (
            <View style={{flexDirection:'row',padding:10}}>
<View style={{width:70}} >
<Image  style={{width:32,height:32}}source={require('../../../main/assets/Images/MissDubai.png')} />
</View>
<View>
    
    </View>
    <View  style={{width:220}}>
    <Text style={GlobalStyles.subtitle}>
    Adam Gamel
    </Text>
    <Text style={GlobalStyles.description}>
    Lorem ipsum dolor sit amet 
    </Text>
    </View>
    <View  style={{width:70}}>
    <Text style={GlobalStyles.subtitle}>
    03:10 pm
    </Text>
    </View>
            </View>
        );
    }
}

export default Review;