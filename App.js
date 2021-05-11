import SingleRestaurant from './components/SingleRestaurant'
import React, { useState, useEffect } from 'react'
import { TextInput } from 'react-native'
import {
  SafeAreaView,
  StyleSheet,
  ImageBackground,
  ScrollView,
} from 'react-native'

export default function App() {
  const [restaurants, setRestaurants] = useState()

  useEffect(() => {
    fetch('https://bocacode-intranet-api.web.app/restaurants')
      .then(response => response.json())
      .then(data => setRestaurants(data))
      .catch(err => console.log(err))
  }, [])

  console.log(restaurants)

  return (
    <ImageBackground source={require('./assets/bk.jpeg')} style={{ display: 'flex', height: '100%' }}>
      <SafeAreaView style={styles.container}>
        <ScrollView horizontal={true}>
          {restaurants &&
            restaurants.map(eachRestaurant => {
              return (
                  <SingleRestaurant key={eachRestaurant.id} eachRestaurant={eachRestaurant.name} eachRestaurant={eachRestaurant.photoUrl} />
              )
            })}
        </ScrollView>
        <TextInput style={styles.inputFields} placeholder='Restaurant Name' />
      </SafeAreaView>
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerHeading: {
    color: 'white',
    fontSize: 30,
    fontWeight: '800',
    textAlign: 'center',
  },
  containerText: {
    color: 'white',
  },
  containerImg: {
    width: 300,
    height: 200,
  },
  inputFields: {
    alignSelf: 'center',
    height: 40,
    width: '80%',
    textAlign: 'center',
    borderColor: 'gray',
    borderWidth: 1,
    backgroundColor: '#efefef',
    marginVertical: 10,
  },
})