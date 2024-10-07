import React, { useState } from 'react';
import { Text, View, Button } from 'react-native';
import { router } from 'expo-router';

var text_st = {fontSize:20, margin:10};
var num_st = {fontSize:30, backgroundColor:'lightgray', padding:10, margin:10};
var blank_st = {padding:10};

export default function About() {
    const [A, setA] = useState(0);
    const [B, setB] = useState(0);

    return (
        <View>
            <View style = {{ flexDirection:"row" }}>
                <Text style={num_st}>{A}</Text>
                <Text style={text_st}>x</Text>
                <Text style={num_st}>{B}</Text>
                <Text style={text_st}>=</Text>
                <Text style={num_st}>{A*B}</Text>
            </View>
            <View style = {blank_st}></View>
            <View style = {{ flexDirection:"row" }}>
                <Text>   </Text>
                <Button title = "   +   "
                    onPress = { function() { setA(A+1) } }
                />
                <Text>           </Text>
                <Button title = "   +   "
                    onPress = { function() { setB(B+1) } }
                />
            </View>
            <View style = {blank_st}></View>
            <View style = {{ flexDirection:"row" }}>
                <Text>   </Text>
                <Button title = "   -   "
                    onPress = { function() { setA(A-1) } }
                />
                <Text>            </Text>
                <Button title = "   -   "
                    onPress = { function() { setB(B-1) } }
                />
            </View>

        </View>
    );
}