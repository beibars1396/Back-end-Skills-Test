import React from 'react'
import { View, Animated, Text, TextInput } from 'react-native'

// const onChangeText = (name, event) => {
//     console.log(name)
//     console.log(event)
    
    
// }

export default ({ labelText, inputType, onChangeText, keyboardType, secureTextEntry }) => {

    return (
        <View>
            <Animated.View >
                {/* ! ! ! */}
            </Animated.View>

            <Text style={{
                fontWeight: "700", marginBottom: 10
            }}>{labelText}</Text>
            {/* {inputType === "password" ? (
                <TouchableOpacity
                    style={styles.showButton}
                    onPress={this.toggleShowPassword}
                >
                    <Text style={styles.showButtonText}>
                    {secureInput ? "Show" : "Hide"}
                    </Text>
                </TouchableOpacity>
            ) : null} */}
            <TextInput
                autoCorrect={false}
                style={{
                    borderBottomWidth: 1,
                    paddingTop: 5,
                    paddingBottom: 5
                }}
                // secureTextEntry={secureInput}
                onChangeText={(onChangeText)}
                autoCapitalize="none"
                keyboardType={keyboardType}
                secureTextEntry={secureTextEntry}
            />
        </View>
    )
}