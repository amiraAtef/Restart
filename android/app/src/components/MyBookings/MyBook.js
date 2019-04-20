import React from "react";
import { Text, View, Image } from "react-native";
import { Divider } from 'react-native-elements';

import { GlobalStyles } from "../../global_styles/globalStyles";
export default class MyBook extends React.Component {
  render() {
    return (
      <View style={[GlobalStyles.Row, { paddingLeft: 10, marginTop: "5%" , }]}>
        <View style={{ paddingRight: 18 ,marginTop:"5%"}}>
          <Text style={{ fontSize: 18, fontWeight: "bold",color:'black', fontFamily: "Oxygen-Regular" }}>26</Text>
          <Text style={{ fontSize: 16,color:'black', fontFamily: "Oxygen-Regular" }}>sep</Text>
        </View>

        <View >
          <Text style={{color:'black', fontFamily: "Oxygen-Regular"}}>{`Event Description\n`}</Text>
          <View style={{ flexDirection: "row" }}>
            <View >
              <Text style={{color:'black',alignSelf:'flex-start',         fontFamily: 'Oxygen-Regular'  
}}>{`Quantity`} </Text>
              <Text  style={{color:'black',marginTop:"10%",         fontFamily: 'Oxygen-Regular'  
}}>{`Price`}</Text>
            </View>
            <View style={{marginLeft:"10%",}}>
              <Text  style={{color:'black',fontFamily: "Oxygen-Regular"}}>{`$:1 Pc\n`}</Text>
              <Text  style={{color:'black',fontFamily: "Oxygen-Regular"}}>: {`499.00 SR\n`}</Text>
            </View>
          </View>
        </View>

          <Image style={{marginLeft:"20%",marginTop:"10%"}} source={require('../../main/assets/Images/Cross.png')} />

      </View>
    );
  }
}
