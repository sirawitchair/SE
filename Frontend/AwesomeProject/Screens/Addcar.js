import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import * as ImagePicker from '@react-native-picker/picker';
import { Navigation } from 'react-native-navigation';

const Addcar = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [image, setImage] = useState(null);

    const pickImage = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);
        }
    };

    const handleRegister = () => {
        { navigation.navigate('shareyourcar') }
    };

    return (

        <View style={styles.container}>
            <View>
                <View style={{ flexDirection: 'row' }}>
                    <View>
                        <Image style={styles.logo1} source={{ uri: 'https://cdn.discordapp.com/attachments/1052944598898577468/1093206870426124328/UserProfileIcon.png' }} />
                        <Image style={styles.logo4} source={{ uri: 'https://cdn.discordapp.com/attachments/1052944598898577468/1093206871436955718/kisspng.png' }} />
                    </View>
                    <Text style={{ fontSize: 16, fontColor: 'black', fontWeight: 'bold', marginLeft: 14, marginTop: 38 }}>Lalisa</Text>
                    <Text style={{ fontSize: 16, fontColor: 'black', fontWeight: 'bold', marginLeft: 8, marginTop: 38 }}>Manobal</Text>

                    <Image style={styles.logo2} source={{ uri: 'https://cdn.discordapp.com/attachments/1052944598898577468/1093206869385949215/image_38.png' }} />
                    <Image style={styles.logo3} source={{ uri: 'https://cdn.discordapp.com/attachments/1052944598898577468/1093206869599846480/image_39.png' }} />
                </View>
            </View>
            {image && <Image source={{ uri: image }} style={styles.image} />}
            <Button title="Upload Image" onPress={pickImage} />
            <TextInput
                placeholder="Brand"
                value={name}
                onChangeText={(text) => setName(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Model"
                value={email}
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput
                placeholder="Licence"
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.input}
            />
            <Button title="Add Car" onPress={handleRegister} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginVertical: 10,
        width: '80%',
    },
    image: {
        width: 200,
        height: 200,
        marginVertical: 10,
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
    logo4: {
        height: 26,
        width: 26,
        marginTop: 20,
        marginLeft: 25
    }
});

export default Addcar;