import React from 'react'
import { StyleSheet } from 'react-native'

export const l_green = '#69E769'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#047E69',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerButton: {
        height: 100,
        paddingBottom: 90,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',

    },
    display: {
        width: 250,
        height: 250,
        backgroundColor: 'white',
        borderRadius: 150,
        justifyContent: 'center'

    },
    button: {
        marginHorizontal: 30,
        height: 110,
        width: 110,
        borderRadius: 100,
    },
    counter: {
        alignSelf: 'center',
    }
})

export default styles
