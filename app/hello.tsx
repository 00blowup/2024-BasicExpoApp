import { useState } from 'react';
import { Text, View, Button, SafeAreaView, TextInput } from 'react-native';
import { router } from 'expo-router';

var text_st = {fontSize:20, margin:10, padding:10};
var input_st = {height:40, borderWidth:1};

export default function Hello() {
    const [greet, setGreet] = useState('Hello');
    const [name, setName] = useState('Ewha');
    return (
        <View>
            <Text style = {text_st}>{greet}, {name}</Text>
            <SafeAreaView>
                  <TextInput style = {input_st}
                    onChangeText={setName}
                  />
            </SafeAreaView>
            <View style={{ height:10 }}></View>
            <View style = {{ flexDirection:"row", justifyContent:"flex-end" }}>
                <Button title = "Hello"
                    onPress = {function() { setGreet('Hello') } }
                />
                <Text>     </Text>
                <Button title = "Nice"
                    onPress = {function() { setGreet('Nice to meet you') } }
                />
            </View>

        </View>
    );
}