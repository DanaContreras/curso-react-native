import React from 'react'
import { View, Image, Text } from 'react-native'
import IconText from '../IconText/IconText'
import styles from './styles'
import { faSackDollar, faPiggyBank, faSackXmark, faStar } from '@fortawesome/free-solid-svg-icons'

interface ItemProps {
    city: string,
    country: string,
    date: string,
    amountHost: string,
    price: number,
    qualification: number,
    imageUrl: string,
    offer: boolean,
    sold: boolean
}

const InfoCard: React.FC<{ item: ItemProps }> = ({ item }) => {


    let icon = faSackDollar;
    let colorIcon = 'green';
        
    if (item.offer) {
        icon = faPiggyBank;
        colorIcon = 'orange';
    } else if (item.sold){
        icon = faSackXmark;
        colorIcon = 'red';
    };

    return (
        <View style={styles.containerCard}>
            <View style={styles.containerImg}>
                <Image source={{uri: item.imageUrl}} style={styles.img}/>
            </View>
            <View style={styles.containerInfo}>
                <View style={styles.containerStar}>
                    <Text style={styles.textBold}>{item.city}, {item.country}</Text>
                    <View style={styles.star}>
                        <IconText icon={faStar} color='yellow' size={25} text={item.qualification.toString()}/>
                    </View>
                </View>
                <Text>City views</Text>
                <Text>{item.date} - {item.amountHost}</Text>
                <IconText
                    icon={icon}
                    color={colorIcon}
                    size={25}
                    text={'$' + item.price.toString() + ' / night'}
                    style={(item.sold)? {textDecorationLine: 'line-through'} : {}}
                />
            </View>
        </View>
    )
}

export default InfoCard
