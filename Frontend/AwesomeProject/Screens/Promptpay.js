//by Pattaranan Nuandua 6230300770
import React,{useState} from 'react';
import { View,Text,StyleSheet,Switch, SafeAreaView,Image } from 'react-native';
import Icon1 from 'react-native-vector-icons/Entypo';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Promptpay =()=>{
    const [price,setPrice] = useState('500');
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.Promptpay}>Promptpay</Text>
            <Icon1 size={22} style={{marginLeft:290,marginTop:-22}}name='share-alternative'/>
            <Icon2 size={26} style={{marginLeft:325,marginTop:-24}}name='save-alt'/>
            <Image 
            source = {require("../Image/PP.jpg")}
            style={{width:'50%',height:'25%',alignSelf:'center',marginTop:190}}
            />
            <Text 
            style={{
                fontWeight:500,
                fontSize:16,
                marginTop:40,
                marginLeft:40}}
            >Total Payment: {price} Bath
            </Text>
        </SafeAreaView>
    )
};
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: responsiveScreenHeight(100), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
        flex: 1,
    },
    Promptpay:{
        fontSize:20,
        fontWeight:"500",
        textAlign:'center',
    },
})
export default Promptpay;