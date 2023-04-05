import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";
import React from 'react';
import { SafeAreaView,Text,StyleSheet, View, TouchableOpacity,Image } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
//import visa from '../Image/visa.png'
//import mastercard from '../Image/mastercard.png'

const mockCardData1 = {
    cardType: 'visa',
    cardNumber: '4673841982012',
    cardHolderName: 'Ta Panit'
};
const mockCardData2 = {
    cardType: 'mastercard',
    cardNumber: '5173841982013',
    cardHolderName: 'Ta Panit'
};
//const visa1 = Image.resolveAssetSource(visa).uri
//const mastercard1 = Image.resolveAssetSource(mastercard).uri
const cardImages = {
    visa: <Image source={{uri:'https://www.brandbuffet.in.th/wp-content/uploads/2022/01/New-Iconic-Visa-Brand.png'}}/>,
    mastercard: <Image source={{uri:'https://w7.pngwing.com/pngs/23/320/png-transparent-mastercard-credit-card-visa-payment-service-mastercard-company-orange-logo.png'}}/>
};

//const Card =({cardType='', cardNumber='', cardHolderName='', navigation})=>{
const Card = ({ navigation }) => {
    const { cardType: cardType1, cardNumber: cardNumber1, cardHolderName: cardHolderName1 } = mockCardData1;
    const { cardType: cardType2, cardNumber: cardNumber2, cardHolderName: cardHolderName2 } = mockCardData2;
    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.textCard}>Credit/Debit Card</Text>
            <View style={{marginTop:50}}>
                <TouchableOpacity style={styles.Box2}>
                    <Image style={{width:"20%",height:"23%",marginTop:30,marginLeft:10}} source={cardImages[cardType1]} />
                    <Text style={{marginLeft:110, marginTop:-30,fontWeight:'600',fontSize:18}}>*** *** *** {cardNumber1.slice(-4)}</Text>
                    <Text style={{marginLeft:110, marginTop:0,fontSize:16}}>{cardHolderName1}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.Box2}>
                    <Image style={{width:"20%",height:"47%",marginTop:20,marginLeft:15}} source={cardImages[cardType2]} />
                    <Text style={{marginLeft:110, marginTop:-40,fontWeight:'600',fontSize:18}}>*** *** *** {cardNumber2.slice(-4)}</Text>
                    <Text style={{marginLeft:110, marginTop:0,fontSize:16}}>{cardHolderName2}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                style={styles.Box1}
                onPress={() => navigation.navigate('addcard')}> 
                    <Icon name="add" size={22} style={{marginLeft:70,marginTop:5}}/>
                    <Text style={styles.textadd}>Add Credit Card</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
};


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        height: responsiveScreenHeight(100), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
    },
    textCard:{
        fontSize:20,
        fontWeight:"500",
        textAlign:'center',
    },
    Box1:{
        width: 323,
        height:50,
        padding: 10,
        backgroundColor: '#FFFF',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 360,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 4.27,
        elevation: 10,
    },
    Box2:{
        width: 323,
        height:100,
        padding: 10,
        backgroundColor: '#F8F8F8',
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
    textadd:{
        fontSize:18,
        marginTop:-21,
        textAlign:'center',
        marginLeft:35,
        fontWeight:"500"
    },
});

export default Card;
