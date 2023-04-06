import { StyleSheet, View ,SafeAreaView,TextInput,} from 'react-native'
import { Button, Text, } from '@rneui/themed';
import React, {useState} from 'react'
import {CheckBox} from "react-native-elements";

const CreateNewPass = ({navigation}) => {
  const [inputText, setInputText] = useState('');
  const [q1, setQ1] = useState(false);
  const [q2, setQ2] = useState(false);
  const [q3, setQ3] = useState(false);
  const DA = () => {
    if (inputText === "Delete") {
      navigation.navigate('login');
    } else {
      alert('Please enter the word "Delete" to proceed.');
    }
  }
  return (
    <SafeAreaView style={styles.white}>
    <SafeAreaView style={styles.minorAdjust2}> 
        <Text style={styles.smallBlack}>Why are you deleting your account?</Text>
        <CheckBox
        title="Answer1"
        checked = {q1}
        onPress = {() => setQ1(!q1)}
        checkedIcon = 'dot-circle-o'
        uncheckedIcon = 'circle-o'
        />
        <CheckBox
        title="Answer2"
        checked = {q2}
        onPress = {() => setQ2(!q2)}
        checkedIcon = 'dot-circle-o'
        uncheckedIcon = 'circle-o'
        />
        <CheckBox
        title="Answer3"
        checked = {q3}
        onPress = {() => setQ3(!q3)}
        checkedIcon = 'dot-circle-o'
        uncheckedIcon = 'circle-o'
        />
        <Text style={styles.smallBlack}>Type "Delete" to confirm.</Text>
        <View style={styles.sectionStyle}>
          <TextInput style={styles.input}
            placeholder="Delete"
            onChangeText={(text) => setInputText(text)}
            value={inputText}
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
          onPress={DA}/>
      </SafeAreaView>
      </View>
    </SafeAreaView>
  )
}

export default CreateNewPass

const styles = StyleSheet.create({

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
  
  smallBlack: {
    color: 'black',
    fontWeight: 'bold',
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