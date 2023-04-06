//by Patchareeporn Sakprom 6230300699
import React, { useState } from "react";
import { SafeAreaView, Text, StyleSheet, TouchableOpacity, Image, View, ScrollView } from "react-native";
import CheckBox from '@react-native-community/checkbox';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';

import { Box } from "@react-native-material/core";

const BookingSummary = ({ navigation }) => {
    const [carBrand, setcarBrand] = useState('carBrand');
    const [carModel, setcarModel] = useState('carModel');

    const [imgCar, setImgCar] = useState("../assets/teslamodel3.jpg");

    const [duration, setDuration] = useState('1 Day rate');
    const [subtotal, setSubTotal] = useState('฿ xxxx');
    const [total, setTotal] = useState('฿ xxxx');


    const [card, setCard] = useState('Cedit Card');

    const [isSelectedC1, setSelectionC1] = useState(false);
    const [isSelectedC2, setSelectionC2] = useState(false);



    return (
        <SafeAreaView style={styes.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%', height: 45, alignItems: 'center' }}>
                <Icon
                    // iconBack
                    raised
                    name='chevron-left'
                    type='font-awesome'
                    color='black'
                    size={25}
                    onPress={() => navigation.navigate('booking')}
                />
                <Icon
                    // iconInfo
                    raised
                    name='question-circle'
                    type='font-awesome'
                    color='black'
                    size={26}
                    onPress={() => navigation.navigate('')}
                />
            </View>

            {/* <ScrollView> */}
            {/* style = {{ width: '100%', height: '100%'}}  */}
            <View >
                <Box w={'100%'} h={'100%'} style={{ marginTop: 15, backgroundColor: '#E0E0E0', borderRadius: 15 }}>
                    <View style={{ padding: 20 }}>
                        <Text style={{ color: '#000', fontSize: 22, fontWeight: 'bold' }} >{carBrand}</Text>
                        <Text style={{ color: '#000', fontSize: 20 }} >{carModel}</Text>
                        <View style={{ paddingTop: 10, paddingBottom: 10 }}>
                            <Image
                                source={require("../Image/teslamodel3.jpg")}
                                style={{
                                    width: '100%',
                                    height: 180,
                                    borderRadius: 15,
                                }}
                            />
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingBottom: 10 }}>
                            <View>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>{duration}</Text>
                                <Text style={{ color: '#000', fontSize: 15 }}>Subtotal</Text>
                            </View>

                            <View>
                                <Text style={{ color: '#000', fontSize: 15, alignSelf: 'center' }}>{subtotal}</Text>
                                <Text style={{ color: '#000', fontSize: 15 }}>{subtotal}</Text>
                            </View>

                        </View>

                        <View style={{ paddingBottom: 14 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    height: 70,
                                    backgroundColor: '#F8F8F8',
                                    borderRadius: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                                onPress={() => navigation.navigate('')}
                            >
                                <View style={{ justifyContent: 'center', marginStart: 20 }}>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>
                                        Promotion Code
                                    </Text>
                                </View>

                                <View style={{ justifyContent: 'center' }}>
                                    <Icon
                                        style={{ marginEnd: 20 }}
                                        raised
                                        name='chevron-right'
                                        type='font-awesome'
                                        color='black'
                                        size={22}
                                        onPress={() => navigation.navigate('')}
                                    />
                                </View>
                            </TouchableOpacity>

                        </View>
                        <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', paddingBottom: 10 }} >Payment Method</Text>

                        <View style={{ paddingBottom: 14 }}>
                            <TouchableOpacity
                                style={{
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                    width: '100%',
                                    height: 70,
                                    backgroundColor: '#F8F8F8',
                                    borderRadius: 10,
                                    shadowColor: "#000",
                                    shadowOffset: {
                                        width: 0,
                                        height: 2,
                                    },
                                    shadowOpacity: 0.25,
                                    shadowRadius: 3.84,
                                    elevation: 5,
                                }}
                                onPress={() => navigation.navigate('payment')}
                            >
                                <View style={{ justifyContent: 'center', marginStart: 20 }}>
                                    <Text style={{
                                        color: '#000',
                                        fontSize: 15,
                                        fontWeight: 'bold'
                                    }}>
                                        {card}
                                    </Text>
                                </View>

                                <View style={{ justifyContent: 'center' }}>
                                    <Icon
                                        style={{ marginEnd: 20 }}
                                        raised
                                        name='chevron-right'
                                        type='font-awesome'
                                        color='black'
                                        size={22}
                                        onPress={() => navigation.navigate('')}
                                    />
                                </View>
                            </TouchableOpacity>
                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={isSelectedC1}
                                onValueChange={setSelectionC1}
                                style={{
                                    // color: '#000'
                                }}
                            />
                            <Text style={{ color: '#000', alignSelf: 'center' }}>I’ve read and accept.</Text>
                            <Text style={{ color: '#0A22FF', fontWeight: 'bold', alignSelf: 'center' }}
                                onPress={() => navigation.navigate('')}>
                                Terms of Service
                            </Text>

                        </View>

                        <View style={{ flexDirection: 'row' }}>
                            <CheckBox
                                value={isSelectedC2}
                                onValueChange={setSelectionC2}
                                style={{
                                    // color: '#000'
                                }}
                            />
                            <Text style={{ color: '#000', alignSelf: 'center' }}>I’ve read and accept.</Text>
                            <Text style={{ color: '#0A22FF', fontWeight: 'bold', alignSelf: 'center' }}
                                onPress={() => navigation.navigate('')}>
                                Privacy  Policy
                            </Text>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingTop: 10, paddingBottom: 10 }}>
                            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold', alignSelf: 'center' }}>Total Payment</Text>
                            <Text style={{ color: '#000', fontSize: 18, fontWeight: 'bold' }}>{total}</Text>
                        </View>

                    </View>
                    <TouchableOpacity style={{
                        width: 150,
                        padding: 10,
                        backgroundColor: '#000',
                        alignSelf: 'center',
                        borderRadius: 10,
                    }}
                    onPress={() => navigation.navigate('keyiot')}
                    >
                        <Text style={{color:'white',alignSelf:'center'}}>
                            Accept
                        </Text>
                    </TouchableOpacity>
                </Box>
            </View>
            {/* </ScrollView> */}
        </SafeAreaView>
    );
}

styes = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff'
    }
})

export default BookingSummary;

