import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import React from 'react';
import { Avatar, Button, Card, Title, Paragraph } from 'react-native-paper';
import { format } from "date-fns";

const BlogCard = ({CardData, navigation}) => {

  var date = new Date(CardData.published);

  var formattedDate = format(date, "MMMM do, yyyy H:mma");
    
  return (

    <TouchableOpacity
        onPress={() => {
            navigation.navigate('Fullblog', {
              blogName: CardData.slug
             
            });
        }}
        style={styles.touch}
      >
        <Card>
            <Card.Title title={CardData.author.first_name}   />
            <Card.Content>
              
            <Title>{CardData.title}</Title>
            <Paragraph>{formattedDate}</Paragraph>
            </Card.Content>
            <Card.Cover source={{ uri: CardData.featured_image }} />
            <Card.Actions>
            
            </Card.Actions>
        </Card>
  </TouchableOpacity>
  )
}

export default BlogCard

const styles = StyleSheet.create({
  touch :{
    margin:5
  }
})