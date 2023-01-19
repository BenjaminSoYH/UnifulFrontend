import {View,Animated, Button, Image, StyleSheet, Text, Dimensions} from "react-native";
import React, { useState, useRef } from "react";



const link1 = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
export const Loading = ({navigation}) => {

    const fadeAnim = useRef(new Animated.Value(0)).current;

    Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 2000,
        useNativeDriver: true
    }).start();

    return (
        <View style={styles.Loadingscreen}>
            <Animated.View style={[
                {
                    opacity: fadeAnim
                }
            ]}>
                <Image
                    style={styles.logo}
                    source={{
                        uri:link1,
                    }}
                />
                <Text style={{fontSize: 50}}>Uniful</Text>

            </Animated.View>
            <Button
                title="Go"
                onPress={() =>
                    navigation.navigate('Page')
                }
            />
        </View>


    )
};

const styles = StyleSheet.create({
    Loadingscreen: {

        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        height: '100%'
    },
    logo: {
        width: windowWidth*0.3,
        height: windowWidth*0.3,
        opacity:5,

    }
})