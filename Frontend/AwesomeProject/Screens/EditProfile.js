//by Patchareeporn Sakprom 6230300699
import React, {useState}from "react";
import { SafeAreaView,Text,StyleSheet,Image,TouchableOpacity, View } from "react-native";
import { Navigation } from 'react-native-navigation';
// import { Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EditProfile =({navigation})=>{
    const [nameUser, setNameUser] = useState('Sopha Sathaporn');    // name ต้องรับ input เข้ามา
    const [codeNum, setcodeNum] = useState('+66');    // ควรจะเลือกได้
    const [phoneNum, setphoneNum] = useState('123 456 789');    // phoneNum ต้องรับ input เข้ามา

    return(
        <SafeAreaView style={styes.container}> 
            <View style = {{ flexDirection: 'row', width: '100%' }}>
                <Icon
                    // style = {styes.iconBack}
                    style = {{
                        position: 'absolute', 
                        zIndex: 1,
                        height: '100%'
                    }}
                    raised
                    name = 'chevron-left'
                    type = 'font-awesome'
                    color = 'black'
                    size = {25}
                    // onPress={() => console.log('Myprofile')}
                    onPress={() => navigation.navigate('Myprofile')}
                />
                 <Text style = {{
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 22,
                    textAlign:'center',
                    color: 'black',
                }}>
                    Edit profile
                </Text>
            </View>

            <View
                // style = { styes.picUserEditProile }>
                style = {{
                    justifyContent: 'center',
                    alignItems: 'center',
                    flex: 3
                }}>
                <Image
                    // source = {require('../Img/picUser.png')}
                    source = {{ uri: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
                    width: 100,
                    height: 100,
                }}
                />
            </View>
            
            <View style = {{ flex: 6, justifyContent: 'flex-start', width: '100%' }}>
                <TouchableOpacity
                    style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 70,
                        marginBottom: 12,
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
                    onPress={() => navigation.navigate('editname')}
                    >
                    <View style = {{ justifyContent: 'center', marginStart: 20 }}>
                        <Text style = {{
                            color: '#B8B8B8', 
                            fontSize: 15, 
                            paddingBottom: 3
                        }}>
                            Name
                        </Text>
                        <Text style = {{ 
                            color: '#606060', 
                            fontSize: 18
                        }}>
                            {nameUser}
                        </Text>
                    </View>
                    
                    <View style = {{ justifyContent: 'center' }}>
                        <Icon 
                            style = {{ marginEnd: 20 }}
                            raised
                            name='chevron-right'
                            type='font-awesome'
                            color='black'
                            size={22}
                            onPress={() => navigation.navigate('editname')}
                        />
                    </View>
                </TouchableOpacity>

                <TouchableOpacity
                    style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 70,
                        marginBottom: 12,
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
                    onPress = {() => navigation.navigate('editphonenumber')}>

                    <View style = {{ justifyContent: 'center', marginStart: 20 }}>
                        <Text style = {{
                            color: '#B8B8B8',
                            fontSize: 15,
                            paddingBottom: 3
                        }}>
                            Phone Number
                        </Text>

                        <View style = {{ flexDirection: 'row', justifyContent: 'center' }} >
                            <Text style = {{ color: '#606060', fontSize: 18, fontWeight: 'bold' }} >{codeNum}</Text>
                            <Text style = {{ color: '#606060', fontSize: 18, marginLeft: 12}} >{phoneNum}</Text>
                        </View>
                    </View>

                    <View style = {{ justifyContent: 'center' }}>
                        <Icon style = {{ margin: 20 }}
                            raised
                            name = 'chevron-right'
                            type = 'font-awesome'
                            color = 'black'
                            size = {22}
                            onPress = {() => navigation.navigate('editphonenumber')}
                        />
                    </View>

                </TouchableOpacity>

                <TouchableOpacity
                    style = {{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        width: '100%',
                        height: 70,
                        marginBottom: 10,
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
                    onPress={() => navigation.navigate('card')}>

                    <View style = {{ justifyContent: 'center', marginStart: 20 }}>
                        <Text style={{ color: '#B8B8B8', fontSize: 15, paddingBottom: 3}}>Payment</Text>
                        <Text style={{ color: '#606060', fontSize: 18}} >Add your credit card</Text>
                    </View>
                    
                    <View style = {{ justifyContent: 'center' }}>
                    <Icon style = {{ margin: 20 }}
                        raised
                        name='chevron-right'
                        type='font-awesome'
                        color='black'
                        size={22}
                        onPress={() => navigation.navigate('card')}
                    />
                    </View>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

styes = StyleSheet.create({
    container:{
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center'
    },

})

export default EditProfile;