//by Patchareeporn Sakprom 6230300699
import React from "react";
import { SafeAreaView,View,Text,StyleSheet,Image,TouchableOpacity } from "react-native";
import { Navigation } from 'react-native-navigation';
import { Input } from 'react-native-elements';
import { TextInput } from "@react-native-material/core";
import Icon from 'react-native-vector-icons/FontAwesome5';

const EditName = ({navigation})=>{
    return(
        <SafeAreaView style={styes.container}>
            <View style = {{ flexDirection: 'row', width: '100%', alignItems: 'baseline' }}>
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
                    onPress={() => navigation.navigate('editprofile')}
                />
                 <Text style = {{
                    flex: 1,
                    fontWeight: 'bold',
                    fontSize: 22,
                    textAlign:'center',
                    color: 'black',
                }}>
                    Edit Name
                </Text>
            </View>
            
            <View style = {{ flex: 1, justifyContent: 'center' , width: '100%', height: 60 }}>
                <Input
                    label = 'Name'
                    placeholder = 'Enter Your Name'
                />
            </View>
            
            <View style = {{ flex: 3, justifyContent: 'flex-end', width: '100%' }}>
                <TouchableOpacity
                    style = {{
                        width: '100%',
                        height: 48,
                        padding: 10,
                        backgroundColor: '#000',
                        borderRadius: 15,
                        marginBottom: 30
                    }}
                    onPress = {() => navigation.navigate('')}>
                    <Text style = {{ color: 'white', alignSelf: 'center', fontSize: 18 }}>Save</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

styes = StyleSheet.create({
    container:{
        flex:1,
        margin: 30,
        alignItems: 'center'
    },
})

export default EditName;