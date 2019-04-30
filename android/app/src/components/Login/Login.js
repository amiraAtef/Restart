import React, { Component } from "react";
import { Text, View, Image, TextInput, TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { GlobalStyles } from "../../global_styles/globalStyles";
import { Input, colors } from "react-native-elements";
import BackNavigator from "../Common/BackNavigator";
import { LoginStyles } from "./styles";
class Login extends Component {

  state = {
    email: "",
    emailError: "",
    password: "",
    passwordError: ""
  };
  register=()=>{
    this.props.history.push('/Signup')
  }
  login = () => {
    const{password,email}=this.state
    var regx = /\S+@\S+\.\S+/;
 let error=regx.test(email);
 console.log("error",error)
 if (!error){
    this.setState({
      emailError:'Email is not Valid' ,
    })
  }
  else{
    this.setState({ emailError:'' 
    }) 

  }
  if(password.length>=8 && error){
this.props.history.push('/FavoriteDay')
  }
    if(password.length < 8)
    {
      this.setState({
        passwordError:'Minimum 8 characters ' ,
      });
    } else{
      this.setState({ passwordError:'' 
      }) 
  


  };


}
  render() {
    const{email,password,emailError,passwordError}=this.state
    console.log(emailError)


    return (
      <View style={GlobalStyles.Top_AlginmentCMP}>
              <BackNavigator history={this.props.history}/>

        <Text style={GlobalStyles.H1}>Welcome back </Text>
        <Text style={GlobalStyles.H2}>It’s good to see you again</Text>
        <View style={{ marginTop:"10%" }}>
          <Input
            onChangeText={value => this.setState({ email: value.trim() })}
            label="Email"
            labelStyle={GlobalStyles.lableStyle}
            leftIcon={<Icon name="envelope" size={12} color="black" />}
            errorMessage={emailError}
          />
          <View style={{ marginTop: "10%" }}>
            <Input
                        onChangeText={value => this.setState({ password: value.trim() })}

              label="Password"
              rightIcon={<Icon name="eye" size={12} color="black" />}
              leftIcon={<Icon name="lock" size={12} color="black" />}
              secureTextEntry={true}
              labelStyle={GlobalStyles.lableStyle}
              errorMessage={passwordError}
              errorStyle={GlobalStyles.error}
            />
          </View>
        </View>
        <Text
        
        onPress={()=>{
          this.props.history.push('/ForgetPassword')
        }}
         style={{ alignSelf: "flex-end", marginTop: "2%" ,fontSize:11}}>
          Forget your password
        </Text>
        <TouchableOpacity
          style={[GlobalStyles.button,{marginTop:"10%"}]}
          onPress={() => this.login()}
          //  onPress={this.onPress}
        >
          <Text style={GlobalStyles.buttonText}>Login</Text>
        </TouchableOpacity>
      
          <View style={{flexDirection:'row',justifyContent:'center',marginTop:'5%',height:100}}>
            <Text style={{fontSize:11}}>Don't have an account ?</Text>
            <Text
            onPress={()=>this.register()}
             style={[GlobalStyles.Maincolor,{marginLeft:"3%",fontSize:11}]}>Register</Text>
          </View>
         
      </View>
    );
  }
}

export default Login;
