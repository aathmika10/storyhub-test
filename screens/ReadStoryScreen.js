import React from 'react';
import {  View,Text,StyleSheet } from 'react-native';
import { Header } from 'react-native-elements';

export default class ReadStoryScreen extends React.Component {
    render() {
      return (
          <View>
        <Header
        backgroundColor={'#7e35a8'}
        centerComponent={{
          text: 'Story Hub',
          style: { color: '#fff', fontSize: 20 },
        }}
      />
      <Text style ={styles. text}>READ A STORY</Text>
      </View>
      );
    }
  }
  const styles = StyleSheet.create({
 text: {
    marginLeft:20,
    marginTop: 20,
    fontSize:20
  },
})