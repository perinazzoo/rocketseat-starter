import React from 'react';
import {WebView} from 'react-native-webview';

const Twitter = ({navigation}) => (
  <WebView source={{uri: navigation.state.params.member.twitterUrl}} />
);

Twitter.navigationOptions = ({navigation}) => ({
  title: `Twitter: ${navigation.state.params.member.name}`,
});

export default Twitter;
