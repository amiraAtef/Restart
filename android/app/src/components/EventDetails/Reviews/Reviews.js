import React, { Component } from 'react';
import {
    Text,
    View,
    Image,
    TouchableHighlight,
    Button,
    ScrollView
  } from "react-native";
  import Review from './Review'
  import { GlobalStyles } from "../../../global_styles/globalStyles";

class Reviews  extends Component {
    state = {  };

    render() {
        return (
            <View style={{height:300,backgroundColor:'#EA8685',borderRadius:50,width:365}} >
              <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            top:60
          }}
        />
                <View style={{flexDirection:'row',padding:20,justifyContent:'space-between'}}>
<Text  style={[GlobalStyles.title,{color:'white'}]} >Reviews</Text>
<Image

style={{left:70,width:17,height:17,top:5}}
    source={require('../../../main/assets/Images/message.png')}
/>
<Text style={[GlobalStyles.title,{color:'white'}]}>

150 K review</Text>
                </View>
<ScrollView>
                <View >
                <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            top:60
          }}
        />
                    <Review/>
                </View>
                <View >
                <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            top:60
          }}
        />
                    <Review/>
                </View>
                <View >
                <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            top:60
          }}
        />
                    <Review/>
                </View>
                <View >
                <View
          style={{
            borderBottomColor: "white",
            borderBottomWidth: 1,
            top:60
          }}
        />
                    <Review/>
                </View>
                </ScrollView>
            </View>
        );
    }
}

export default Reviews;