
import {Dimensions, FlatList, Image, StyleSheet, Text, View} from "react-native";
import { Button} from 'react-native-paper';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const Homepage = (navigation) => {
    return (

            <View style={{flex: 1}}>

                <View style={{flex: 10, backgroundColor: 'rgb(252, 201, 3)', padding:16}} >

                </View>

                <View style={styles.lowercontainer}>

                    <View style={{backgroundColor: 'rgb(237, 237, 206 )',flex:1,flexDirection:"column"}}>

                    </View>
                    <View style={{backgroundColor: 'rgb(250, 237, 206 )',flex:1,flexDirection:"column"}}>
                    </View>
                    <View style={{backgroundColor: 'rgb(200, 237, 206 )',flex:1,flexDirection:"column"}}>
                    </View>

                </View>
                <View style={{flex: 1, backgroundColor: 'rgb(237, 237, 206 )', padding:16,flexDirection:"row"}} >

                </View>

            </View>

    )
}

const styles = StyleSheet.create({
    background: {

        width: windowWidth,
        height: windowHeight*0.3,
    },
    logo: {
        width: windowWidth*0.3,
        height: windowWidth*0.3,
        opacity:5,
    },

    box: {
        padding:10,
        width: 50,
        height: 50,
        backgroundColor:"red",
    },
    lowercontainer: {
        flex: 20,
        backgroundColor: 'rgb(255, 255, 230)',
        padding:20,
        flexDirection:"row"
    },
    itemz :{
        backgroundColor: 'rgb(100,100,100)',
        flex:1
    }
})