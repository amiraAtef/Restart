import React, { Component } from 'react';
import Splach from '../Common/Splash'
import DividerWithText from '../Common/DividerWithText';
import { Text, View,Image,TouchableOpacity,ScrollView} from "react-native";
import OverlayImage from '../Common/OverlayImage/overlayImage'
import IconBox from '../Common/IconBox'

import {GlobalStyles}from '../../global_styles/globalStyles'
class  SocialLogin extends Component {
    state = {  };
    login=()=>{
      this.props.history.push('/Login')
    }
    SignUp=()=>{
      this.props.history.push('/Signup')
    }
    render() {
        return (
            <Splach>
            <ScrollView style={{padding:"5%"}}>
            <View style={{marginTop:"25%"}}>
                <DividerWithText/>
                             
            </View>

<View style={[GlobalStyles.Row_JustifyContent_spaceBetween,{paddingTop:20}]}>
    <IconBox icon="facebook-f"/>
    <IconBox icon="twitter"/>
    <IconBox icon="google"/>
</View>
<View>
<TouchableOpacity
          style={[GlobalStyles.button,{marginTop:30,height:45}]}
          onPress={() => this.login()}
          //  onPress={this.onPress}
        >
          <Text style={GlobalStyles.buttonText}>Login With Email</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[GlobalStyles.button,{marginTop:20,
          borderColor:"#EA8685",borderWidth:1,
          height:45,backgroundColor: 'transparent'}
]}
          onPress={() => this.SignUp()}
          //  onPress={this.onPress}
        >
          <Text style={[GlobalStyles.buttonText]}>Sign Up</Text>
        </TouchableOpacity>
</View>
 
</ScrollView>
            </Splach>
        );
    }
}

export default SocialLogin ;