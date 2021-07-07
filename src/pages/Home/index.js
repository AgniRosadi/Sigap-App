import React, { Component } from 'react';
import { StyleSheet } from 'react-native'
import { WebView } from 'react-native-webview';

class Home extends Component {
  render() {
    return (
      <WebView
        source={{ uri: 'https://sigap.duplicode.my.id/' }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
export default Home;

const styles = StyleSheet.create({})


