import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
  ScrollView,
  TouchableOpacity
  } from "react-native";
  import { GlobalStyles } from "../../global_styles/globalStyles";
  import Header from "../Common/Header";
  import Offer from './Offer'
  import { responsiveHeight } from "react-native-responsive-dimensions";

class Offers  extends Component {
    state = {  };
    offerDetails = () => {
        this.props.history.push("/OfferDetails");
      };
    render() {
        return (
            <View style={[GlobalStyles.Top_AlginmentCMP]}>
            <Header history={this.props.history}  Heading="Offers"/>
            <View style={{ height: responsiveHeight(90), marginTop: "15%" }}>

            <ScrollView> 
            <TouchableOpacity
            onPress={()=>{
                this.offerDetails()
            }}
            
            >
<Offer history={this.props.history}/>
</TouchableOpacity>
   <TouchableOpacity
            onPress={()=>{
                this.offerDetails()
            }}
            
            >
<Offer history={this.props.history}/>
</TouchableOpacity>
   <TouchableOpacity
            onPress={()=>{
                this.offerDetails()
            }}
            
            >
<Offer history={this.props.history}/>
</TouchableOpacity>
   <TouchableOpacity
            onPress={()=>{
                this.offerDetails()
            }}
            
            >
<Offer history={this.props.history}/>
</TouchableOpacity>

            </ScrollView>
            </View>
            </View>
        );
    }
}

export default Offers;