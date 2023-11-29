import React from 'react'
import { SocialIcon } from 'react-native-elements'
import styles from './styles'
import { Linking, View } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faFacebook, faGithub, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'
import ButtonIcon from '../Button/ButtonIcon';

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

    const handleLinkPress = (link: string) => () => {
        handleLink(link);
      };

    return (
        <View style={styles.containerFooter}>
            <ButtonIcon
                icon={faTwitter}
                color='#00baef'
                iconColor='white'
                style={{borderRadius: 30, width: 52, height: 52}}
                onPress={handleLinkPress(linkTwitter)}
            />
            <ButtonIcon
                icon={faFacebook}
                color='#4a6da7'
                iconColor='white'
                style={{borderRadius: 30, width: 52, height: 52}}
                onPress={handleLinkPress(linkFacebook)}
            />
            <ButtonIcon
                icon={faInstagram}
                color='#6191B2'
                iconColor='white'
                style={{borderRadius: 30, width: 52, height: 52}}
                onPress={handleLinkPress(linkInstagram)}
            />
            <ButtonIcon
                icon={faGithub}
                color='black'
                iconColor='white'
                style={{borderRadius: 30, width: 52, height: 52}}
                onPress={handleLinkPress(linkGithub)}
            />
        </View>
    )
}

export default Footer
