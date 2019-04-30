import React, { Component } from "react";
import { Text, View,Image,TouchableOpacity  } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Icon5 from 'react-native-vector-icons/FontAwesome5';


import { GlobalStyles } from "../../global_styles/globalStyles";
class Header extends Component {
  state = {};

  render() {
    const { Heading } = this.props;
    console.log(Heading);

    return (
      <View style={GlobalStyles.Row_alignItems_baseline}>
    <TouchableOpacity 
            style={{width:"10%"}}>
        <Icon
          size={40}
          name={"angle-left"}
          style={{ fontWeight: 50 }}
          color="black"
          onPress={()=>{this.props.history.goBack()}}
        />
        </TouchableOpacity>
        <Text
          style={{
            alignSelf: "center",
            marginLeft: "auto",
            marginRight: "auto",
            fontSize: 20,
            color: "#EA8685"
          }}
        >
          {Heading ? `${Heading}` : "Favorite Day"}
        </Text>
        {
          Heading =="Event Details" ||  Heading =="Offer Details" ? (  
            <Image 
            style={{right:20,width:30,height:30}}
            source={require('../../main/assets/Images/Share.png')}
        /> 
                 
          ) : (
            <View />
          )
        }
{
          Heading =="Event Details"  || Heading =="Offer Details" ? (  
            <Icon
          size={30}
          name={"star-o"}
          style={{ fontWeight: 50 ,right:"20%"}}
          color="#EA8685"
        /> 
                 
          ) : (
            <View />
          )
        }
      </View>
    );
  }
}

export default Header;
