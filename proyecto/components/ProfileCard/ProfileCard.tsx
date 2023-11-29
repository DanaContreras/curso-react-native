import React, { useState } from 'react'
import { Linking, View, TouchableOpacity, Text, Image} from 'react-native'
import styles from './styles'
import ButtonIcon from '../Button/ButtonIcon'
import { faEnvelope, faInfo } from '@fortawesome/free-solid-svg-icons';

interface Props {
    textInfo : string;
    linkEmail : string;
    linkInfo : string;
    imgList : NodeRequire[];
}

const ProfileCard = ({textInfo, linkEmail, linkInfo, imgList} : Props) => {

    const handleEmail = () => {
        Linking.openURL('mailto:'+ linkEmail);
      };

    const handleLink = () => {
    Linking.openURL(linkInfo);
    };

    const [count, setCount] = useState(1);
    const [imageSource, setImageSource] = useState(imgList[0]);
    
    const changeImage = () => {
        let num = ((count % imgList.length) + 1);
        setCount(num);
        setImageSource(imgList[num - 1]);
    }

    return (
        <View style={styles.containerMainInfo}>
                <TouchableOpacity onPress={changeImage}>
                    <Image style={styles.img} source={imageSource}></Image>
                </TouchableOpacity>
                <Text style={styles.textInfo}>{textInfo}</Text>
                <View style={styles.containerButton}>
                    <ButtonIcon
                        text='Email'
                        icon={faEnvelope}
                        color='#725235'
                        onPress={handleEmail}
                    />
                    <ButtonIcon
                        text='Wiki'
                        icon={faInfo}
                        color='#725235'
                        onPress={handleLink}
                    />
                </View>
            </View>
    )
}

export default ProfileCard
