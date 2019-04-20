import React, { Component } from 'react';
import { Text,ImageBackground} from "react-native";

class OverlayImage extends Component {
    state = {  };

    render() {
        const {style,resizeMode,offerName,source,textStyle,ImageStyle}=this.props
        return (
            <ImageBackground style={[style,{
                position: 'absolute'}]}
                             resizeMode={resizeMode} 
                             source={source}
                             imageStyle={ImageStyle}
                             >
                             {this.props.children}
                    <Text style={textStyle}>{offerName}</Text>
            
            
            </ImageBackground>
        );
    }
}

export default OverlayImage;