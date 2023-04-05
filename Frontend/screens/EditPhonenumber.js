//by Patchareeporn Sakprom 6230300699
import React from "react";
import { SafeAreaView,View,Text,StyleSheet,TouchableOpacity } from "react-native";
import { Input } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome5';

const EditPhonenumber = ({navigation})=>{

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
                    Edit Phone Number
                </Text>
            </View>
            
            <View style = {{ flex: 1, justifyContent: 'center' , width: '100%', height: 60 }}>
                <Input
                    label = 'Phone Number'
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
        flex: 1,
        padding: 30,
        backgroundColor: '#fff'
    }
})

export default EditPhonenumber;