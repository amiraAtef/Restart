import React from "react";
import {
  Text,
  View,
  Image,
  Button,
  ScrollView,
  TouchableOpacity
} from "react-native";
import VideoPlayer from "react-native-video-player";
import { responsiveWidth } from "react-native-responsive-dimensions";

export default class ItemDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Pressed: false
    };
  }
  ToggleTabs = () => {
    this.setState({
      Pressed: !this.state.Pressed
    });
  };
  componentDidMount() {
    this.setState({ Pressed: true });
  }
  render() {
    const { Pressed } = this.state;
    console.log("Pressed", Pressed);
    return (
      <View style={{ flexDirection: "row" }}>
        <View style={{ width: "15%" }}>
          <Text
            onPress={() => this.ToggleTabs()}
            style={{
              transform: [{ rotate: "-90deg" }],
              color:Pressed?"black":"gray",

              top: "20%",
              fontSize: 11
            }}
          >
            Video
          </Text>

          <Text
            onPress={() => this.ToggleTabs()}
            style={{
              transform: [{ rotate: "-90deg" }],
              top: "60%",
              fontSize: 11,
              color:!Pressed?"black":"gray",
            }}
          >
            Photos
          </Text>
        </View>
        <View style={{ width: "100%" }}>
          <ScrollView horizontal={true}>
            {Pressed ? (
              <View style={{ flexDirection: "row" ,borderRadius:10 }}>
                <View style={{ padding: "1%", width: 300 }}>
                  <VideoPlayer
                    fullScreenOnLongPress
                    video={{
                      uri:
                        "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                    }}
                    videoWidth={500}
                    videoHeight={300}
                    loop={false}
                    thumbnail={require("../../main/assets/Images/DumyImage.jpg")}
                    //   endWithThumbnail={Platform.OS === 'ios'}
                  />
                </View>
                <View style={{ padding: "1%", width: 300 }}>
                  <VideoPlayer
                    fullScreenOnLongPress
                    video={{
                      uri:
                        "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                    }}
                    videoWidth={500}
                    videoHeight={300}
                    loop={false}
                    thumbnail={require("../../main/assets/Images/DumyImage.jpg")}
                    //   endWithThumbnail={Platform.OS === 'ios'}
                  />
                </View>
              </View>
            ) : (
              <View
                style={{ flexDirection: "row" }}
              >
                <Image
                  style={{ borderRadius: 10,marginRight:10,height:200}}
                  source={require("../../main/assets/Images/Logo.png")}
                />
                <Image
                  style={{ borderRadius: 10,marginRight:10,height:200}}
                  source={require("../../main/assets/Images/Logo.png")}
                />
                 <Image
                  style={{ borderRadius: 10,marginRight:10,height:200}}
                  source={require("../../main/assets/Images/Logo.png")}
                />
              </View>
            )}
          </ScrollView>
        </View>
      </View>
    );
  }
}
