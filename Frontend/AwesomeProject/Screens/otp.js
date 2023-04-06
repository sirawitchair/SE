import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';

const Otp = ({ navigation }) => {
    return (
        <View>
            <Text style={{ marginTop: 50, fontWeight: '700', fontSize: 22, textAlign: 'center' }}>
                OTP
            </Text>
            <TouchableOpacity style={{
                width: 150,
                padding: 10,
                backgroundColor: '#000',
                alignSelf: 'center',
                borderRadius: 10,
                marginTop:700,
            }}
            onPress={() => navigation.navigate('myprofile')}>
                <Text style={{ color: 'white', alignSelf: 'center' }}>
                    Accept
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const Style = StyleSheet.create({
    iconContainer: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        flex: 0.1,
        backgroundColor: 'white'
    },
    icon: {
        width: 15,
        height: 15,
    },
});

export default Otp;