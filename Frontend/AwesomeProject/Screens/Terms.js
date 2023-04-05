//by Pattaranan Nuandua 6230300770
import React,{useState} from 'react';
import { View,Text,StyleSheet,Switch } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Terms =()=>{
    return(
        <View style={styles.container}>
            <Text>Terms of Services</Text>
        </View>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: responsiveScreenHeight(100), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
        flex: 1,
    },
})
export default Terms;