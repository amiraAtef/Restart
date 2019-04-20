import React, { Component } from "react";
import BackNavigator from "../Common/BackNavigator";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../global_styles/globalStyles";
import {styles} from './styles'
class VerificationOTP extends Component {
  state = {};
  goToContinueSignUp=()=>{
this.props.history.push('/ContinueSignUp')
  }
  render() {
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
              <BackNavigator history={this.props.history} />

              <Text style={GlobalStyles.H1}>Verification Code </Text>

        <View style={[GlobalStyles.Row_JustifyContent_Center,{marginTop:"10%"}]}>
          <View style={styles.verificationSquare}>
            <TextInput
                      underlineColorAndroid="black"
 />
          </View>
          <View style={styles.verificationSquare}>
          <TextInput
                    underlineColorAndroid="black"

           />

          </View>
          <View style={styles.verificationSquare}>
          <TextInput
          underlineColorAndroid="black"
           />

          </View>
          <View style={styles.verificationSquare}>
          <TextInput
                    underlineColorAndroid="black"

           />

          </View>
       
       
        </View>
        <Text style={[styles.Center,{marginTop:"25%"}]}
        
        >
          We have sent confirmation code to your email
          </Text>
          <Text style={[styles.Center,{marginTop:"10%",color:'#EA8685'}]}>
          Resend Code
          </Text>
        <TouchableOpacity
              style={[GlobalStyles.button,{marginTop:"5%"}]}
              onPress={() => this.goToContinueSignUp()}
              //  onPress={this.onPress}
            >
              <Text  style={GlobalStyles.buttonText}>Confirm</Text>
            </TouchableOpacity>
      </View>
    );
  }
}

export default VerificationOTP;
