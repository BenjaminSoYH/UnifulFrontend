import React, { useState, useRef } from "react";
import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableWithoutFeedback,
  Dimensions,
  Animated,
  Button,
  StatusBar
} from "react-native";

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Loading} from "./screens/Loadingscreen";
import {Homepage} from "./screens/Homepage";


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Stack = createNativeStackNavigator();



const MyStack = () => {
  return (
      <NavigationContainer>
        <Stack.Navigator   screenOptions={{
          headerShown: false
        }}>
          <Stack.Screen name="Home" component={Loading}  />
          <Stack.Screen name="Page" component={Homepage} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};

const styles = StyleSheet.create({

});



export default MyStack;