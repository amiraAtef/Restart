import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
  } from "react-native";
  import {styles} from './style'
  import {GlobalStyles}from '../../global_styles/globalStyles'
class Sections extends Component {
    state = {  };

    render() {
        return (
            <View style={{padding:"1%"}}>

<Image
style={{borderRadius:10}}
    source={require('../../main/assets/Images/Logo.png')}
/>

<View style={[styles.viewEventStyle]}>
    <Text style={[styles.textH3]} >#learn #Event</Text>
    <Text style={[styles.textH3]}>12 . feb . 2019</Text>
</View>
<View  style={[styles.viewEventStyle]}>
    <Text style={[styles.textH1,GlobalStyles.Maincolor]} >Event Name</Text>
    <Text style={[styles.textH2,GlobalStyles.Maincolor]} >14 Km</Text>
</View>
<View  style={[styles.viewEventStyle]}>
<Text  style={[styles.textH2]}>709 Honey Greek Dr....</Text>
</View>
            </View>
        );
    }
}

export default Sections;