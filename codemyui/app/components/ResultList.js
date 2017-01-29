import React, {Component} from 'react';
import {View, ScrollView, Text, Image, StyleSheet, Dimensions, LayoutAnimation,
    Animated, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
var FontAwesome = require('react-native-vector-icons/FontAwesome');

// Styles
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
    normal: {
        height: 50,
        width: width - 40,
        backgroundColor: 'white',
        marginVertical: 5,
        borderRadius: 7,
    },
    selected: {
        height: 125,
        marginVertical: 5,
        overflow: 'hidden',
        backgroundColor: 'transparent',
    },
    gradient: {
        position: 'absolute',
        width: width - 40,
        height: 125,
        borderRadius: 7
    },
    text: {
        backgroundColor: 'transparent',
        color: '#CCC'
    },
    textBold: {
        fontWeight: 'bold'
    },
    textSelectedBold: {
        fontWeight: 'bold',
        color: '#6A1B9A',
    },
    textSelected: {
        backgroundColor: 'transparent',
        color: '#6A1B9ACC'
    }
});

export default class ResultList extends Component {
    constructor() {
        super();
        this.state = {
            selectedFlightIdx: undefined,
        }
    }
    render() {
        return (
            <ScrollView style={{paddingHorizontal: 11}}>
                {
                    this.props.flights.map(
                        (flight, idx) => {
                            let selected = this.state.selectedFlightIdx === idx;
                            let style = selected ? styles.selected : styles.normal;
                            let textStyle = selected ? styles.textSelected : styles.text;
                            let textBold =  selected ? styles.textSelectedBold : styles.textBold;

                            return (
                                <TouchableOpacity key={idx} onPress={this._select.bind(this, idx)} style={style}>
                                    {selected ? <LinearGradient colors={['#B993D666', '#8CA6DB66']}
                                                    style={styles.gradient}
                                                    start={{x: 0.0, y: 0.25}}
                                                    end={{x: 1, y: .45}}
                                    ></LinearGradient> : null}
                                    <View style={{flexDirection: 'row', paddingTop: 11, paddingLeft: 7}}>
                                        <View style={{flex: 1}}>
                                            <Text style={[textStyle, {fontSize: 24}]}>
                                                {selected ?
                                                    <FontAwesome name="check-circle"
                                                                 size={15}
                                                                 color={'#6A1B9A'}
                                                             /> :
                                                    '.'}
                                            </Text>
                                        </View>
                                        <View style={{flex: 10, paddingHorizontal: 11, flexDirection: 'row', justifyContent: 'space-between'}}>
                                            <View>
                                                <Text style={[textStyle, {fontSize: 15}, textBold]}>
                                                    {flight.fromTime}
                                                </Text>
                                                <Text style={textStyle}>
                                                    {flight.fromAirport}
                                                </Text>
                                            </View>
                                            <View style={{justifyContent: 'center'}}>
                                                <FontAwesome name="fighter-jet" size={15} color={selected ? '#6A1B9A' : '#CCC'}/>
                                            </View>
                                            <View>
                                                <Text style={[textStyle, {fontSize: 15}, textBold]}>
                                                    {flight.toTime}
                                                </Text>
                                                <Text style={textStyle}>
                                                    {flight.toAirport}
                                                </Text>
                                            </View>
                                        </View>
                                        <View style={{flex: 4, justifyContent: 'center', alignItems: 'flex-end', paddingRight: 7}}>
                                            <Text style={[textStyle, {color: '#AAA'}, textBold, {fontSize: 18}]}>
                                                {flight.price}$
                                            </Text>
                                        </View>
                                    </View>
                                    {selected ?
                                        <View style={{flexDirection: 'row', paddingHorizontal: 14, marginTop: 14}}>
                                            <View style={{flex: 1}}>
                                                {
                                                    flight.miscs.map((text, key) => <Text key={key} style={{color: '#6A1B9AAA'}}>{text}</Text>)
                                                }
                                            </View>
                                            <View style={{flex: 1}}>
                                                <Image source={{uri: 'airline', isStatic: true, width: 160, height: 55}} />
                                            </View>
                                        </View> :
                                        null
                                    }

                                </TouchableOpacity>
                            );
                        }
                    )
                }
            </ScrollView>
        )
    }

    _select(idx) {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        if (this.state.selectedFlightIdx === idx) {
            this.setState({selectedFlightIdx: undefined});
            this.props.onSelectItem(undefined);
        } else {
            this.setState({selectedFlightIdx: idx});
            this.props.onSelectItem(this.props.flights[idx]);
        }

    }
}
