import React, { Component } from 'react';
import { Text, StyleSheet,View } from 'react-native';

export default class Header extends Component {
    render() {
        const{ header, headerText} = styles;
        
        return (
            <View style={header}>
                <Text style={headerText}>Simple Calculator</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    header: {
        height: 80,
        //paddingTop:20,
        backgroundColor: '#F5FCFF',
        shadowColor: '#000000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontSize: 20,
        textAlign: 'center'
    },

})