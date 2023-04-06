import { StyleSheet, View, SafeAreaView, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native'
import { Button, Text, Image, Icon } from '@rneui/themed';
import React, { useState } from 'react'

const SignUp1 = ({ navigation }) => {
  const [name, setName] = useState('');
  const [userName, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const Finish = (phone) => {
    if (name !== '' && userName !== ''&& password !== '' && !isNaN(phone)&& phone.length===10) {{ navigation.navigate('signup2')
      ;
    }}
    else {
        alert('Invalid Info.');
    
    }
  }
  return (
    <KeyboardAvoidingView style={styles.white}>
      <Image source={{ uri: 'https://cdn.discordapp.com/attachments/1052944598898577468/1093055232327561236/image.png' }} style={styles.container} />
      <SafeAreaView style={styles.minorAdjust2}>
        <Text style={styles.bigBlack}>Sign Up</Text>
        <Text style={styles.smallBlack}>Sign up to get started.</Text>
        <View style={styles.sectionStyle}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/456/456283.png', }} style={styles.imageStyle} />
          <TextInput style={styles.input}
            placeholder="Name"
            onChangeText={newName => setName({ newName })}
            defaultValue={name}
          />
        </View>
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
        <View style={styles.sectionStyle}>
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3059/3059502.png', }} style={styles.imageStyle} />
          <TextInput style={styles.input}
            placeholder="090xxxxxxx"
            onChangeText={phone => setPhone({ phone })}
            defaultValue={phone}
            maxLength={10}
          />
        </View>
      </SafeAreaView>
      <View style={{ justifyContent: 'center' }}>
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
            onPress={Finish} /><Text style={{ color: 'black', fintSize: 10, textAlign: 'center', fontSize: 12, }}>or Sign up with</Text>
        </SafeAreaView>

        <View style={{ flexWrap: 'wrap', justifyContent: 'center', flexDirection: 'row', marginVertical: '5%' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Main')} style={{ marginRight: '5%', }}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/104/104093.png', }} style={styles.container2} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Main')}>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/731/731985.png', }} style={styles.container2} />
          </TouchableOpacity>
        </View>
      </View>
    </KeyboardAvoidingView>
  )
}

export default SignUp1

const styles = StyleSheet.create({
  container: {
    //marginTop: '5%',
    marginLeft: '5%',
    width: 100, height: 100,
    //marginHorizontal: 50,
    //marginVertical: 10,
    borderRadius: 30,
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
  minorAdjust2: { flexWrap: 'wrap', justifyContent: 'center', },
});