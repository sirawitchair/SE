//by Pattaranan Nuandua 6230300770
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { useNavigation } from '@react-navigation/native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const ParentComponent = () => {
    const [componentId, setComponentId] = useState(null);
    const handleNavigation = (event) => {
        setComponentId(event.componentId);
    };
    return (
        <View style={styles.container}>
            <AddCard componentId={componentId} />
        </View>
    );
};


const AddCard = ({componentId }) => {
    const [cardName, setCardName] = useState("");
    const [cardNum, setCardNum] = useState("");
    const [expire, setExpire] = useState("");
    const [CVV, setCVV] = useState("");
    const navigation = useNavigation();
    const handleChange = () => {
        if (cardName === '' || !/^\d{13}$/.test(cardNum) || !/^\d{2}\/\d{2}$/.test(expire) || !/^\d{3}$/.test(CVV)) {
            Alert.alert('Please enter your information.');
            return;
        }
        else {
            //const formattedExpirationDate = expire.replace(/^(\d{2})(\d{0,4})/, '$1/$2');
            let cardType;
            if (/^4/.test(cardNum)) {
                cardType = 'visa';
            }
            else if (/^5[1-5]/.test(cardNum)) {
                cardType = 'mastercard'
            }
            else {
                cardType = 'unknow';
            }
            if(componentId){
                Navigation.push(componentId, {
                    component: {
                        name: 'Card',
                        passProps: {
                            cardType: cardType
                        }
                    }
                })
            }
            navigation.navigate('card')
        }
    };
    const handleCardNum = (text) => {
        const numericText = text.replace(/\D/g, '');
        setCardNum(numericText);
    };
    const handleExpirationDateChangeText = (text) => {
        const numericText = text.replace(/\D/g, '');
        const formattedText = numericText.replace(/^(\d{2})(\d{0,4})/, '$1/$2');
        setExpire(formattedText);
    };
    const handleCVV = (text) => {
        const numericText = text.replace(/\D/g, '');
        setCVV(numericText);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.Newcard} >Add New Card</Text>
            <Text style={styles.textMore}>Name on Card</Text>
            <TextInput
                style={styles.input}
                placeholder="Name on card"
                onChangeText={name => setCardName(name)}
                defaultValue={cardName}
            />
            <Text style={styles.textMore}>Card Number</Text>
            <TextInput
                style={styles.input}
                placeholder="Card Number"
                onChangeText={handleCardNum}
                defaultValue={cardNum}
                maxLength={13}
            //keyboardType="numeric"
            />
            <Text style={styles.textMore}>MM/YY</Text>
            <TextInput
                style={styles.input}
                defaultValue={expire}
                placeholder='MM/YY'
                //keyboardType='numeric'
                maxLength={5}
                //onChangeText={mmyy => setExpire(mmyy)}
                onChangeText={handleExpirationDateChangeText}
                value={expire}
            />
            <Text style={styles.textMore}>CVV</Text>
            <TextInput
                placeholder="CVV"
                onChangeText={handleCVV}
                value={CVV}
                //keyboardType="numeric"
                maxLength={3}
                style={styles.input}
            />
            <Text style={styles.textblah}>We will debit to verify your card first. Debited funds will be
                automatically refunded after adding a credit card. </Text>
            <Text style={styles.textTerms}
                onPress={() => navigation.navigate('terms')}>
                Terms of Services
            </Text>
            <TouchableOpacity
                style={styles.btn}
                //onPress={() => navigation.navigate('card',)}
                onPress={handleChange}
            >
                <Text style={styles.textConfirm}>Confirm</Text>
            </TouchableOpacity>
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
    Newcard: {
        fontSize: 20,
        fontWeight: "500",
        textAlign: 'center',
        marginBottom: 50,
        marginTop: 50,
    },
    textMore: {
        marginLeft: 35,
        marginBottom: 10,
        fontWeight: '500'
    },
    input: {
        alignSelf: 'center',
        borderColor: '#f8f8f8',
        width: 323,
        height: 60,
        borderRadius: 10,
        //margin: 12,
        borderWidth: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 4.27,
        elevation: 10,
        marginBottom: 20
    },
    textblah: {
        fontSize: 10,
        color: '#808080',
        //textAlign:'center',
        marginLeft: 25,
        padding: 10,
        marginTop: 100
    },
    textTerms: {
        fontSize: 10,
        fontWeight: '500',
        marginTop: -22,
        marginLeft: 275
    },
    btn: {
        width: 323,
        height: 60,
        padding: 10,
        backgroundColor: '#000',
        alignSelf: 'center',
        borderRadius: 10,
        marginTop: 30,
        borderRadius: 10,
    },
    textConfirm: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
        padding: 10
    }
})
export default AddCard;