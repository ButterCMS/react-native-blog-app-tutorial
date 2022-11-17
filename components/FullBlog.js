import { StyleSheet, Text, View,  useWindowDimensions, SafeAreaView, StatusBar, ScrollView } from 'react-native';
import React from 'react';
import { WebView } from 'react-native-webview';

const Fullblog = ({fdata}) => {

  return (
    <View style={styles.container}>
    
    <WebView style={styles.webstyle} source={{html: fdata }} />
        <Text>Simple shimple!</Text>
    </View>
   
  );
};

export default Fullblog

const styles = StyleSheet.create({
    webstyle : {
            width : 300,
            height : 400,
           
    },

    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 0
    },

})