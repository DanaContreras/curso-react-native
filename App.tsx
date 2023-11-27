import React from 'react'
import { SafeAreaView} from 'react-native'
import Ej1Screen from './proyecto/screens/Ejercicio1/Ej1Screen'
import ProfileScreen from './proyecto/screens/Ejercicio2/ProfileScreen'
import Airbnb from './proyecto/screens/Ejercicio3/Airbnb'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Ej1Screen /> */}
      {/* <ProfileScreen /> */}
      <Airbnb />
    </SafeAreaView>
  )
}

export default App

