import React from 'react'
import { SocialIcon } from 'react-native-elements'
import styles from './styles'
import { Linking, View } from 'react-native'

interface Props {
    linkTwitter : string;
    linkFacebook : string;
    linkInstagram : string;
    linkGithub : string;
}

const Footer = ({linkTwitter, linkFacebook, linkInstagram, linkGithub} : Props) => {

    const handleLink = (link: string) => {
        Linking.openURL(link);
    }

    return (
        <View style={styles.containerFooter}>
            <SocialIcon type='twitter' onPress={() => handleLink(linkTwitter)}></SocialIcon>
            <SocialIcon type='facebook' onPress={() => handleLink(linkFacebook)}></SocialIcon>
            <SocialIcon type='instagram' onPress={() => handleLink(linkInstagram)}></SocialIcon>
            <SocialIcon type='github' onPress={() => handleLink(linkGithub)}></SocialIcon>
        </View>
    )
}

export default Footer
