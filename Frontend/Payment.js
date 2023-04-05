//by Pattaranan Nuandua 6230300770
import React,{useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity,Image,SafeAreaView} from 'react-native';
import Icon1 from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialCommunityIcons';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Payment =({navigation})=>{
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.Payment}>Payment Method</Text>
            <View style={{marginTop:50}}>
                <TouchableOpacity
                    style={styles.Box1}
                    onPress={() => navigation.navigate('card')}> 
                    <Icon1 size={60} style={styles.icon1}name='credit-card'/>
                    <Text style={styles.textCredit}>Credit/Debit Card</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.Box1}
                    onPress={() => navigation.navigate('promptpay')}> 
                    <Icon2 size={70} style={styles.icon2}name='bank-outline'/>
                    <Text style={styles.textPromptpay}>Promptpay</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};

const styles = StyleSheet.create({
    container:{
        backgroundColor: '#fff',
        height: responsiveScreenHeight(100), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
        flex: 1,
    },
    Payment:{
        fontSize:20,
        fontWeight:"500",
        textAlign:'center',
    },
    Box1:{
        width: 323,
        height:100,
        padding: 10,
        backgroundColor: '#FFFF',
        alignSelf: 'center',
        borderRadius: 10,
        marginBottom:20,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 4.27,
        elevation: 10,
    },
    icon1:{
        marginTop: 10,
        marginLeft: 30,
    },
    icon2:{
        marginTop:5,
        marginLeft: 30,
    },
    textCredit:{
        marginLeft:120,
        marginTop:-40,
        fontSize:18,
        fontWeight:"700"
    },
    textPromptpay:{
        marginLeft:120,
        marginTop:-45,
        fontSize:18,
        fontWeight:'700'
    },
})

export default Payment;