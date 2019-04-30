import React, { Component } from "react";
import BackNavigator from "../Common/BackNavigator";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import { GlobalStyles } from "../../global_styles/globalStyles";

class Booking extends Component {
  state = {
  confirm:false
  };
ToggleConfirm=()=>{
    this.setState({
        confirm:true
    })
  
}
goHome=()=>{
    this.props.history.push('/')
}
  render() {
      const{confirm}=this.state
    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
        <BackNavigator  history={this.props.history}/>
        <Text style={GlobalStyles.H1}>Booking </Text>
     {!confirm &&   (<View>
        <View>
          <Text style={[GlobalStyles.H2, { fontSize: 18 },GlobalStyles.Maincolor]}>
            Offer Description
          </Text>
          <Text
            style={{
              alignSelf: "center",
              marginTop: "5%",
              width: 350,
              height: 69
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis.
          </Text>
          <View
            style={{flexDirection:'row',paddingTop:"5%",justifyContent:'space-between'}}
          >
            <Image
              style={{ marginLeft:"20%" }}
              source={require("../../main/assets/Images/Minus_circle.png")}
            />

            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold",color:'black',  }}>
                {`\u00A0\u00A0\u00A0\u00A0${1}\u00A0Persons\u00A0\u00A0\u00A0\u00A0`} 
              </Text>
            </View>
            <Image
              style={{ marginRight: "20%" }}
              source={require("../../main/assets/Images/Add_circle.png")}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: "3%"
          }}
        />

        <View style={[GlobalStyles.Row_JustifyContent_spaceBetween]}>
          <View style={{ marginLeft: "20%" }}>
            <Text style={{ fontSize: 14,fontFamily: 'Oxygen-Regular',color:'black', fontWeight: "bold" }}>Price</Text>
          </View>
          <View style={{ marginRight: "20%"}}>
            <Text
              style={[
                { fontSize: 14, fontWeight: "bold" ,fontFamily: 'Oxygen-Regular',},
                GlobalStyles.Maincolor
              ]}
            >
              250 AED
            </Text>
          </View>
        </View>

        <View
          style={
            {flexDirection:"row",justifyContent:"space-between", marginTop: "10%" }
          }
        >
          <View
            style={{
              marginLeft: "20%"
            }}
          >
            <Text style={{ fontSize: 14,color:'black',fontFamily: 'Oxygen-Regular', fontWeight: "bold" }}>Total</Text>
          </View>
          <View style={{ marginRight: "20%" }}>
            <Text
              style={[
                { fontSize: 14, fontWeight: "bold" },
                GlobalStyles.Maincolor
              ]}
            >
              250 AED
            </Text>
          </View>
        </View>
        <TouchableOpacity 
        onPress={()=>this.ToggleConfirm()}
        style={[GlobalStyles.button,{marginTop:"10%"}]}>
          <Text style={GlobalStyles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        </View>)}
        
        
        
        
        {
            confirm&&(
                <View>
            <Text style={GlobalStyles.H2}>{`Confirmation sent to your \n registered email`}</Text>
            <View style={{ alignSelf:'center',marginTop: 20 }}>

            <Image
              style={{ alignSelf: "center", width: 170, height: 170 }}
              source={require("../../main/assets/Images/Verified.png")}
            />
            </View>

            <TouchableOpacity
              style={[GlobalStyles.button,{marginTop:"15%"}]}
              onPress={() => this.goHome()}
              //  onPress={this.onPress}
            >
              <Text  style={GlobalStyles.buttonText}>Home</Text>
            </TouchableOpacity>
          </View>
            )
        }
      </View>
    );
  }
}

export default Booking;
