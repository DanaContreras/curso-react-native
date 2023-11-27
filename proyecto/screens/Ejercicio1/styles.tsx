import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },
    body: {
        alignSelf: 'center',
        height: '30%',
        marginVertical: 25,
        padding: 30,
        width: '90%'
    },
    title: {
        color: '#481557',
        fontSize: 30,
        fontWeight: 'bold',
    },
    bodyText: {
        color: '#40A5A5',
        fontSize: 15
    },
    img: {
        alignSelf: 'center',
        flex: 1,
        resizeMode: 'contain',
        width: '80%'
    }
})

export default styles
