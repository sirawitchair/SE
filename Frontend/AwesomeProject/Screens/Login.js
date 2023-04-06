import { Animated, StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Button, Text, Image, Icon } from '@rneui/themed';
import React, { useState } from 'react'
const Login = ({ navigation }) => {
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const Finish = () => {
        if (userName == '' & password == '') {
            alert('your Input are empty!.');
        }
        else {
            if (userName == '') { alert('Please enter your E-mail!.'); }
            else if (password == '') { alert('Please enter your password!.'); }
            else { navigation.navigate('BottomTabNavScreenGroup') }
        }
    }
    return (
        <KeyboardAvoidingView style={styles.white}>
            <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1052944598898577468/1093055232327561236/image.png' }} style={styles.container} />
            <SafeAreaView style={styles.minorAdjust}>


                <Text style={styles.bigBlack}>Hello Traveler!</Text>
                <Text style={styles.smallBlack}>Hey! Good to see you again.</Text>

            </SafeAreaView>


            <SafeAreaView style={styles.minorAdjust2}>
                <Text style={styles.bigBlack}>Sign in</Text>
                <View style={styles.sectionStyle}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/646/646094.png', }} style={styles.imageStyle} />
                    <TextInput style={styles.input}
                        placeholder="Email Address"
                        onChangeText={userName => setUsername({ userName })}
                        defaultValue={userName}
                    />
                </View>
                <View style={styles.sectionStyle}>
                    <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/747/747305.png', }} style={styles.imageStyle} />
                    <TextInput style={styles.input}
                        placeholder="Password"
                        onChangeText={password => setPassword({ password })}
                        defaultValue={password}
                    />
                </View>
                <TouchableOpacity style={styles.smallBlack2} onPress={() => navigation.navigate('forgotpass')}>
                    <Text>Forgot Password?</Text>
                </TouchableOpacity>
            </SafeAreaView>
            <View style={{ justifyContent: 'center', marginVertical: '10%' }}>
                <SafeAreaView style={styles.buttonsContainer}>
                    <Button
                        title="Sign in"
                        buttonStyle={{
                            backgroundColor: 'black',
                            borderWidth: 2,
                            borderColor: 'white',
                            borderRadius: 30,
                        }}
                        containerStyle={{
                            width: '90%',
                            marginHorizontal: 50,
                            marginVertical: 10,
                        }}
                        titleStyle={{ fontWeight: 'bold' }}
                        onPress={Finish} />
                    <Text style={{ color: 'black', fintSize: 10, textAlign: 'center', fontSize: 12, }}>or Sign in with</Text>
                </SafeAreaView>

                <View style={{ flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', marginVertical: "5%" }}>
                    <TouchableOpacity onPress={() => navigation.navigate('booking')} style={{ marginRight: '5%', }}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/104/104093.png', }} style={styles.container2} />
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('booking')}>
                        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/731/731985.png', }} style={styles.container2} />
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={styles.smallBlack3} onPress={() => navigation.navigate('signup1')}>
                    <Text>Don't have an Account yet?</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        //marginTop: '5%',
        marginLeft: '5%',
        width: 100, height: 100,
        //marginHorizontal: 50,
        //marginVertical: 10,
        borderRadius: 30,
        //alignSelf: 'flex-start',
    },
    container2: {
        width: 25, height: 25,
        borderRadius: 20,
        //borderWidth:1,
        //borderColor:'black'
    },
    input: {
        flex: 1,
        height: 40,
        margin: 0,
        //borderWidth: 1,
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        width: '100%',
    },
    bigBlack: {
        color: 'black',
        fontWeight: 'bold',
        fintSize: 30,
        textAlign: 'left',
        fontSize: 30,
        marginLeft: 10,
    },
    smallBlack: {
        color: 'black',
        fintSize: 10,
        textAlign: 'left',
        fontSize: 15,
        marginLeft: 10,
    },
    smallBlack2: {
        color: 'black',
        fintSize: 10,
        alignItems: 'flex-end',
        fontSize: 12,
        marginRight: 10,
        textDecorationLine: 'underline'
    },
    smallBlack3: {
        color: 'black',
        fintSize: 10,
        alignItems: 'center',
        fontSize: 12,
        textDecorationLine: 'underline'
    },
    white: {
        flex: 1,
        backgroundColor: 'white',
        backgroundSize: 'cover',
        backgroundRepeat: 'repeat',
        alignContent: 'center',
        justifyContent: 'space-evenly',
        //flexDirection: 'row',
        //rowGap: 0,
        flexWrap: 'wrap',
        width: '100%',
        height: '100%',
    },
    imageStyle: {
        padding: 10,
        margin: 5,
        resizeMode: 'stretch',
        alignItems: 'center',
        //borderRadius: 20,
    },
    sectionStyle: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'E5E5E5',
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#000',
        height: 40,
        margin: 10,
    },
    minorAdjust: { flexWrap: 'wrap', justifyContent: 'space-around', },
    minorAdjust2: { flexWrap: 'wrap', justifyContent: 'center', },
});