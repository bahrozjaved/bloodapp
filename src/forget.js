import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class Forget extends Component {
    constructor(props) {
        super();
    }

    render() {
        return (
            <View
                style={{
                    flex: 1,
                    backgroundColor: '#ffffff',
                    justifyContent: 'center',
                    alignItems:'center'
                }}
            >
                <Text>
                    Forget
                </Text>
            </View>
        )
    }
}

