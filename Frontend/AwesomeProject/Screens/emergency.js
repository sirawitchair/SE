import React from 'react';
import {StyleSheet, View, Text,Image,TouchableOpacity} from 'react-native';

const Emergency = ({navigation}) => {
  return (
    <View
      style={[
        styles.container,
        {
          // Try setting `flexDirection` to `"row"`.
          flexDirection: 'column',
        },
      ]}>
      <View style={{flex: 1.3, backgroundColor: 'white',flexDirection:'row'}}>
        <TouchableOpacity style={styles.iconContainer} onPress={() => navigation.navigate('keyiot')}>
          <Image source={{uri :'https://i.ibb.co/0ndFL15/back.png'}}
            style={styles.icon} />
        </TouchableOpacity>
        <View style={{flex:1,backgroundColor:'white',alignItems:'center'}}>
          <Text style={{marginTop:5,marginRight:30,fontWeight: 'bold',fontSize: 20}}>
            Emergency
          </Text>
        </View>
      </View>
      <View style={{flex: 2.6,backgroundColor: 'white',flexDirection:'row'}}>
           
      </View>
      <TouchableOpacity style={styles.hitbox1}>
          <Text style={{marginTop:37,fontWeight: 'bold',fontSize: 20}}>
          CALL 191
          </Text>
      </TouchableOpacity>


      <View style={{flex: 1, backgroundColor: 'white'}}/>

      <TouchableOpacity style={styles.hitbox1}>
          <Text style={{marginTop:37,fontWeight: 'bold',fontSize: 20}}>
          CALL 1669
          </Text>
      </TouchableOpacity>

      <View style={{flex: 1, backgroundColor: 'white'}} />

      <TouchableOpacity style={styles.hitbox1}>
          <Text style={{marginTop:37,fontWeight: 'bold',fontSize: 20}}>
          CALL Car Owner
          </Text>
      </TouchableOpacity>
      <View style={{flex: 6, backgroundColor: 'white'}}>
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  iconContainer: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    flex:0.1,
    backgroundColor:'white'
  },
  icon: {
    width: 15,
    height: 15,
  },
  hitbox1:{
    flex: 3.8,
    width: 350,
    marginLeft:10,
    backgroundColor: 'lightgray',
    alignItems:'center',
    borderRadius: 10,
  },
});

export default Emergency;