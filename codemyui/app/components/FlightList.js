import React, {Component} from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

// App
import FlightService from "../services/FlightService";
import ResultListTabs from './ResultListTabs';
import ResultList from './ResultList';
import Tab from './Tab';

// Styles
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        marginHorizontal: 10,
        borderRadius: 7,
        height, width: width - 20,
        position:'absolute',
        top: 175,
        shadowOffset: {
            width: 1, height: 1
        },
        shadowColor: '#333', shadowOpacity: 0.35, shadowRadius: 7, elevation: 5,
    }
})

export default class FlightList extends Component {
    constructor() {
        super();
        this.state = {
            flights: []
        }
    }
    componentDidMount() {
        FlightService.all().then(flights => this.setState({flights}))
    }
    render() {
        return (
            <View style={styles.container}>
                <ResultListTabs>
                    <Tab icon="flight" text="219$" action={this._foo.bind(this)}/>
                    <Tab icon="directions-railway" text="102$" action={this._foo.bind(this)}/>
                    <Tab icon="directions-bus" text="75$" action={this._foo.bind(this)}/>
                </ResultListTabs>
                <ResultList
                    flights={this.state.flights}
                    onSelectItem={flight => this._selectFlight(flight)}
                />
            </View>
        )
    }
    _foo() {
        // NOOP
        console.log('ici');
    }
    _selectFlight(flight) {
        this.props.onFlightSelect(flight);
    }
}