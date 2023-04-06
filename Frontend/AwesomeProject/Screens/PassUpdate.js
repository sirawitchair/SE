import { StyleSheet, View ,SafeAreaView,} from 'react-native'
import { Button, Text,Image,} from '@rneui/themed';


const SignUp2 = ({navigation}) => {
  return (
    <SafeAreaView style={styles.white}>
      <Image source={{uri:'https://cdn.discordapp.com/attachments/1052944598898577468/1093055232327561236/image.png'}} style={styles.container}/>
      <View style={styles.minorAdjust2}> 
        <Text style={styles.bigBlack}>PASSWORD</Text>
        <Text style={styles.bigBlack}>UPDATED</Text>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/159/159594.png'}} style={styles.container2}/>
        
        <Text style={styles.smallBlack}>Your password has been updated!</Text>
      </View>
      <SafeAreaView style={styles.buttonsContainer}>
        <Button
          title="Sign In"
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
          onPress={()=>navigation.navigate('Login')}/>
      </SafeAreaView>
    </SafeAreaView>
  )
}

export default SignUp2

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
    //marginTop: '5%',
    //marginLeft: '5%',
    width: 200, height: 200,
    //marginHorizontal: 50,
    //marginVertical: 10,
    //borderRadius: 30,
  },
  buttonsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
},
  bigBlack: {
    color: 'black',
    fontWeight: 'bold',
    fintSize: 30,
    textAlign: 'center',
    fontSize:30,
    //marginLeft: 10,
  },
  smallBlack: {
    color: 'black',
    fintSize: 10,
    textAlign: 'center',
    fontSize:15,
    //marginLeft: 10,
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
  minorAdjust2:{flexWrap: 'wrap',justifyContent:'center',alignContent: 'center',flexDirection: 'column',marginLeft:'24%'},
});