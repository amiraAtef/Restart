import React ,{Component} from 'react';
import {
  Button,
  Text,
  TextInput,
  Platform,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Picker,
} from 'react-native';
import {DatePicker} from 'native-base'
import { Input } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import {GlobalStyles}from '../../global_styles/globalStyles'
// import RNPickerSelect from 'react-native-picker-select';
import BackNavigator from '../Common/BackNavigator' 
class ContinueSignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: 'Java',
            Nationality:''
          }   
        
          this.state = { chosenDate: new Date() };
          this.setDate = this.setDate.bind(this);
        }
        setDate(newDate) {
            this.setState({ chosenDate: newDate });
          }
    goToFavoriteDay=()=>{
        
        this.props.history.push('/FavoriteDay')}
    render() {
        return (
             <View style={GlobalStyles.Top_AlginmentCMP}>
        <BackNavigator  history={this.props.history}/>
        <Text style={GlobalStyles.H1}>Your Information </Text>
        <Text style={GlobalStyles.H2}>It’s good to Know each other</Text>
        <Input
              onChangeText={value => this.setState({ Nationality: value.trim() })}
              label="Nationality"
              labelStyle={GlobalStyles.lableStyle}
              leftIcon={<Icon name="circle" size={12} color="black" />}
              // errorMessage={emailError}
              style={{ marginTop: "10%" }}
            />
        <View style={{flexDirection:'row'}}>
        <Text style={{width:"50%",fontSize:12,color:'black'}}>Country of Residence</Text>
        <Text style={{width:"50%",fontSize:12,color:'black'}}>City</Text>
</View>

        <View style={{flexDirection:'row'}}>
        <Picker
          style={{width: "50%"}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="ah" value="java" />
          <Picker.Item label="ah" value="js" />
          
        </Picker>
        <Picker
          style={{width: "50%"}}
          selectedValue={this.state.language}
          onValueChange={(lang) => this.setState({language: lang})}>
          <Picker.Item label="ah" value="java" />
          <Picker.Item label="ah" value="js" />
        </Picker>
       
</View>
            <Icon name="angle-down" 
            style={{alignSelf:'flex-end',top:"7%"}}
            size={20}/>
            <Icon name="gift" 
                        style={{top:"7%"}}
            size={18}/>

 <DatePicker
            defaultDate={new Date(2018, 4, 4)}
            minimumDate={new Date(2018, 1, 1)}
            maximumDate={new Date(2018, 12, 31)}
            locale={"en"}
            timeZoneOffsetInMinutes={undefined}
            modalTransparent={false}
            animationType={"fade"}
            // androidMode={"default"}
            placeHolderText="12/12/1993"
            textStyle={{ color: "black" }}
            placeHolderTextStyle={{marginLeft:"5%",  color: "black"  }}
            onDateChange={this.setDate}
            disabled={false}
            />
             <TouchableOpacity
              style={[GlobalStyles.button,{marginTop:"15%"}]}
              onPress={() => this.goToFavoriteDay()}
              //  onPress={this.onPress}
            >
              <Text  style={GlobalStyles.buttonText}>Submit</Text>
            </TouchableOpacity>
            </View>
        );
    }
}

export default ContinueSignUp;