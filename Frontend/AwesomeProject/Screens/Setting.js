import React from 'react'
import { View, Text, Image,TouchableOpacity,StyleSheet,} from 'react-native'

const Setting = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={{height:75}}>
      </View>
      <TouchableOpacity 
        onPress={()=>navigation.navigate('language')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1383/1383676.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>Language</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity
        //onPress={()=>navigation.navigate('')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1144/1144760.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>My Account</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate('DeleteAccount')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/4534/4534320.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>Delete Account</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        //onPress={()=>navigation.navigate('')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3202/3202926.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>Share you car</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate('Term&Condition')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1819/1819880.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>Terms and Conditions</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate('Privacy Policy')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/2311/2311992.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>Privacy Policy</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate('AboutUs')}
        style={styles.buttonStyle}
        activeOpacity={0.5}>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/3503/3503827.png'}} style={styles.buttonImageIconStyle} />
        </View>
        <View style={{alignItems:'center',flex:0.7}}>
          <Text style={styles.buttonTextStyle}>About EV Go</Text>
        </View>
        <View style={{alignItems:'center',flex:0.15}}>
          <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/271/271228.png'}} style={styles.buttonImageIconStyle} />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={()=>navigation.navigate('Login')}
        style={{flexDirection: 'row',alignItems: 'center',justifyContent:'center',backgroundColor: 'black',borderWidth: 0.5,borderColor: 'black',height: 40,borderRadius: 5,margin: 100,}}
        activeOpacity={0.5}>
        <View style={{alignItems:'center'}}>
          <Text style={{fontSize:25,color:'white'}}>Sign Out</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
    marginTop: 3,
    padding: 3,
    backgroundColor: 'white',
  },
  buttonStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 0.5,
    borderColor: 'black',
    height: 40,
    borderRadius: 5,
    margin: 5,
  },
  buttonImageIconStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode: 'stretch',
  },
  buttonTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight:'bold',
  },
});



export default Setting