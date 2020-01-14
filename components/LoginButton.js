import React from 'react'
import { TouchableHighlight, Text, View } from "react-native"

export default ({ handlePress, disabled }) => (
    <View style={{
        alignItems: "flex-end",
        right: 20,
        bottom: 20,
        right: 20
    }}>
        <TouchableHighlight
            onPress={handlePress}
            style={{
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 20,
                width: 100,
                height: 60,
                backgroundColor: '#107896'
            }}
            disabled={disabled}
        >
            <Text>Login</Text>
        </TouchableHighlight>
    </View>
)
