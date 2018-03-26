import React, { Component } from 'react';
import { Image, ScrollView } from 'react-native';
import { Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text, Card, CardItem} from 'native-base';

import Video from "react-native-video";

const VideoCard = () => {
  return (

    <ScrollView>

      <Content>

        <Card>
          <CardItem cardBody>
           <Image source={{uri: 'https://usatftw.files.wordpress.com/2017/05/ap_cavaliers_raptors_basketball_90744086.jpg?w=1000&h=1293'}} style={{height: 400, width: null, flex: 1}}/>
          </CardItem>

          <CardItem>
            <Body>
            </Body>
          </CardItem>

          <CardItem>
            <Left>
              <Button small dark>
                <Text>Set Take Off</Text>
              </Button>
            </Left>

            <Body>
              <Button small dark>
                <Text>Set Landing</Text>
              </Button>
            </Body>

            <Right>
              <Text>Time</Text>
            </Right>
          </CardItem>

        </Card>

        <Card>
          <Content>

            <CardItem cardBody>
              <Text>Your Hang Time is:</Text>
              <Text> 20 inches</Text>
            </CardItem>

            <CardItem>
              <Button danger>
                <Text>Calculate Vertical</Text>
              </Button>
            </CardItem>

          </Content>
        </Card>

      </Content>
    </ScrollView>
  );
};

export default VideoCard;
