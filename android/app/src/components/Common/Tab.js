import React, { Component } from "react";
import { Text, View, TouchableHighlight,Dimensions } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import BottomNavigation, {
  FullTab
} from 'react-native-material-bottom-navigation'
const { width, height } = Dimensions.get("window");
import { responsiveHeight ,responsiveWidth} from "react-native-responsive-dimensions";

class Tab extends Component {
   tabs = [
    {
      key: 'Home',
      icon: 'th-large',
      label: 'Home',
      barColor: '#FFFAFA',
      pressColor: 'rgba(250,235,215, 0.16)'
    },
    {
      key: 'Offer',
      icon: 'shopping-cart',
      label: 'Offers',
      barColor: '#FFFAFA',
      pressColor: 'rgba(250,235,215,0.16)'
    },
    {
      key: 'Profile',
      icon: 'user',
      label: 'Profile',
      barColor: '#FFFAFA',
       pressColor: 'rgba(250,235,215, 0.16)'
    },
     {
      key: 'Settings',
      icon: 'ellipsis-h',
      label: 'Settings',
      barColor: '#FFFAFA',
      pressColor: 'rgba(250,235,215, 0.16)'
    }
  ]
  state = {
    currentPressed: "Home",
    profilePressed: false,
    homePressed: false,
    settingsPressed: false,
    offerPressed: false
  };

  renderIcon = icon => ({ isActive }) => (
    <Icon 
    size={20} color="#FF6666" name={icon} />
  )
 
  renderTab = ({ tab, isActive }) => (
    <FullTab
      isActive={isActive}
      key={tab.key}
      labelStyle={{color:'black'}}
      label={tab.label}
      renderIcon={this.renderIcon(tab.icon)}

    />
  )
 Navigation=(newTab)=>{
   console.log("newTab",newTab)
   if(newTab.key=="Profile")
   {

     this.props.history.push('/UserProfile')
   }
   if(newTab.key=="Offer")
   {
     this.props.history.push('/Offers')
   }
   if(newTab.key=="Home")
   {
     //1st time
     this.props.history.push('/Home')
    //  this.props.history.push('/FavoriteDay')
   }
   if(newTab.key=="Settings")
   {
     this.props.history.push('/MyBookings')
   }
  this.setState({ activeTab: newTab.key })
 }
  render() {
    const { profilePressed } = this.state;
    const {history}=this.props
    console.log("profilePressed",profilePressed,history)
   return (
        <BottomNavigation
      backgroundColor="#FFFAFA"
labelColor="white"
        rippleColor="white"
        style={{ width:width
        ,height: "10%", elevation: 1, position: 'absolute', left: 0, bottom: 0, right: 0 }}
          onTabPress={(newTab) =>this.Navigation(newTab)}
          renderTab={this.renderTab}
          tabs={this.tabs}
          shifting={true}
        />
    )  
  }
}

export default Tab;
