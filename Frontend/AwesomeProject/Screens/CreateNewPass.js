import { StyleSheet, View ,SafeAreaView,TextInput,} from 'react-native'
import { Button, Text,Image,Icon, } from '@rneui/themed';
import React, {useState} from 'react'

const CreateNewPass = ({navigation}) => {
  const [npass, setnpass] = useState('');
  const [cpass, setcpass] = useState('');
  const ConfirmPass = () => {
    if ( npass ==='' && cpass ==='') {
      alert('Please check your Password again.');
    } 
    else if(npass != cpass){
      alert('Please check your Password again.');
    }
      else {
      navigation.navigate('passwordupdate');
    }
  }
  return (
    <SafeAreaView style={styles.white}>
     <Image source={{uri:'https://cdn.discordapp.com/attachments/1052944598898577468/1093055232327561236/image.png'}} style={styles.container}/>
    <SafeAreaView style={styles.minorAdjust2}> 
        <Text style={styles.bigBlack}>Create</Text>
        <Text style={styles.bigBlack}>New Password</Text>
        <Text style={styles.smallBlack}>Set the new password for your account</Text>
        <Text style={styles.smallBlack}>so you can login and access all the</Text>
        <Text style={styles.smallBlack}>features. </Text>
        
        <View style={styles.sectionStyle}>
         <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2889/2889676.png',}} style={styles.imageStyle}/>
          <TextInput style={styles.input}
            placeholder="New Password"
            onChangeText={(npass) => setnpass(npass)}
            value={npass}
          />
        </View>
        
        <View style={styles.sectionStyle}>
         <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2889/2889676.png',}} style={styles.imageStyle}/>
          <TextInput style={styles.input}
         placeholder="Confirm Password"
         onChangeText={(cpass) => setcpass(cpass)}
         value={cpass}
        />
        </View>
      </SafeAreaView>
      <View style={{justifyContent:'center'}}>
      <SafeAreaView style={styles.buttonsContainer}>
        <Button
          title="Continue"
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
          onPress={ConfirmPass}/>
      </SafeAreaView>
      </View>
    </SafeAreaView>
  )
}

export default CreateNewPass

const styles = StyleSheet.create({
  container: {
    //marginTop: '5%',
    marginLeft: '5%',
    width: 100, height: 100,
    //marginHorizontal: 50,
    //marginVertical: 10,
    borderRadius: 30,
  },
  
  input: {
    flex:1,
    height: 40,
    margin: 0,
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
    fontSize:30,
    marginLeft: 10,
  },
  smallBlack: {
    color: 'black',
    fintSize: 10,
    textAlign: 'left',
    fontSize:15,
    marginLeft: 10,
  },
  white:{
      flex:1,
      backgroundColor:'white',
      backgroundSize: 'cover',
      backgroundRepeat: 'repeat',
      alignContent: 'center',
      justifyContent:'space-evenly',
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
  },
  sectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#000',
    height: 40,
    margin: 10,
  },
  
  minorAdjust2:{flexWrap: 'wrap',justifyContent:'center',},
});