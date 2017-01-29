import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

// App
import Row from './Row';

// Styles
const styles = StyleSheet.create({
    button: {
        height: 40,
        flex: 1
    }
});

export default class ResultListTabs extends Component {
    constructor() {
        super();
        this.state = {
            selectedTabIdx: 0
        }
    }
    render() {
        return (
            <Row justifyContent="space-between">
                {this.props.children.map(
                    (tab, idx) => {
                        let tabWithProps = React.cloneElement(
                            tab, {selected: this.state.selectedTabIdx === idx}
                        );
                        return (
                            <TouchableOpacity
                                key={idx}
                                onPress={this._selectTab.bind(this, tab, idx)}
                                style={styles.button}
                            >
                                {tabWithProps}
                            </TouchableOpacity>
                        )
                    }
                )}
            </Row>
        )
    }
    _selectTab(tab, idx) {
        this.setState({selectedTabIdx : idx});
        tab.props.action();
    }
}