import React,{ useState, useEffect } from 'react';
import {StyleSheet, View, Text, Image,TouchableOpacity, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
export default class Keyiot extends React.Component{
  constructor(props){
    super(props)
    this.state={
      status:'Lock',
      // status2:'Unlock',
      color:'red',
    }
  }
  setStatusLock=()=>{
    if(this.state.status == 'Unlock'){
      this.setState({status:'Lock'})
    }
    else{
      this.setState({status:'Lock'})
    }

    if(this.state.color == 'green'){
      this.setState({color:'red'})
    }
    else{
      this.setState({color:'red'})
    }
  }
  setStatusUnLock=()=>{
    if(this.state.status == 'Lock'){
      this.setState({status:'Unlock'})
    }
    else{
      this.setState({status:'Unlock'})
    }

    if(this.state.color == 'red'){
      this.setState({color:'green'})
    }
    else{
      this.setState({color:'green'})
    }
  }
  render(props){
    // navigate is here------------------------
    const { navigation } = this.props;
    //-----------------------------------------
    return(
      <View
      style={[styles.container,{
// Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
        <TouchableOpacity style={styles.iconContainer}>
          <Image source={{uri :'https://i.ibb.co/0ndFL15/back.png'}}
            style={styles.icon} />
        </TouchableOpacity>
      <View style={{flex: 2.5,backgroundColor: 'white',flexDirection:'column'}}>
        <View style={{flex:4,marginTop:5,alignItems:'flex-start',flexDirection:'row'}}>
          <View style={{flex:1,marginLeft:25,marginTop:11,alignItems:'flex-start'}}>
            <Text style = {{fontWeight: 'bold',fontSize: 16}}>
              TESLA MODEL Y
            </Text>
          </View>
          <View style={{flex:0.4,marginLeft:25,marginTop:14.3,backgroundColor:'white'}}>
            <Text style = {{fontWeight: 'bold',fontSize: 14}}>
              2กท 7014
            </Text>
          </View>
        </View>  
      </View>

      <View style={{flex: 5.1, backgroundColor: 'lightgray',flexDirection:'column',borderRadius: 4,}}>
        <View style={{flex:1,alignItems:'flex-start',flexDirection:'row'}}>
          <View style={{flex:1,marginLeft:15,marginTop:10,alignItems:'flex-start'}}>
            <Text style = {{fontWeight: 'bold',fontSize: 15}}>
              Status : 
            </Text>
          </View>
          <View style={{flex:4.9,marginTop:10,alignItems:'flex-start'}}>
            <Text style={{color : this.state.color,fontWeight: 'bold',fontSize: 15}}>
              {this.state.status} 
            </Text>
          </View>
        </View>
        <View style={{flex:1,marginLeft:15,marginTop:1,alignItems:'flex-start',flexDirection:'row'}}>
          <View style={{flex:1,alignItems:'flex-start'}}>
            <Text style = {{fontWeight: 'bold',fontSize: 15}}>
              Time remaining : 
            </Text>
          </View>
          <View style={{flex:1.8,alignItems:'flex-start'}}>
            <Text style={{fontWeight: 'bold',fontSize: 15}}>
              0 d  17 Hr  20 Min 
            </Text>
          </View>
        </View>
        <View style={{flex:1,alignItems:'flex-start',marginTop:-10,flexDirection:'row'}}>
          <View style={{flex:1,marginLeft:17,alignItems:'flex-start'}}>
            <Text style={{fontWeight: 'bold',fontSize: 15}}>
              Location : 
            </Text>
          </View>
          <View style={{flex:3.6,alignItems:'flex-start'}}>
            <Text style={{fontWeight: 'bold',fontSize: 15}}>
              sukhumvit Rd. Tung..
            </Text>
          </View>
        </View>
      </View>


      <View style={{flex: 1.2, backgroundColor: 'white',alignItems:'center'}}>
      </View>
      <View style={{flex: 3.2, backgroundColor: 'white',alignItems:'center'}}>
        <Text style={{fontWeight: 'bold',fontSize: 14,color : 'green'}}>
        CONNECTED
        </Text>
      </View>


      <View style={{flex: 6.9, backgroundColor: 'white',flexDirection:'row'}}>
        
        <TouchableOpacity style={styles.iconlocker1} onPress = {this.setStatusLock}  >
          <Image source={{uri :'https://i.ibb.co/Bg92F94/padlock.png'} }
            style={styles.iconlockstatus} />
        </TouchableOpacity>

        <TouchableOpacity style={styles.iconlocker2} onPress = {this.setStatusUnLock} >
          <Image source={{uri :'https://i.ibb.co/1LFjPLR/padlock-1.png'}}
            style={styles.iconlockstatus} />
        </TouchableOpacity>

      </View>


      <View style={{flex: 7, backgroundColor: 'white'}}>
        <TouchableOpacity style={styles.emergency} onPress={() => navigation.navigate('emergency')}> 
          <Image source={{uri :'https://i.ibb.co/sjGjNXy/emergency.png'}}
            style={styles.iconlockstatus} />
        </TouchableOpacity>
      </View>


      <TouchableOpacity style={styles.press_here} onPress={() => navigation.navigate('otp')}>
        <Text style={{fontWeight: 'bold',fontSize: 26,color : 'white'}}>
          Finish Trip
        </Text>
      </TouchableOpacity>

      <View style={{flex: 2.2, backgroundColor: 'white'}}>
      </View>
    </View>
  );
  }
}

// const Keyiot = ({navigation}) => {
//   var status = 'Locked'
//   // var status2 = 'Unlock'
//   let c = 'red'
//   setstatus = () => {
//     if (status == 'Locked'){
//       console.log("wow")
//       status = 'Unlocked'
//       console.log(status)
//       c = 'green'
//     }
//     else{
//       console.log("no")
//       status = 'Locked'
//       console.log(status)
//       c = 'red'
//     }
//   }

//   return (
//     <View
//       style={[
//         styles.container,
//         {
//           // Try setting `flexDirection` to `"row"`.
//           flexDirection: 'column',
//         },
//       ]}>
//         <TouchableOpacity style={styles.iconContainer}>
//           <Image source={{uri :'https://i.ibb.co/0ndFL15/back.png'}}
//             style={styles.icon} />
//         </TouchableOpacity>
//       <View style={{flex: 2.5,backgroundColor: 'white',flexDirection:'column'}}>
//         <View style={{flex:4,marginTop:5,alignItems:'flex-start',flexDirection:'row'}}>
//           <View style={{flex:1,marginLeft:25,marginTop:11,alignItems:'flex-start'}}>
//             <Text style = {{fontWeight: 'bold',fontSize: 16}}>
//               TESLA MODEL Y
//             </Text>
//           </View>
//           <View style={{flex:0.4,marginLeft:25,marginTop:14.3,backgroundColor:'white'}}>
//             <Text style = {{fontWeight: 'bold',fontSize: 14}}>
//               2กท 7014
//             </Text>
//           </View>
//         </View>  
//       </View>

//       <View style={{flex: 5.1, backgroundColor: 'lightgray',flexDirection:'column',borderRadius: 4,}}>
//         <View style={{flex:1,alignItems:'flex-start',flexDirection:'row'}}>
//           <View style={{flex:1,marginLeft:15,marginTop:10,alignItems:'flex-start'}}>
//             <Text style = {{fontWeight: 'bold',fontSize: 15}}>
//               Status : 
//             </Text>
//           </View>
//           <View style={{flex:4.9,marginTop:10,alignItems:'flex-start'}}>
//             <Text style={{color : c,fontWeight: 'bold',fontSize: 15}}>
//               {status} 
//             </Text>
//           </View>
//         </View>
//         <View style={{flex:1,marginLeft:15,marginTop:1,alignItems:'flex-start',flexDirection:'row'}}>
//           <View style={{flex:1,alignItems:'flex-start'}}>
//             <Text style = {{fontWeight: 'bold',fontSize: 15}}>
//               Time remaining : 
//             </Text>
//           </View>
//           <View style={{flex:1.8,alignItems:'flex-start'}}>
//             <Text style={{fontWeight: 'bold',fontSize: 15}}>
//               0 d  17 Hr  20 Min 
//             </Text>
//           </View>
//         </View>
//         <View style={{flex:1,alignItems:'flex-start',marginTop:-10,flexDirection:'row'}}>
//           <View style={{flex:1,marginLeft:17,alignItems:'flex-start'}}>
//             <Text style={{fontWeight: 'bold',fontSize: 15}}>
//               Location : 
//             </Text>
//           </View>
//           <View style={{flex:3.6,alignItems:'flex-start'}}>
//             <Text style={{fontWeight: 'bold',fontSize: 15}}>
//               sukhumvit Rd. Tung..
//             </Text>
//           </View>
//         </View>
//       </View>


//       <View style={{flex: 1.2, backgroundColor: 'white',alignItems:'center'}}>
//       </View>
//       <View style={{flex: 3.2, backgroundColor: 'white',alignItems:'center'}}>
//         <Text style={{fontWeight: 'bold',fontSize: 14,color : 'green'}}>
//         CONNECTED
//         </Text>
//       </View>


//       <View style={{flex: 6.9, backgroundColor: 'white',flexDirection:'row'}}>
        
//         <TouchableOpacity style={styles.iconlocker1} onPress = {setstatus}  >
//           <Image source={{uri :'https://i.ibb.co/Bg92F94/padlock.png'} }
//             style={styles.iconlockstatus} />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.iconlocker2} onPress = {setstatus} >
//           <Image source={{uri :'https://i.ibb.co/1LFjPLR/padlock-1.png'}}
//             style={styles.iconlockstatus} />
//         </TouchableOpacity>

//       </View>


//       <View style={{flex: 7, backgroundColor: 'white'}}>
//         <TouchableOpacity style={styles.emergency} onPress={() => navigation.navigate('emergency')}> 
//           <Image source={{uri :'https://i.ibb.co/sjGjNXy/emergency.png'}}
//             style={styles.iconlockstatus} />
//         </TouchableOpacity>
//       </View>


//       <TouchableOpacity style={styles.press_here}>
//         <Text style={{fontWeight: 'bold',fontSize: 26,color : 'white'}}>
//           Finish Trip
//         </Text>
//       </TouchableOpacity>

//       <View style={{flex: 2.2, backgroundColor: 'white'}}>
//       </View>
//     </View>
//   );
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  iconContainer: {
    width: 50,
    height: 100,
    //borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1,
    backgroundColor:'white'
  },
  icon: {
    width: 15,
    height: 15,
  },
  iconlockstatus: {
    width: 50,
    height: 50,
    alignItems: 'center',
  },
  iconlocker1:{
    marginLeft:45,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 140,
    backgroundColor: 'lightgray',
  },
  iconlocker2:{
    marginLeft:30,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 140,
    backgroundColor: 'lightgray',
  },
  emergency:{
    marginLeft:130,
    width: 140,
    height: 140,
    justifyContent: 'center',
    alignItems: 'center',
  },
  press_here:{
    flex: 2.5,
    backgroundColor: 'purple',
    alignItems:'center',
    justifyContent: 'center',
    borderRadius: 25
  }
});


