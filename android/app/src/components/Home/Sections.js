import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
class Sections extends Component {
    state = {  };

    render() {
        return (
            <View>
<Image

    source={require('../../main/assets/Images/DefaultImage.png')}
/>
<View style={{flexDirection:'row'}}>
    <Text>#learn #Event</Text>
    <Text>12 . feb . 2019</Text>
</View>
<View>
    <Text>Event Name</Text>
    <Text>14 Km</Text>
</View>
<View>
<Text>709 Honey Greek Dr....</Text>
</View>
            </View>
        );
    }
}

export default Sections;