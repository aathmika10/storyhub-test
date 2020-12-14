import React, {Component} from 'react';
import {  View,Text ,TextInput,StyleSheet,TouchableOpacity} from 'react-native';
import { Header } from 'react-native-elements';
import db from '../Config';
import * as firebase from 'firebase'

export default class WriteStoryScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
    title:'',
    author:'',
    storyText:''
    }
  }

submitStory=()=>{
  db.collection("stories").add({
    "title":this.state.title,
        "author":this.state.author,
        "story_Text":this.state.storyText
  })
    this.setState({
      title:'',
      author:'',
      storyText:''
    })
 
}

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
       <TextInput 
          style ={styles. storyTitleTextInput}
          placeholder = "Story Title"
          onChangeText={(text)=>{
            this.setState({
                title:text
            })
        }}/>
        <TextInput 
          style ={styles.authorTextInput}
          placeholder = "Author"
          onChangeText={(text)=>{
            this.setState({
                author:text
            })
        }}/>
          <TextInput
          style={styles.writeYourStoryTextInput}
          placeholder = "Write Your Story"
          onChangeText={(text)=>{
            this.setState({
                storyText:text
            })
        }}
          />
         <TouchableOpacity
            style = {styles.SubmitButton}
            onPress={this.submitStory}
           >
            <Text>SUBMIT</Text>
          </TouchableOpacity>
     </View>
      );
    }
  }
  const styles = StyleSheet.create({
 
    storyTitleTextInput:{
      borderWidth:2,
      height:30,
      width:700,
      marginLeft:350,
      marginTop:30,
    },
    authorTextInput:{
        borderWidth:2,
        height:30,
        width:700,
        marginLeft:350,
        marginTop:30,
      }, 
    writeYourStoryTextInput:{
        borderWidth:2,
        height:300,
        width:700,
        marginLeft:350,
        marginTop:30,
      },
      SubmitButton:{
        borderWidth:1,
        height:30,
        width:50,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'pink',
        marginLeft:650,
        marginTop:30
      }
})