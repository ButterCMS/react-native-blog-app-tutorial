import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from '@react-navigation/native';
import BlogList from './screens/BlogList';

import Blog from './screens/Blog';

const Stack = createStackNavigator();

function NavStack() {
  return (
     <Stack.Navigator
        initialRouteName="BlogList"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#008b8b',
          },
          headerTintColor: '#fff',
          headerTitleStyle :{
            fontWeight: 'bold',
          },
        }}
      >
      <Stack.Screen 
        name="BlogList" 
        component={BlogList} 
        options={{ title: 'Blog List' }}
      />
      <Stack.Screen 
        name="Fullblog" 
        component={Blog} 
        options={{ title: 'Full Blog' }}
      />
      
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

console.disableYellowBox = true;

const styles = StyleSheet.create({
 
});
