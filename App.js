import React, { Component } from 'react';
import { Image, ScrollView, View } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem} from 'native-base';

import CustomHeader from './src/CustomHeader';
import VideoCard from './src/VideoCard'

import RNCameraRoll from 'react-native-cameraroll'

export default class VertApp extends Component {

  _handleButtonPress = () => {
   RNCameraRoll.getPhotos({
       first: 20,
       assetType: 'Photos',
     })
     .then(r => {
       this.setState({ photos: r.edges });
     })
     .catch((err) => {
        //Error Loading Images
     });
   };

  render() {

    return (

      <Container>

        <CustomHeader headerText={'Vert It'}/>

        <VideoCard/>

        <Footer>
          <FooterTab>

            <Button full warning>
              <Icon name="camera" />
              <Text>Camera</Text>
            </Button>

            <Button full warning onPress={this._handleButtonPress}>
              <Text>Camera Roll</Text>
            </Button>

          </FooterTab>
        </Footer>

      </Container>
    );
  }
}
