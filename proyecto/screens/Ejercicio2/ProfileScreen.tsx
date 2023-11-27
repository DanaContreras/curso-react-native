import React from 'react'
import { Text, View, ScrollView } from 'react-native'
import styles from './styles'
import Footer from '../../components/Footer/Footer'
import ProfileCard from '../../components/ProfileCard/ProfileCard'

const ProfileScreen = () => {

    return (
        <ScrollView style={styles.container}>
            <ProfileCard
                textInfo='Superheroe - Oficinista'
                linkEmail='mr_increible@superheroes.com'
                linkInfo='https://disney.fandom.com/es/wiki/Mr._Incre%C3%ADble'
                imgList={[  require('../../assets/mrIncreible.jpg'),
                            require('../../assets/mrIncreible2.jpg'),
                            require('../../assets/mrIncreible3.jpg')]}
            />
            <View>
                <View style={styles.containerInfo}>
                    <Text style={styles.title}>Información personal</Text>
                    <Text style={styles.body}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim aliquid laborum autem nulla optio facere aperiam et quo soluta dolore dicta fugit, veritatis veniam, possimus rerum voluptates nostrum praesentium inventore. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur sint quaerat similique illo maiores, quas neque. Natus exercitationem tempore officiis eum pariatur labore itaque, similique ea necessitatibus molestiae vero? Quis?</Text>
                </View>
                <View style={styles.containerInfo}>
                    <Text style={styles.title}>Intereses</Text>
                    <Text style={styles.body}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia ipsa error rerum doloremque illum a placeat. Quo ab amet quaerat beatae aspernatur temporibus magni, impedit repudiandae sed veritatis inventore veniam! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptate architecto culpa placeat quae magni veniam voluptatem minima quibusdam molestiae. Voluptates totam accusantium exercitationem non hic ratione iusto dolor eius omnis?</Text>
                </View>
            </View>
            <Footer
                linkTwitter='https://twitter.com/'
                linkFacebook='https://facebook.com'
                linkInstagram='https://instagram.com'
                linkGithub='https://github.com'
            />
        </ScrollView>
    )
}

export default ProfileScreen
