import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import butter from '../apiKey';
import BlogCard from '../components/BlogCard';



const BlogList = ({ navigation }) => {

const [blogData, setBlogData] = useState([]);

const BlogSummary = async () => {
    butter.post.list({ page: 1, page_size: 10 })
    .then(function(resp) {
        setBlogData(resp.data.data);
        console.log(blogData)
    })
  }

useEffect(() => {
    
   BlogSummary();
   
  }, []);


  return (
    <View style={styles.container}>
     
      
        <FlatList 
            
            data={blogData} 
            renderItem={({ item }) => <BlogCard CardData={item} navigation={navigation}/>}
            keyExtractor={(item) => item.title}
            showsVerticalScrollIndicator={false}
            
            />
        <Text>Press Here</Text>
     
    </View>
  )
}

export default BlogList

const styles = StyleSheet.create({
  container:{
    backgroundColor:'#008b8b'
  }
})