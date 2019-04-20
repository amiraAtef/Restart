import React, { Component } from "react";
import { GlobalStyles } from "../../global_styles/globalStyles";
import { Input } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import { responsiveHeight,responsiveFontSize } from 'react-native-responsive-dimensions';

import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import BackNavigator from "../Common/BackNavigator";
// import { ScrollView } from 'react-native-gesture-handler';
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false
    };
  }
  register = () => {
    this.props.history.push("/VerificationOTP");
  };
  render() {
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <BackNavigator history={this.props.history}/>
        <Text style={GlobalStyles.H1}>Create Account</Text>
        <Text style={GlobalStyles.H2}>It’s good to see you</Text>
        <View style={{height:responsiveHeight(70),marginTop:'5%'}} >
        <ScrollView
          // contentContainerStyle={{}}
        >
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ width: "50%"}}>
              <Input
                onChangeText={value => this.setState({ email: value.trim() })}
                label="First Name"
                labelStyle={GlobalStyles.lableStyle}
                leftIcon={<Icon name="user-circle" size={12} color="black" />}
                // errorMessage={emailError}
              />
            </View>

            <View style={{ width: "50%" }}>
              <Input
                onChangeText={value => this.setState({ email: value.trim() })}
                label="Last Name"
                labelStyle={GlobalStyles.lableStyle}
                leftIcon={<Icon name="user-circle" size={12} color="black" />}
                // errorMessage={emailError}
              />
            </View>
          </View>

            <Input
              onChangeText={value => this.setState({ email: value.trim() })}
              label="Email"
              labelStyle={GlobalStyles.lableStyle}
              leftIcon={<Icon name="envelope" size={12} color="black" />}
              // errorMessage={emailError}
              style={{ marginTop: "10%" }}
            />
            <Input
              style={{ marginTop:"10%"}}
              placeholder="+966 - 00 - 0000 - 0000"
              placeholderTextColor="black"
              leftIcon={<Icon name="fax" size={12} color="black"/>}
              labelStyle={GlobalStyles.lableStyle}
              label="Mobile"
            />
            <Input
              onChangeText={value => this.setState({ password: value.trim() })}
              label="Password"
              rightIcon={<Icon name="eye" size={12} color="black" />}
              leftIcon={<Icon name="lock" size={12} color="black" />}
              secureTextEntry={true}
              labelStyle={GlobalStyles.lableStyle}
              style={{ marginTop:"10%" }}
              //   errorMessage={passwordError}
              //   errorStyle={GlobalStyles.error}
            />
            <Input
                          style={{ marginTop: "10%" }}

              onChangeText={value => this.setState({ password: value.trim() })}
              label="Confirm Password"
              rightIcon={<Icon name="eye" size={12} color="black" />}
              leftIcon={<Icon name="lock" size={12} color="black" />}
              secureTextEntry={true}
              labelStyle={GlobalStyles.lableStyle}
              //   errorMessage={passwordError}
              //   errorStyle={GlobalStyles.error}
            />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center"
            }}
          >
            <CheckBox
              checkedColor="black"
              checkedIcon="square"
              uncheckedIcon="square-o"
              onPress={() => this.setState({ checked: !this.state.checked })}
              checked={this.state.checked}
              containerStyle={{width:"10%"}}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text style={{ fontSize: responsiveFontSize(1)}}>
                By signing up you agreeing to Miss Dubai
              </Text>
              <Text style={{ fontSize: responsiveFontSize(1)}}>
                Terms and conditions.
              </Text>
            </View>
            </View>

            
            <TouchableOpacity
              style={[GlobalStyles.button]}
              onPress={() => this.register()}
              //  onPress={this.onPress}
            >
              <Text style={GlobalStyles.buttonText}>Register</Text>
            </TouchableOpacity>
            <View
              style={[
                GlobalStyles.Row_JustifyContent_Center,
                { marginTop: 10 }
              ]}
            >
              <View>
                <Text>Don't have an account ?</Text>
              </View>
              <View>
                <Text style={[GlobalStyles.Maincolor, { marginLeft:"5%"}]}>
                  Register
                </Text>
              </View>
            </View>
        </ScrollView>
        </View>
      </View>
    );
  }
}

export default Signup;
