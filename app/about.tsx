import { Text, View, Image } from 'react-native';
import { router } from 'expo-router';

var text_st = {fontSize:20, margin:10};
var num_st = {fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var imgurl = 'https://i.imgur.com/pYUbX6e.png';

export default function About() {
    return (
        <View>
            <Text style = {text_st}>This is about the app</Text>
            <Image style = {{ width:200, height:200 }}
                src = {imgurl}
            />
        </View>
    );
}