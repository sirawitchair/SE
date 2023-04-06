//by Pattaranan Nuandua 6230300770 && Pinit Paethong 6230300729
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Notifications from './Notification';
import Payment from './Payment';
import Booking from './Booking';
import ChargeStation from './ChargeStation';
import MyProfile from './MyProfile';
import Card from './Card';
import AddCard from './AddCard';
import Terms from './Terms';
import Promptpay from './Promptpay';
import keyiot from './keyiot';
import emergency from './emergency';
import otp from './otp';
import Setting from './Setting';
import Language from './Language';
import Aboutus from './Aboutus';
import Login from './Login';
import Delete from './Delete';
import Map from './Map';
import Signup1 from './Signup1';
import Signup2 from './Signup2';
import Forgotpassword from './Forgotpassword';
import CreateNewPass from './CreateNewPass';
import PassUpdate from './PassUpdate';

//import Privacy from './Privacy';

//const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const BottomTabNavScreenGroup = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName = '';
                    switch (route.name) {
                        case 'booking':
                            iconName = 'book-online';
                            break;
                        case 'chargestation':
                            iconName = 'location-on';
                            break;
                        case 'myprofile':
                            iconName = 'account-circle';
                            break;
                    }
                    return <Icon name={iconName} size={size} color='black' />;
                },
            })}>
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name="booking"
                component={Booking}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name="chargestation"
                component={ChargeStation}
            />
            <Tab.Screen
                options={{
                    headerShown: false,
                }}
                name="myprofile"
                component={MyProfile}
            />
        </Tab.Navigator>
    );
}

const MainStackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="BottomTabNavScreenGroup"
                component={BottomTabNavScreenGroup}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="notification"
                component={Notifications}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="addcard"
                component={AddCard}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="payment"
                component={Payment}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="card"
                component={Card}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="terms"
                component={Terms}
            />
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="promptpay"
                component={Promptpay}
            />
            <Stack.Screen
                name="keyiot"
                component={keyiot}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="emergency"
                component={emergency}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="otp"
                component={otp}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="setting"
                component={Setting}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="aboutus"
                component={Aboutus}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="language"
                component={Language}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="delete"
                component={Delete}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="map"
                component={Map}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="signup1"
                component={Signup1}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="signup2"
                component={Signup2}
                options={{ headerShown: false }}
            />
            <Stack.Screen
               name="forgotpass"
               component={Forgotpassword}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="createnewpass"
                component={CreateNewPass}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="passwordupdate"
                component={PassUpdate}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}
const Navigation = () => {
    return (
        <NavigationContainer>
            <MainStackScreen />
        </NavigationContainer>
    )
}
export default Navigation;