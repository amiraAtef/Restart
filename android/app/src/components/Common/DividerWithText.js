import React, { Component } from 'react';
import { Text, View} from "react-native";


class DividerWithText extends Component {
    state = {  };

    render() {
        return (
            <View style={{flexDirection: 'row'}}>
    <View style={{backgroundColor: '#EA8685', height: 2, flex: 1, alignSelf: 'center'}} />
    <Text style={{ alignSelf:'center', paddingHorizontal:5,color:'white',
   fontFamily: 'Oxygen-Regular',}}>Login With Social Account</Text>
    <View style={{backgroundColor: '#EA8685', height: 2, flex: 1, alignSelf: 'center'}} />
</View>
        );
    }
}

export default DividerWithText ;