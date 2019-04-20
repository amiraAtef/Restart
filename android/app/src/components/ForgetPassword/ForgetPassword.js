import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity
} from "react-native";
import {GlobalStyles} from "../../global_styles/globalStyles";
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import BackNavigator from '../Common/BackNavigator'
class ForgetPassword extends Component {
  state = {
    Info: `Enter your Mobile below and we will send a link
      \n to reset your password`,
    submisionDone: false
  };
  changeText = () => {
    const {submisionDone}=this.state
    this.setState({
      Info: `We sent you a link to reset \n your password`,
      submisionDone: !submisionDone
    });
  };
  render() {
    const { submisionDone, Info } = this.state;
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
       <BackNavigator/>
          <Text style={GlobalStyles.H1}>
            Forget Password
          </Text>
        {!submisionDone && (
          <View>
              <Text style={GlobalStyles.H2}>Never Worry</Text>
            <View style={{ alignSelf:'center',marginTop: 20 }}>
              <Image
                style={{ width: 90, height: 64 }}
                source={require("../../main/assets/Images/ForgetPassword_2.png")}
              />
            </View>
            <Text style={{ textAlign:'center',alignSelf:'center', marginTop: 20 ,width:300 }}>
              {`Enter your Mobile below and we will send a link to reset your password`}
            </Text>
            <Text
              style={GlobalStyles.H3}
            >
              Mobile
            </Text>
            <Input
            style={{marginTop:9,color:'black'}}
              placeholder="+966 - 00 - 0000 - 0000"
              placeholderTextColor="black"
              leftIcon={<Icon name="fax" size={12} color="black" />}
            />
            <TouchableOpacity
              style={[GlobalStyles.button,{marginTop:40}]}
              onPress={() => this.changeText()}
              //  onPress={this.onPress}
            >
              <Text style={GlobalStyles.buttonText}> Submit</Text>
            </TouchableOpacity>
          </View>
        )}
        {submisionDone && (
          <View>
            <Text style={GlobalStyles.H2}>{Info}</Text>
            <View style={{ alignSelf:'center',marginTop: 20 }}>

            <Image
              style={{ alignSelf: "center", width: 170, height: 170 }}
              source={require("../../main/assets/Images/Verified.png")}
            />
            </View>

            <TouchableOpacity
              style={GlobalStyles.button}
              onPress={() => this.changeText()}
              //  onPress={this.onPress}
            >
              <Text  style={GlobalStyles.buttonText}>Try Again</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    );
  }
}

export default ForgetPassword;
