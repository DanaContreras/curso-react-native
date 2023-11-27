import React from 'react'
import { Image, View } from 'react-native'
import styles from './styles'

interface Props {
    backgroundColor: string;
    dividerColor: string;
    img: NodeRequire;
}

const Header = ({backgroundColor, dividerColor, img} : Props) => {
  return (
        <View style={{...styles.containerHeader, backgroundColor: backgroundColor}}>
            <View style={styles.containerImg}>
                <Image source={img} style={styles.img}/>
            </View>
            <View style={{...styles.divider, backgroundColor: dividerColor}}></View>
        </View>
  )
}

export default Header
