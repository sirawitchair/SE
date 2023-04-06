//by Pattaranan Nuandua 6230300770
import React from 'react';
import { StyleSheet, View, Image, Text, Button, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

const Booking =({navigation})=>{
    return (
        <View style={styles.container}>
          <View>
            <View style={{flexDirection: 'row'}}>
              <View>
                <Image style={styles.logo1} source={{uri:'https://cdn.discordapp.com/attachments/1052944598898577468/1093206870426124328/UserProfileIcon.png'}} />
              </View>
              <Text style = {{fontSize: 16,fontColor:'black',fontWeight: 'bold',marginLeft: 14,marginTop: 38}}>Lalisa</Text>
              <Text style = {{fontSize: 16,fontColor:'black',fontWeight: 'bold',marginLeft: 8,marginTop: 38}}>Manobal</Text>
              <TouchableOpacity onPress={() => navigation.navigate('setting')}>
                <Image style={styles.logo2} source={{uri:'https://cdn.discordapp.com/attachments/1052944598898577468/1093206869385949215/image_38.png'}}/>
              </TouchableOpacity>
              <TouchableOpacity>
                <Image style={styles.logo3} source={{uri:'https://cdn.discordapp.com/attachments/1052944598898577468/1093206869599846480/image_39.png'}} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.contentContainer}>
            <Image
              source={{ uri: 'https://shorturl.asia/3SWv5' }}
              resizeMode="contain"
              style={styles.image}
            />
          
          <View style={styles.buttonContainer}>
              <Button
                title="Add Car"
                onPress={() => console.log('Button Pressed!')}
              />
          </View>
          </View>
        </View>
      );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    image: {
      marginTop:50,
      width: 250,
      height: 250,
      marginLeft:40
    },
    contentContainer: {
      position: 'absolute',
      top: 65,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.8)',
      flexDirection: 'column',
      justifyContent: 'space-between',
      padding: 25,
    },
      buttonContainer: {
      flex:1,
   
    },
    
    buttonContainer: {
      margin: 50
    },
  
    logo1: {
      height: 25,
      width: 25,
      marginLeft: 25,
      marginTop: 35
    },
    logo2: {
      height: 23,
      width: 23,
      marginLeft: 120,
      marginTop: 35 
    },
      logo3: {
      height: 23,
      width: 23,
      marginLeft: 16,
      marginTop: 35 
    },
  
    logo5: {
      height: 26,
      width: 26,
      marginTop: 20,
      marginLeft: 110
      },
     logo6: {
      height: 26,
      width: 26,
      marginTop: 20,
      marginLeft: 70
      },
    
  });  

export default Booking;