import React, { Component } from 'react';
import {Image} from 'react-native'
import { Container, Header,Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
export default class FooterTabs extends Component {
  render() {
    return (
  
        <Footer>
          <FooterTab>
            <Button vertical>
            {/* <Icon name="camera" /> */}

          <Image
              source={require('../../main/assets/Images/HomePressed.png')}
              /> 
              <Text>Apps</Text>
            </Button>
            <Button vertical>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>
            <Button vertical active>
              <Icon active name="navigate" />
              <Text>Navigate</Text>
            </Button>
            <Button vertical>
              <Icon name="person" />
              <Text>Contact</Text>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}