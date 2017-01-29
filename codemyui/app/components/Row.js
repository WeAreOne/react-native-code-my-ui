import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Styles
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    }
})

export default class Row extends Component {
    render() {
        return (
            <View style={[styles.container, {justifyContent: this.props.justifyContent||'center'}]}>
                {this.props.children}
            </View>
        )
    }
}