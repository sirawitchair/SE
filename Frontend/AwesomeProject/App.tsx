//by Pattaranan Nuandua 6230300770 && Pinit Paethong 6230300729
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Notifications from './Screens/Notification';
import Payment from './Screens/Payment';
import Booking from './Screens/Booking';
import ChargeStation from './Screens/ChargeStation';
import MyProfile from './Screens/MyProfile';
import Card from './Screens/Card';
import AddCard from './Screens/AddCard';
import Terms from './Screens/Terms';
import Promptpay from './Screens/Promptpay';
import keyiot from './Screens/keyiot';
import emergency from './Screens/emergency';
import otp from './Screens/otp';
import Navigation from './Screens/Navigation';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App =()=>{
    return(
        <Navigation/>
    )
}
export default App;