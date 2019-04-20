import React, { Component } from "react";
import { DatePicker } from "native-base";

import {
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
  Picker,
  Button
} from "react-native";
import ImagePicker from "react-native-image-picker";
import {
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";

import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyles } from "../../global_styles/globalStyles";
import { Input } from "react-native-elements";
const options = {
  title: "Choose Image",
  // customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: "images"
  }
};

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      PickedImage: ""
    };
  }

  PickImage = () => {
    ImagePicker.showImagePicker(options, response => {
      console.log("Response = ", response);

      if (response.didCancel) {
        console.log("User cancelled image picker");
      } else if (response.error) {
        console.log("ImagePicker Error: ", response.error);
      } else if (response.customButton) {
        console.log("User tapped custom button: ", response.customButton);
      } else {
        const source = { uri: response.uri };

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        this.setState({
          PickedImage: source
        });
      }
    });
  };
  render() {
    console.log(this.state.PickedImage);

    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={GlobalStyles.title}>Profile</Text>
          <Icon name="bell" color="#EA8685" size={30} />
        </View>

        <View>
          <View>
            {this.state.PickedImage ? (
              <Image
                style={{ width: "50%", height: 200 }}
                source={this.state.PickedImage}
                onPress={() => this.PickImage()}
              />
            ) : (
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => this.PickImage()}
              >
                <Icon
                  style={{ top: "80%", zIndex: 1, left: "10%" }}
                  size={18}
                  name="camera"
                />
                <Image
                  source={require("../../main/assets/Images/DefaultImage.png")}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
        <View style={{ height: responsiveHeight(60), marginTop: "5%" }}>
          <ScrollView>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View style={{ width: "50%" }}>
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
              onChangeText={value =>
                this.setState({ Nationality: value.trim() })
              }
              label="Nationality"
              labelStyle={GlobalStyles.lableStyle}
              leftIcon={<Icon name="circle" size={12} color="black" />}
              // errorMessage={emailError}
              style={{ marginTop: "10%" }}
            />

            <Input
              onChangeText={value => this.setState({ email: value.trim() })}
              label="Email"
              labelStyle={GlobalStyles.lableStyle}
              leftIcon={<Icon name="envelope" size={12} color="black" />}
              // errorMessage={emailError}
              style={{ marginTop: "10%" }}
            />
            <Input
              style={{ marginTop: "10%" }}
              placeholder="+966 - 00 - 0000 - 0000"
              placeholderTextColor="black"
              leftIcon={<Icon name="fax" size={12} color="black" />}
              labelStyle={GlobalStyles.lableStyle}
              label="Mobile"
            />

            <View style={{ flexDirection: "row" }}>
              <Picker
                style={{ width: "50%" }}
                selectedValue={this.state.language}
                onValueChange={lang => this.setState({ language: lang })}
              >
                <Picker.Item label="ah" value="java" />
                <Picker.Item label="ah" value="js" />
              </Picker>
              <Picker
                style={{ width: "50%" }}
                selectedValue={this.state.language}
                onValueChange={lang => this.setState({ language: lang })}
              >
                <Picker.Item label="ah" value="java" />
                <Picker.Item label="ah" value="js" />
              </Picker>
            </View>
    
            <Icon
              name="angle-down"
              style={{
                alignSelf: "flex-end",
                top: "82%",
                position: "absolute"
              }}
              size={20}
            />
            <Icon
              name="gift"
              style={{ top: "82%", position: "absolute" }}
              size={18}
            />

            <DatePicker
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              // androidMode={"default"}
              placeHolderText="12/12/1993"
              textStyle={{ color: "black" }}
              placeHolderTextStyle={{
                textDecorationLine: "underline",
                marginLeft: "5%",
                color: "black"
              }}
              onDateChange={this.setDate}
              disabled={false}
            />

            <TouchableOpacity
              style={[GlobalStyles.button]}
              onPress={() => this.register()}
              //  onPress={this.onPress}
            >
              <Text style={GlobalStyles.buttonText}>Edit</Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    );
  }
}

export default UserProfile;
