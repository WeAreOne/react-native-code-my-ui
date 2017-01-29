import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

// App
import Header from '../components/Header';
import FlightList from '../components/FlightList';
import ProceedAction from '../components/ProceedAction';

// Styles
const styles = StyleSheet.create({
    container: {
        paddingTop: 18
    }
});

export default class BookAFlight extends Component {
    constructor() {
        super();
        this.state = {
            selectedFlight: undefined
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <Header>
                    {/* Will contains flight search information */}
                </Header>
                <FlightList onFlightSelect={this._onFlightSelect.bind(this)}>
                    {/* Will contains flight results */}
                </FlightList>
                <ProceedAction price={this.state.selectedFlight ? this.state.selectedFlight.price: 0}>
                    {/* Will contains proceed button */}
                </ProceedAction>
            </View>
        )
    }
    _onFlightSelect(selectedFlight) {
        this.setState({
            selectedFlight
        })
    }
}
