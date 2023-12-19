import React from 'react'
import { SafeAreaView} from 'react-native'
import Ej1Screen from './proyecto/screens/Ejercicio1/Ej1Screen'
import ProfileScreen from './proyecto/screens/Ejercicio2/ProfileScreen'
import Airbnb from './proyecto/screens/Ejercicio3/Airbnb'
import { StarWarsDataScreen } from './proyecto/screens/Estados/Ejercicio4/StarWars'
import CounterScreen from './proyecto/screens/Estados/Ejercicio5/CounterScreen'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      {/* <Ej1Screen /> */}
      {/* <ProfileScreen /> */}
      {/* <Airbnb /> */}
      {/* <StarWarsDataScreen/> */}
      <CounterScreen/>
    </SafeAreaView>
  )
}

export default App

