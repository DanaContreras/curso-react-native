import { Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCircleInfo, faEnvelope } from "@fortawesome/free-solid-svg-icons";

interface Props {
    text: string;
    color?: string;
    icon?: string;
    onPress?: () => void;
};

const ButtonIcon = ({text, color, icon, onPress}: Props) => {

    return (
        <TouchableOpacity onPress={onPress}>
            <View style={{
                ...styles.button,
                backgroundColor: color,
            }}>
                <View style={styles.containerIcon}>
                    <FontAwesomeIcon icon={(icon === 'email')? faEnvelope : faCircleInfo} size={20}></FontAwesomeIcon>
                </View>
                <Text style={styles.buttonText}>{text}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ButtonIcon
