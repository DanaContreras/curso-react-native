import React from 'react'
import { FlatList, ScrollView, View } from 'react-native'
import Header from '../../components/Header/Header'
import styles from './styles'
import InfoCard from '../../components/AirbnbInfoCard/InfoCard'
import data from '../../data'

const Airbnb = () => {

    return (
            <View style={styles.container}> 
                <FlatList
                    ListHeaderComponent={
                        <Header 
                            backgroundColor='#ff5a5f'
                            dividerColor='white'
                            img={require('../../assets/airbnbLogoW.png')}
                        />
                    }
                    data={data}
                    renderItem={({item})=> <View><InfoCard item={item}/><View style={styles.divider}></View></View>}
                    keyExtractor={item=>item.id}
                />
            </View>
    )
}   

export default Airbnb  