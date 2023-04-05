//by Pattaranan Nuandua 6230300770
import React,{useState} from 'react';
import { View,Text,StyleSheet,Switch } from 'react-native';
import {
    responsiveScreenHeight,
    responsiveScreenWidth,
    responsiveScreenFontSize
} from "react-native-responsive-dimensions";

const Notification =()=>{
    const [isEnabled1, setIsEnabled1] = useState(false);
    const [isEnabled2, setIsEnabled2] = useState(false);
    const [isEnabled3, setIsEnabled3] = useState(false);
    const [isEnabled4, setIsEnabled4] = useState(false);
    const [isEnabled5, setIsEnabled5] = useState(false);
    const [isEnabled6, setIsEnabled6] = useState(false);
    const [isEnabled7, setIsEnabled7] = useState(false);
    const [isEnabled8, setIsEnabled8] = useState(false);
    const [isEnabled9, setIsEnabled9] = useState(false);
    const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
    const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
    const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
    const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);
    const toggleSwitch5 = () => setIsEnabled5(previousState => !previousState);
    const toggleSwitch6 = () => setIsEnabled6(previousState => !previousState);
    const toggleSwitch7 = () => setIsEnabled7(previousState => !previousState);
    const toggleSwitch8 = () => setIsEnabled8(previousState => !previousState);
    const toggleSwitch9 = () => setIsEnabled9(previousState => !previousState);
    return(
        <View style={styles.container}>
            <Text style={styles.Noti}>Notifications</Text>
            <View>
                <Text style={styles.Promo}>Promotion</Text>
                <View style={styles.Box1}>
                    <Text style={styles.More}>Notify</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled1 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch1}
                        value={isEnabled1}
                        />
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.More}>Email</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled2 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch2}
                        value={isEnabled2}
                        />
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.More}>SMS</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled3 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch3}
                        value={isEnabled3}
                        />
                </View>
            </View>
            <View>
                <Text style={styles.Promo}>New Update</Text>
                <View style={styles.Box1}>
                    <Text style={styles.More}>Notify</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled4 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch4}
                        value={isEnabled4}
                        />
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.More}>Email</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled5 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch5}
                        value={isEnabled5}
                        />
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.More}>SMS</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled6 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch6}
                        value={isEnabled6}
                        />
                </View>
            </View>
            <View>
                <Text style={styles.Promo}>Tips</Text>
                <View style={styles.Box1}>
                    <Text style={styles.More}>Notify</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled7 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch7}
                        value={isEnabled7}
                        />
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.More}>Email</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled8 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch8}
                        value={isEnabled8}
                        />
                </View>
                <View style={styles.Box1}>
                    <Text style={styles.More}>SMS</Text>
                    <Switch
                        style={{ marginLeft:243, marginTop:-25,}}
                        trackColor={{false: '#767577', true:'#4ED164'}}
                        thumbColor={isEnabled9 ? '#ffff' : '#f4f3f4'}
                        ios_backgroundColor="#f4f3f4"
                        onValueChange={toggleSwitch9}
                        value={isEnabled9}
                        />
                </View>
            </View>
        </View>
    )
};
const styles = StyleSheet.create({
    container:{
        //marginTop:50,
        backgroundColor:'#fff',
        height: responsiveScreenHeight(100), // 50% of Screen height
        width: responsiveScreenWidth(100), // 50% of Screen width
    },
    Noti:{
        marginTop:50,
        fontSize:20,
        fontWeight:"500",
        textAlign:'center',
    },
    Promo:{
        fontSize:18,
        marginTop:28,
        fontWeight:"500",
        marginLeft:45,
    },
    More:{
        fontSize:16,
        marginLeft:30,
        marginTop:15,
    },
    Box1:{
        width:323,
        height:46,
        backgroundColor: '#FFFF',
        borderRadius:10,
        marginLeft:35,
        marginTop:10,
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.34,
        shadowRadius: 4.27,
        elevation: 10,
    }
})

export default Notification;