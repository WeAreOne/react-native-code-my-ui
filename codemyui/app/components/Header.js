import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions, Image} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var FontAwesome = require('react-native-vector-icons/FontAwesome');

// App
import Row from './Row';

// Styles
const {width} = Dimensions.get('window');
const headerHeight = 250;
const styles = StyleSheet.create({
    container: {
        height: headerHeight,
        alignItems: 'center',
        justifyContent: 'center'
    },
    info: {
        paddingHorizontal: 40
    },
    gradient: {
        position: 'absolute',
        top: -18,
        width,
        height: headerHeight + 18,
        paddingTop: 40
    },
    text: {
        backgroundColor: 'transparent',
        color: 'white'
    },
    labelFromTo: {
        fontSize: 15,
        fontWeight: '100'
    },
    textFromTo: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    image: {
        position: 'absolute',
        top: -18,
        height: headerHeight + 18
    }
});

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={{uri: 'seattle', isStatic: true, width, height: headerHeight}} style={styles.image}/>
                <LinearGradient colors={['#2196F3CC', '#EC6EADCC']}
                                style={styles.gradient}
                                start={{x: 0.0, y: 0.25}}
                                end={{x: 1, y: .45}}
                >
                    <View style={styles.info}>
                        <Row justifyContent="space-between">
                            <Text style={[styles.text]}>FLYING FROM</Text>
                            <Text style={[styles.text]}>FLYING TO</Text>
                        </Row>
                        <Row justifyContent="space-between">
                            <Text style={[styles.text, styles.textFromTo]}>CHICAGO</Text>
                            <Text style={[styles.text, {alignItems: 'flex-end'}]}>
                                <FontAwesome name="fighter-jet" size={20}/>
                            </Text>
                            <Text style={[styles.text, styles.textFromTo]}>SEATTLE</Text>
                        </Row>
                        <Row justifyContent="space-between">
                            <Text style={[styles.text]}>All Airports</Text>
                            <Text style={[styles.text]}>Tacoma Intl.</Text>
                        </Row>
                    </View>
                </LinearGradient>
            </View>
        )
    }
}