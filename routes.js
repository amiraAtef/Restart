import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
import ForgetPassword from "./android/app/src/components/ForgetPassword/ForgetPassword";
import Booking from "./android/app/src/components/Booking/Booking";
import Login from "./android/app/src/components/Login/Login";
import VerificationOTP from "./android/app/src/components/VerificationOTP/Verification";
import { NativeRouter, Route, Link ,Switch } from "react-router-native";
import Header from "./android/app/src/components/Common/Header";
import Categories from "./android/app/src/components/Categories/Categories";
import FavoriteDay from "./android/app/src/components/FavoriteDay/FavoriteDay";
import Offers from "./android/app/src/components/Offers/Offers";
import MyBookings from "./android/app/src/components/MyBookings/MyBookings";
import LoginWithSocial from "./android/app/src/components/SocialmediaLogin/Sociallogin";
import EventDetails from './android/app/src/components/EventDetails/EventDetails'
import OfferDetails from "./android/app/src/components/OfferDetails/OfferDetails";
import Homewithsection from "./android/app/src/components/Home/Homewithsections";
import BottomTabs from "./android/app/src/components/Common/BottomTabs";
import Splash from "./android/app/src/components/Common/Splash";
import Signup from "./android/app/src/components/Signup/Signup";
import ContinueSignUp from "./android/app/src/components/Signup/ContinueSignUp";
import MyBook from "./android/app/src/components/MyBookings/MyBook";
import UserProfile from "./android/app/src/components/UserProfile/UserProfile";
import HomeWithMap from './android/app/src/components/Home/Homewithmap';
import Home from "./android/app/src/components/Home/Home";

class Routes extends Component {
  state = {
    currentComponent:Splash,
  };

  switch=()=>{ setTimeout(
    () => {
    this.setState({currentComponent:LoginWithSocial})
  }, 1000)
}
componentDidMount(){
  this.switch()
}
  render() {
   
    console.log("currentComponent",this.state.currentComponent)
    // console.log(this.props)
    return (
      <NativeRouter>
        <View style={styles.container}>
        <Route exact path="/" component={Home} />
        <Route path="/UserProfile" component={UserProfile} />
        <Route path="/ContinueSignUp" component={ContinueSignUp} />
        <Route path="/Signup" component={Signup} />
         <Route path="/Homewithsection" component={ Homewithsection} />
        <Route path="/HomeWithMap" component={ HomeWithMap} />
        <Route path="/Home" component={ Home} />
        <Route path="/Login" component={Login} />
        <Route exact path="/ForgetPassword" component={ForgetPassword} />
        <Route path="/OfferDetails" component={ OfferDetails} />
        <Route path="/EventDetails" component={ EventDetails} />
          <Route path="/MyBookings" component={ MyBookings} />
          <Route path="/LoginWithSocial" component={ LoginWithSocial} />
          <Route path="/Offers" component={ Offers} />
          <Route path="/Categories" component={ Categories} />
          <Route path="/FavoriteDay" component={FavoriteDay}/>
          <Route path="/Booking" component={Booking} />
          <Route path="/VerificationOTP" component={VerificationOTP} />
          {/* <Route path="/" component={ Header} /> */}
        </View>
      </NativeRouter>
    );
  }
}

export default Routes;

const styles = StyleSheet.create({
  container: {
    // marginTop: 0,
    // padding: 0,
    // backgroundColor: "#FFF6F6"
  }
});
