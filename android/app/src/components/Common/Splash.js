import React, { Component } from 'react';
import { Text, View,Image} from "react-native";
// import OverlayImage from '../Common/OverlayImage/overlayImage'
import ImageOverlay from "react-native-image-overlay";
import { responsiveHeight } from "react-native-responsive-dimensions";

class Splash extends Component {
    state = {  };
    // componentDidMount(){
    // }


// componentDidMount(){
//     this.gotToLogin()

// }
    render() {
        console.log("thisSplash",this.props.history)
        return (
    <ImageOverlay

    source={require('../../main/assets/Images/Background.png')}
    containerStyle={{height:responsiveHeight(100)}}
    resizeMode="cover"
    >
    <View
    style={{height:responsiveHeight(80)}}
    >
    <Image
style={{
alignSelf:'center'
}}
       source={require("../../main/assets/Images/MissDubai.png")} /> 

<View>
       {this.props.children}
       </View>
       </View>

    </ImageOverlay>
        );
    }
}

export default Splash;