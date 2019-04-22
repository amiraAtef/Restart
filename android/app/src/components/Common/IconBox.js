import React, { Component } from 'react';
import { Text, View} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";


class IconBox extends Component {
    state = {  };

    render() {
        const{icon}=this.props
        return (
  <View style={{ borderRadius:10, width:"30%",height:"100%",borderColor:'#EA8685',borderWidth:1}}>
<Icon name={`${icon}`} size={42} color="white" style={{alignSelf:'center',padding:"6%"}}/>
            </View>
        );
    }
}

export default IconBox;