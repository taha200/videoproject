/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, { Component } from 'react';
import { View, Text, Button,StyleSheet} from 'react-native';
//import VideoPlayer from 'react-native-video-player';
import VideoPlayer from 'react-native-video-controls';

const VIMEO_ID = '179859217';

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      video: { width: undefined, height: undefined, duration: undefined },
      thumbnailUrl: undefined,
      videoUrl: undefined,
    };
  }

  // componentDidMount() {
  //   global.fetch(`https://player.vimeo.com/video/${VIMEO_ID}/config`)
  //     .then(res => res.json())
  //     .then(res => this.setState({
  //       thumbnailUrl: res.video.thumbs['640'],
  //       videoUrl: res.request.files.hls.cdns[res.request.files.hls.default_cdn].url,
  //       video: res.video,
  //     }));
  // }

  render() {
    return (
    
  
        <VideoPlayer
    source={{ uri: 'https://vjs.zencdn.net/v/oceans.mp4' }}
    
/>
       
    
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
