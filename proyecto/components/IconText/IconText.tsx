import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import React from 'react'
import { TextStyle, View } from 'react-native'
import styles from '../IconText/styles'
import { Text } from 'react-native-elements'
import { IconDefinition, faSackDollar } from '@fortawesome/free-solid-svg-icons'

interface Props {
    icon?: IconDefinition;
    text: string;
    color?: string;
    size: number;
    style?: TextStyle;
}

const IconText = ({icon = faSackDollar, text, color = 'green', size, style} : Props) => {
    return(
        <View style={styles.containerIcon}>
            <FontAwesomeIcon icon={icon} color={color} size={size}/>
            <Text style={[styles.textIcon, style]}>{text}</Text>
        </View>
    )
    
}

export default IconText