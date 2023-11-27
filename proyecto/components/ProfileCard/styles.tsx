import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerMainInfo: {
        height: 300,
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerButton: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingTop: 10,
        width: '77%',
    },
    img: {
        width: 150,
        height: 150,
        resizeMode: 'contain',
        borderRadius: 100,
    },
    textInfo: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
})

export default styles
