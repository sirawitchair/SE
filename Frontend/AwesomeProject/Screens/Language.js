import React from 'react'
import { View, Text, TouchableOpacity,StyleSheet,} from 'react-native'


const Language = ({navigation}) => {
  
  return (
    <View style={styles.container}>
      <View style={{height:75}}>
      </View>
      <TouchableOpacity 
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('setting')}>
        <View style={{alignItems:'center',flex:1}}>
          <Text style={styles.buttonTextStyle}>English</Text>
        </View>
      </TouchableOpacity>
      
      <TouchableOpacity 
        style={styles.buttonStyle}
        activeOpacity={0.5}
        onPress={() => navigation.navigate('setting')}>
        <View style={{alignItems:'center',flex:1}}>
          <Text style={styles.buttonTextStyle}>ไทย</Text>
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
  buttonTextStyle: {
    color: 'black',
    fontSize: 20,
    fontWeight:'bold',
  },
});
export default Language