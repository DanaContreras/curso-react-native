import React from 'react'
import { Platform, StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    button : {
        alignContent: 'center',
        borderRadius: 10,
        color: 'blue',
        flexDirection: 'row',
        justifyContent: 'center',
        height: 40,
        width: 130,
        ...Platform.select({
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,
            },
            android: {
              elevation: 20,
            }
        }),
    },
    buttonText: {
        alignSelf: 'center',
		color: '#E4CEB1',
        fontSize: 16,
        fontWeight: 'bold',
        paddingLeft: 6
    },
    containerIconText: {
        justifyContent: 'center',
        paddingRight: 5,
        marginLeft: -8,
    },
    containerIcon: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingLeft: 5
    }
})

export default styles
