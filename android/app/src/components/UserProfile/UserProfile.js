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
import { Container,Label, Header, Form,Content, Item, Input, Icon } from 'native-base';

import ImagePicker from "react-native-image-picker";
import {
  responsiveHeight,
  responsiveFontSize
} from "react-native-responsive-dimensions";

// import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyles } from "../../global_styles/globalStyles";
// import { Input } from "react-native-elements";
import Tab from "../Common/Tab";
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
      PickedImage: "",
      selected2: undefined,  
      selected3: undefined


    };
  }
  onValueChange2(value) {
    this.setState({
      selected2: value
    });
  }
  onValueChange3(value) {
    this.setState({
      selected3: value
    });
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
      <View>
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text style={{fontSize:12}}>Profile</Text>
          <Icon type="MaterialCommunityIcons" name="bell-outline" style={{
             color:"#EA8685"
          }} size={30} />
        </View>

        <View>
          <View>
            {this.state.PickedImage ? (
              <TouchableOpacity
                style={{ alignSelf: "center" }}
                onPress={() => this.PickImage()}
              >
              <Image
                style={{ width: "30%", height:200}}
                source={this.state.PickedImage}
                onPress={() => this.PickImage()}
              />
                            </TouchableOpacity>

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
        <View style={{ height: responsiveHeight(68), marginTop: "5%" }}>
          <ScrollView>
          <View style={{flexDirection:"row"}}>
          <Label
              style={[GlobalStyles.lableStyle,{width:"50%"}]}
              >First Name</Label>
   <Label
              style={[GlobalStyles.lableStyle,{width:"50%"}]}
              >Last Name</Label>

          </View>
            <View
              style={{ flexDirection: "row"}}
            >
            <View
            style={{width:"50%"}}
            >
             <Item
             >
       
              <Icon 
              type="FontAwesome"
               name='user' />
            <Input

          style={{fontSize:10}}
            
             placeholder='Emirati'/>
            
            </Item>
            </View>
            <View
            style={{width:"50%"}}
            >
             <Item>
           
              <Icon 
              type="FontAwesome"
               name='user' />
            <Input 
          style={{fontSize:10}}

            placeholder='Emirati'/>
            
            </Item>
            </View>

             </View>

      

       
       <Label
              style={GlobalStyles.lableStyle}
              >Nationality</Label>     
 <Item >
             
              <Icon 
              type="MaterialCommunityIcons"
               name='map-marker-circle' />
            <Input 
                                  style={{fontSize:10}}

            placeholder='Emirati'/>
            
            </Item>
            <Label
              style={GlobalStyles.lableStyle}
              >Email</Label>
 <Item>
             
              <Icon 
              type="FontAwesome"
               name='envelope' />
            <Input 
            
            style={{fontSize:10}}

            placeholder='ahmedgehad@nowpay.app'/>
            
            </Item>
            <Label
              style={GlobalStyles.lableStyle}
              >Mobile</Label>
 <Item >
             
              <Icon 
              type="Entypo"
               name='landline' />
            <Input 
                      style={{fontSize:10}}

            placeholder='+966 - 00 - 0000 - 0000'/>
            
            </Item>

  <View style={{flexDirection:'row',marginTop:"5%",height:30}}>
        <Text style={{width:"60%",fontSize:12,color:'black',fontWeight: "bold",fontFamily: 'Oxygen-Regular'}}>Country of Residence</Text>
        <Text style={{width:"40%",fontSize:12,color:'black',fontWeight: "bold",fontFamily: 'Oxygen-Regular',marginLeft:"2%"}}>City</Text>
</View>
            <View style={{ flexDirection: "row" }}>
            
             


 {/* <Form> */}

                        <Item picker>
            <Icon active 
            type="MaterialCommunityIcons"
            name='map-marker-radius' />
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: "50%" }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected2}
                onValueChange={this.onValueChange2.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
            <Item
             picker>
              <Icon active 
            type="MaterialCommunityIcons"
            name='map-marker' />
              <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                style={{ width: "50%" }}
                placeholder="Select your SIM"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selected3}
                onValueChange={this.onValueChange3.bind(this)}
              >
                <Picker.Item label="Wallet" value="key0" />
                <Picker.Item label="ATM Card" value="key1" />
                <Picker.Item label="Debit Card" value="key2" />
                <Picker.Item label="Credit Card" value="key3" />
                <Picker.Item label="Net Banking" value="key4" />
              </Picker>
            </Item>
          {/* </Form> */}

            </View>
    
            <Item>
            <Icon 
            type="AntDesign"
            active name='gift' />
            <DatePicker
            
              defaultDate={new Date(2018, 4, 4)}
              minimumDate={new Date(2018, 1, 1)}
              maximumDate={new Date(2018, 12, 31)}
              locale={"en"}
              timeZoneOffsetInMinutes={undefined}
              modalTransparent={false}
              animationType={"fade"}
              // androidMode={"default"}
              placeHolderText=""
              textStyle={{ color: "black",  textDecorationLine: "underline", }}
              placeHolderTextStyle={{
                textDecorationLine: "underline",
                marginLeft: "5%",
                color: "black"
              }}
              onDateChange={this.setDate}
              disabled={false}
            />
          </Item>

            <TouchableOpacity
              style={[GlobalStyles.button]}
              // onPress={() => this.register()}
              //  onPress={this.onPress}
            >
              <Text style={GlobalStyles.buttonText}>Edit</Text>
            </TouchableOpacity>

            <View
            style={{height:100}}
            
            >

            </View>
          </ScrollView>
        </View>
        </View>
        <Tab 
                 position={false}

         history={this.props.history} />
      </View>
    );
  }
}

export default UserProfile;
