import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
var MaterialIcons = require('react-native-vector-icons/MaterialIcons');

// Styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: 40,
        borderBottomWidth: 1,
        borderBottomColor: '#CCC'
    },
    icon: {
        color: '#CCC'
    },
    text: {
        color: '#CCC',
        fontWeight: 'bold',
        fontSize: 18
    },
    selectedContainer: {
        borderBottomWidth: 2,
        borderBottomColor: '#6A1B9A'
    },
    selectedText: {
        color: '#6A1B9A'
    }
});

export default class Tab extends Component {
    render() {
        var selectedStyle = this.props.selected ? styles.selectedContainer : {};
        var selectedTextStyle = this.props.selected ? styles.selectedText : {};
        return (
            <View style={[styles.container, selectedStyle]}>
                <MaterialIcons name={this.props.icon} size={20} style={[styles.icon, selectedTextStyle]}/>
                <Text style={[styles.text, selectedTextStyle]}>{this.props.text}</Text>
            </View>
        )
    }
}