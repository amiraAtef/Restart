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
        <BackNavigator />
        <Text style={GlobalStyles.H1}>Booking </Text>
     {!confirm &&   (<View>
        <View>
          <Text style={[GlobalStyles.H2, { fontSize: 21 },GlobalStyles.Maincolor]}>
            Offer Description
          </Text>
          <Text
            style={{
              alignSelf: "center",
              marginTop: 49,
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
            style={[
              GlobalStyles.Row_JustifyContent_spaceBetween,
              GlobalStyles.H3
            ]}
          >
            <Image
              style={{ marginLeft: 80 }}
              source={require("../../main/assets/Images/Minus_circle.png")}
            />

            <View>
              <Text style={{ fontSize: 16, fontWeight: "bold",color:'black',  }}>
                {`${1}`} Persons
              </Text>
            </View>
            <Image
              style={{ marginRight: 80 }}
              source={require("../../main/assets/Images/Add_circle.png")}
            />
          </View>
        </View>
        <View
          style={{
            borderBottomColor: "black",
            borderBottomWidth: 1,
            margin: 40
          }}
        />

        <View style={[GlobalStyles.Row_JustifyContent_spaceBetween]}>
          <View style={{ marginLeft: 40 }}>
            <Text style={{ fontSize: 16,color:'black', fontWeight: "bold" }}>Price</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text
              style={[
                { fontSize: 16, fontWeight: "bold" },
                GlobalStyles.Maincolor
              ]}
            >
              250 AED
            </Text>
          </View>
        </View>

        <View
          style={[
            GlobalStyles.Row_JustifyContent_spaceBetween,
            { marginTop: 30 }
          ]}
        >
          <View
            style={{
              marginLeft: 40
            }}
          >
            <Text style={{ fontSize: 16,color:'black', fontWeight: "bold" }}>Total</Text>
          </View>
          <View style={{ marginRight: 40 }}>
            <Text
              style={[
                { fontSize: 16, fontWeight: "bold" },
                GlobalStyles.Maincolor
              ]}
            >
              250 AED
            </Text>
          </View>
        </View>
        <TouchableOpacity 
        onPress={()=>this.ToggleConfirm()}
        style={GlobalStyles.button}>
          <Text style={GlobalStyles.buttonText}>Confirm</Text>
        </TouchableOpacity>
        </View>)}{
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
              style={GlobalStyles.button}
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
