import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, LayoutAnimation} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var MaterialIcons = require('react-native-vector-icons/MaterialIcons');

// Styles
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        width,
        alignItems: 'center',
        position: 'absolute',
        top: height - 60
    },
    gradient: {
        width: width - 60,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        flexDirection: 'row',
        shadowOffset: {
            width: 3, height: 3
        },
        shadowColor: '#333', shadowOpacity: 0.35, shadowRadius: 3, elevation: 5
    },
    text: {
        backgroundColor: 'transparent',
        color: 'white',
        fontWeight: 'bold',
    },
    icon: {
        alignSelf: 'center',
        backgroundColor: 'transparent'
    }
});

export default class ProceedAction extends Component {
    componentWillReceiveProps() {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    }
    render() {
        let left = !!this.props.price ? 0 : width;
        return (
            <View style={[styles.container, {left}]}>
                <LinearGradient colors={['#2196F3CC', '#5C258DCC']}
                                style={styles.gradient}
                                start={{x: 0.0, y: 0.25}}
                                end={{x: 1, y: .45}}
                >
                    <MaterialIcons name="payment" color="white" size={20} style={styles.icon}/>
                    <Text style={styles.text}>
                         PROCEED {this.props.price||0}$
                    </Text>
                </LinearGradient>
            </View>
        )
    }
}