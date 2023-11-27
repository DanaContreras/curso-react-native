import React from 'react'
import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerCard: {
        height: 410,
        padding: 25,
        backgroundColor: 'white',
        borderRadius: 30,
    },
    containerImg: {
        height: 250,
    },
    containerInfo: {
        paddingVertical: 15,
    },
    containerStar: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: -15,
    },
    img: {
        alignSelf: 'center',
        borderRadius: 30,
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
    },
    textBold: {
        fontWeight: 'bold',
        color: 'black'
    },
    star: {
        marginRight: '-25%'
    }
})

export default styles
