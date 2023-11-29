import { Text, View, TouchableOpacity, ViewStyle, StyleSheet, StyleProp } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faCircleInfo, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { IconDefinition } from "@fortawesome/free-brands-svg-icons";

interface Props {
    icon: IconProp | IconDefinition;
    text?: string;
    size?: number;
    color?: string;
    iconColor?: string;
    onPress?: () => void;
    style?: StyleProp<ViewStyle>;
};

const ButtonIcon = ({text = '', size = 20, color = 'white', icon, iconColor = 'black', onPress, style = {}}: Props) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={[styles.button, {backgroundColor: color}, style]}>
                <View style={(text == '')? styles.containerIcon : styles.containerIconText}>
                    <FontAwesomeIcon icon={icon} size={size} color={iconColor}></FontAwesomeIcon>
                </View>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonIcon
