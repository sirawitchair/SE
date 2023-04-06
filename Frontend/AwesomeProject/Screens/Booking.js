//by Patchareeporn Sakprom 6230300699
import React, {useState} from "react";
import { SafeAreaView,Text,StyleSheet,TouchableOpacity,Image,View,Alert, Modal,Pressable,ScrollView } from "react-native";
import { Picker } from '@react-native-picker/picker';
import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
// import {LocaleConfig} from 'react-native-calendars';
import Icon from 'react-native-vector-icons/FontAwesome5';
// import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import { ButtonGroup } from '@rneui/themed'

const Booking = ({navigation})=>{
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [selectedDate, setSelectedDate] = useState('DD-MM');
    const [startDate, setStartDate] = useState('DD / MM / YY');
    const [endDate, setEndDate] = useState('DD / MM / YY');
    // const [selectedDay, setSelectedDay] = useState('Days');
    
    const textDate = () => {
        const [modalDate, setModalDate] = useState(false);
        const [Date, setDate] = useState('');
        
        return (
            <SafeAreaView >
        
                <View >
                    <Modal
                        animationType="slide"
                        transparent={true}
                        visible={modalDate}
                        onRequestClose={() => {
                            // Alert.alert('Modal has been closed.');
                            setModalDate(!modalDate);
                        }}>
                        <View style = {styes.modalDate}>
                            <View
                                style = {{
                                    width: '100%',
                                    height: '100%',
                                    backgroundColor: '#404040',
                                    borderRadius: 15
                                    // justifyContent: 'center',
                                
                                }}>
                                <View style = {{ flex:1, borderRadius: 15, backgroundColor: '#000', }} >
                                    <Text
                                        style = {{
                                            color: '#fff',
                                            fontSize: 16,
                                            fontWeight: 'bold',
                                            textAlign: 'center',
                                            padding: 14
                                        }}>
                                            Calender
                                    </Text>
                                    <View style = {{ flexDirection: 'row', justifyContent: 'space-around' }}>
                                        <View>
                                            <Text style = {{ color: '#ffffff', alignSelf: 'center' }}>Start Date</Text>
                                            <Text style = {{ color: '#ffffff' }}>{startDate}</Text>
                                        </View>

                                        <View>
                                            <Text style = {{ color: '#ffffff', alignSelf: 'center' }}>End Date</Text>
                                            <Text style = {{ color: '#ffffff' }}>{endDate}</Text> 
                                        </View>

                                    </View>
                                </View>
                                <Pressable
                                    style={{ flex:4, borderRadius: 15, backgroundColor: '#404040' }}
                                    onPress={() => setModalDate(!modalDate)}>
                                    <Calendar
                                        style = {{
                                            width: '100%',
                                            // backgroundColor: ''
                                        }}
                                        theme={{
                                            // backgroundColor: '#fff',
                                            calendarBackground: '#404040',
                                            textSectionTitleColor: '#ffffff',
                                            selectedDayBackgroundColor: '#ffffff',
                                            selectedDayTextColor: '#ffffff',
                                            todayTextColor: '#00adf5',
                                            dayTextColor: '#ffffff',
                                            textDisabledColor: '#696969',
                                            selectedDotColor: 'red',
                                            monthTextColor: '#ffffff'
                                        }}
                                        onDayPress={day => {
                                            setDate(day.dateString);
                                        }}
                                        markedDates={{
                                            [Date]: {Date: true, disableTouchEvent: true}
                                        }}
                                    />
                                    <View style = {{ flexDirection: 'row', justifyContent: 'center', paddingTop: 20 }}>
                                        <TouchableOpacity
                                            style = {{
                                                width: 70,
                                                padding: 10,
                                                backgroundColor: '#D9D9D9',
                                                marginBottom: 20,
                                                borderRadius: 18
                                            }}
                                            onPress={() => setModalDate(!modalDate)}>
                                            <Text style = {{ color: '#000', alignSelf: 'center'}}>Save</Text>
                                        </TouchableOpacity>
                                    </View>
                                </Pressable>
                            </View>
                        </View>
                    </Modal>
                </View>

                <Pressable
                    style = {{ flexDirection: 'row', width: '100%' }}
                    onPress={() => setModalDate(true)}>
                    <Text style = {{
                        width: '100%',
                        flex: 1,
                        fontSize: 17, 
                        color: '#fff', 
                        // fontWeight: 'bold',
                        paddingStart: 18,
                    }}>
                        {/* onPress={() => console.log('Date')}> */}
                        {selectedDate}
                    </Text>
                </Pressable>

            </SafeAreaView>
        );
    };

    const textDay = () => {
        const [selectedDay, setSelectedDay] = useState('1 Day');

        return (
            // style = {{ flexDirection: 'row', width: '100%' }}
            <View style = {{ width: '100%'}}>
                <Picker
                    mode = 'dropdown'
                    style = {{
                        color: '#fff',
                        width: 214,
                        borderRadius: 15
                    }}
                    selectedValue = {selectedDay}
                    onValueChange={(itemValue) => setSelectedDay(itemValue)}
                >
                    <Picker.Item label="1 Day" value="1 Day" />
                    <Picker.Item label="3 Days" value="3 Days" />
                    <Picker.Item label="5 Days" value="5 Days" />
                    <Picker.Item label="1 Week" value="1 Week" />
                    <Picker.Item label="1 Month" value="1 Month" />
                    <Picker.Item label="6 Months" value="6 Months" />
                    <Picker.Item label="12 Months" value="12 Months" />
                </Picker>
                {/* <IconFontAwesome
                    style = {{
                        paddingEnd: 18,
                    }}
                    raised
                    name = 'caret-down'
                    type = 'font-awesome'
                    color = '#fff'
                    size = {26}
                /> */}
            </View>
        );  
    };

    return(
        // style={[styes.container,{backgroundColor:"red",padding:30}]} #
        <SafeAreaView style={styes.container}>
            <View>
                <View style = {{ flexDirection: 'row', justifyContent: 'flex-end', width: '100%', height: 45, alignItems: 'center' }}>
                    <Icon
                        name='question-circle'
                        //type='font-awesome'
                        color='black'
                        size={26}
                        onPress={() => navigation.navigate('')}
                    />
                </View>
                
                <View style = {{ 
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%', 
                        height: 50,
                        marginTop: 15,
                        marginBottom: 18,
                    }}>
                    <ButtonGroup
                        containerStyle = {{
                            borderRadius: 15,
                            width: '100%',
                            height: 50,
                            backgroundColor: '#000'
                        }}
                        selectedButtonStyle = {{ backgroundColor: '#000' }}
                        buttons = {[{ element: textDate }, { element: textDay }]}
                        selectedIndex = {selectedIndex}
                        onPress = {(value) => {
                        setSelectedIndex(value);
                        }}
                    />
                </View>
                
                <ScrollView>

                {/* height: '100%' */}
                <View style = {{ flexDirection: 'column', gap: 18, width: '100%', marginBottom: 120   }}>
                    <View style = {{ width: '100%' }}>
                        <View style = {{ width: '100%' }}>
                            <TouchableOpacity
                                style = {{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 15,
                                    justifyContent: 'center',
                                }}
                                onPress={() => navigation.navigate('bookingSummary')}>
                                
                                <Image
                                    source = {require("../Image/teslamodel3.jpg")}
                                    // source={{ uri: 'https://hips.hearstapps.com/hmg-prod/images/2019-tesla-model3-lt-airporthero-low-101-1587061146.jpg?crop=1xw:1xh;center,top&resize=2048:*',
                                    style = {{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View
                            style = {{
                                position: 'absolute',
                                zIndex: 1,
                                flex: 3,
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                            <TouchableOpacity
                                style = {{
                                    width: 120,
                                    padding: 10,
                                    backgroundColor: '#000',
                                    marginBottom: 20,
                                    borderRadius: 15,

                                }}
                                //onPress={() => console.log('bookingSummary')}>
                                onPress={() => navigation.navigate('bookingSummary')}>
                                <Text style = {{ color: 'white', alignSelf: 'center', }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    
                    <View style = {{ width: '100%' }}>
                        <View style = {{ width: '100%' }}>
                            <TouchableOpacity
                                style = {{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 15,
                                    justifyContent: 'center'
                                }}
                                onPress={() => navigation.navigate('')}
                                >
                                <Image
                                    source={require("../Image/teslamodelY.jpg")}
                                    style = {{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View
                            style = {{
                                position: 'absolute', 
                                zIndex: 1,
                                flex: 3,
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                            <TouchableOpacity
                                style = {{
                                    width: 120,
                                    padding: 10,
                                    backgroundColor: '#000',
                                    marginBottom: 20,
                                    borderRadius: 15,
                                }}
                                onPress={() => navigation.navigate('bookingSummary')}>
                                <Text style = {{ color: 'white', alignSelf: 'center', }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {{ width: '100%' }}>
                        <View style = {{ width: '100%' }}>
                            <TouchableOpacity
                                style = {{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 15,
                                    justifyContent: 'center'
                                }}
                                onPress={() => navigation.navigate('')}
                                >
                                
                                <Image
                                    source = {require("../Image/teslamodelS.jpg")}
                                    style = {{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View
                            style = {{
                                position: 'absolute', 
                                zIndex: 1,
                                flex: 3,
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                            <TouchableOpacity
                                style = {{
                                    width: 120,
                                    padding: 10,
                                    backgroundColor: '#000',
                                    marginBottom: 20,
                                    borderRadius: 15,
                                }}
                                onPress={() => navigation.navigate('bookingSummary')}>
                                <Text style = {{ color: 'white', alignSelf: 'center', }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style = {{ width: '100%' }}>
                        <View style = {{ width: '100%' }}>
                            <TouchableOpacity
                                style = {{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 15,
                                    justifyContent: 'center'
                                }}
                                onPress={() => navigation.navigate('')}>
                                <Image
                                    source = {require("../Image/teslaRoadster.jpg")}
                                    style = {{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View
                            style = {{
                                position: 'absolute', 
                                zIndex: 1,
                                flex: 3,
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                            <TouchableOpacity
                                style = {{
                                    width: 120,
                                    padding: 10,
                                    backgroundColor: '#000',
                                    marginBottom: 20,
                                    borderRadius: 15,

                                }}
                                onPress={() => navigation.navigate('bookingSummary')}>
                                <Text style = {{ color: 'white', alignSelf: 'center', }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View style = {{ width: '100%' }}>
                        <View style = {{ width: '100%' }}>
                            <TouchableOpacity
                                style = {{
                                    width: '100%',
                                    height: 220,
                                    borderRadius: 15,
                                    justifyContent: 'center'
                                }}
                                onPress={() => navigation.navigate('')}>
                                <Image
                                    source = {require("../Image/teslamodelX.jpg")}
                                    style = {{
                                        width: '100%',
                                        height: 220,
                                        borderRadius: 15,
                                        overflow: 'hidden',
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        
                        <View
                            style = {{
                                position: 'absolute', 
                                zIndex: 1,
                                flex: 3,
                                width: '100%',
                                height: '100%',
                                alignItems: 'center',
                                justifyContent: 'flex-end'
                            }}>
                            <TouchableOpacity
                                style = {{
                                    width: 120,
                                    padding: 10,
                                    backgroundColor: '#000',
                                    marginBottom: 20,
                                    borderRadius: 15,

                                }}
                                onPress={() => navigation.navigate('bookingSummary')}>
                                <Text style = {{ color: 'white', alignSelf: 'center', }}>Book Now</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

const styes = StyleSheet.create({
    container: {
        flex: 1,
        padding:30,
        backgroundColor:"#fff"
    },
    modalDate: {
        flex:1,
        padding:30,
        flexDirection: 'column',
        marginTop: 120
    },
    // pickerDay: {
    //     flexDirection: 'row',
    //     width: '100%'
    // }
})
export default Booking;