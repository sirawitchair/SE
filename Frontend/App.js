
import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import keyiot from './screens/keyiot';
import emergency from './screens/emergency';
import otp from './screens/otp';

export default class App extends React.Component{
  constructor(props){
    super(props)
    this.state={
    }
  }
  render() {
    return (
    <NavigationContainer>
      <Stack.Navigator>
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
          name = "otp"
          component = {otp}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>)}}

// const MyStack = () => {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator>
//         <Stack.Screen
//           name="keyiot"
//           component={keyiot}
//           options={{ headerShown: false }}
//         />
//         <Stack.Screen
//           name="emergency"
//           component={emergency}
//           options={{ headerShown: false }}
//         />
//       </Stack.Navigator>
//     </NavigationContainer>
//   )
// };
