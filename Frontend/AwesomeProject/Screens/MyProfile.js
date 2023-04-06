//by Patchareeporn Sakprom 6230300699
import React, {useState} from "react";
import { SafeAreaView, Text, Image, StyleSheet, TouchableOpacity, View } from "react-native";
import { ButtonGroup } from '@rneui/themed'
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Box } from "@react-native-material/core";

const MyProfile = ({navigation}) => {
    const textMyBooking = () => <Text style = {{ fontSize: 17, color: selectedIndex===0?'#fff':"#000", fontWeight: 'bold', }}>My booking</Text>
    const textCompleted = () => <Text style = {{ fontSize: 17, color: selectedIndex===1?'#fff':"#000", fontWeight: 'bold', }}>Completed</Text>
    const [selectedIndex, setSelectedIndex] = useState(0);

    const [name, setName] = useState('Sopha Sathaporn');    // name ต้องรับ input เข้ามา

    return(
        <SafeAreaView style = {styes.container}>
            <View style = {{ flex: 1, flexDirection: 'row', justifyContent: 'space-between' , width: '100%' }}>
                <View style = {{ flexDirection: 'row',  gap: 15 }}>
                    <Image 
                        // style = {styes.picUser}
                        // source = {require('../Img/picUser.png')}
                        source = {{
                            uri: 'https://cdn-icons-png.flaticon.com/512/64/64572.png',
                            width: 45,
                            height: 45
                        }}
                    />
                    <Text
                        // style = {styes.textUsername}
                        style = {{
                            fontSize: 20,
                            fontWeight: 'bold',
                            textAlignVertical: 'center',
                            color: 'black'
                        }}
                        onPress={() => navigation.navigate('editprofile')}>
                        {name}
                    </Text>
                </View>

                <View style = {{ flexDirection: 'row', marginTop:-350, alignItems: 'center', gap: 10}}>
                    <Icon
                        // style = {styes.iconNoti}
                        style = {{
                        }}
                        raised
                        name = 'bell'
                        type = 'font-awesome'
                        color = 'black'
                        size = {25}
                        onPress = {() => navigation.navigate('notification')}
                    />
                    <Icon
                        // style = {styes.iconSetting}
                        style = {{
                            // marginTop: 7,
                            // marginRight: 10
                        }}
                        raised
                        name='cog'
                        type='font-awesome'
                        color='black'
                        size={25}
                        onPress={() => navigation.navigate('setting')}
                    />
                    <Icon
                        // style = {styes.iconInfo}
                        style = {{
                            // marginTop: 7,
                            // marginRight: 0
                        }}
                        raised
                        name='question-circle'
                        type='font-awesome'
                        color='black'
                        size={26}
                        onPress={() => navigation.navigate('aboutus')}
                    />
                </View>                     
            </View>

            <View 
                style = {{ 
                    //alignItems: 'center',
                    justifyContent: 'center',
                    width: '100%', 
                    height: 50,
                    marginTop: 30
                }}>
                <ButtonGroup
                    containerStyle = {{
                        borderRadius: 15,
                        width: '100%',
                        height: 50,
                        //marginTop:-700,
                    }}
                    selectedButtonStyle={{ backgroundColor: '#000' }}
                    // buttons = {['My booking', 'Completed']}
                    buttons = {[{ element: textMyBooking }, { element: textCompleted }]}
                    selectedIndex = {selectedIndex}
                    onPress = {(value) => {
                    setSelectedIndex(value);
                    }}
                />
            </View>
            {selectedIndex === 0?
            <TouchableOpacity
                style = {{
                    width: '100%',
                    height: 220,
                    backgroundColor: '#E0E0E0',
                    borderRadius: 15,
                    justifyContent: 'center',
                    marginTop: 20,
                }}
                onPress={() => navigation.navigate('booking')}>
                <Icon
                    // style = {styes.iconInfo}
                    style = {{
                        alignSelf: 'center',
                        marginTop:-680
                    }}
                    raised
                    name = 'plus'
                    type = 'font-awesome'
                    color = 'black'
                    size = {30}
                    onPress={() => navigation.navigate('booking')}
                />
            </TouchableOpacity>:
            <TouchableOpacity
            style = {{
                width: '100%',
                height: 220,
                backgroundColor: '#E0E0E0',
                borderRadius: 15,
                justifyContent: 'center',
                marginTop: 20,
                marginTop:-680
            }}
            onPress = {() => navigation.navigate('')}>
            </TouchableOpacity>}     
        </SafeAreaView>
    )
}

const styes = StyleSheet.create({
    container:{
        flex:1,
        //padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center'
    }

})
export default MyProfile;