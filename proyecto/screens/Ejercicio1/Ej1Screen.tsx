import React from 'react'
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Header from '../../components/Header/Header';

const Ej1Screen = () => {

    const listProfes = ["Gabriela", "Rafa", "Laura", "Stackoverflow", "YT"];

    const profesArray= listProfes.map((profe)=><Text style={styles.bodyText}>• {profe}</Text>)

    return (
        <View style={styles.container}>
            <Header
                backgroundColor='#481557'
                dividerColor='#40A5A5'
                img={require('../../assets/logoReact.png')}
            />
            <View style={styles.body}>
                <Text style={styles.title}>Top 5 profesores:</Text>
                {profesArray}
            </View>
            <Image source={require('../../assets/minino.jpg')} style={styles.img}/>
        </View>
    )
}

export default Ej1Screen
