import { StyleSheet, Text, View, Dimensions  } from 'react-native';
import React, { useState, useEffect } from 'react';
import Fullblog from '../components/FullBlog';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import butter from '../apiKey';

var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full height

const Blog = ({route}) => {

    //calling parameter passed through the route
    const {blogName} = route.params;

    //define state for the full post
    const [fullPost, setFullPost] = useState('');

    //function to retrive posts
    const blogBody = async () => {
        butter.post.retrieve(blogName)
        .then(function(resp) {
            setFullPost(resp.data.data.body);
            console.log(fullPost)
        })
      }

    useEffect(() => {
        blogBody();
       
      }, []);

  return (
    <View style={styles.container}>
      <Fullblog fdata={fullPost} />
    </View>
  )
}

export default Blog

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        alignSelf: 'stretch',
        textAlign: 'center',
        margin: 5
    }
})