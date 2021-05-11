import React from 'react'
import {StyleSheet, ImageBackground} from 'react-native'
import 'react-native-gesture-handler'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

const Stack= createStackNavigator()

import Home from './screens/Home'
import ResDetailScreen from './screens/ResDetailScreen'

export default function App() {

  return (
    <ImageBackground source={require('./assets/bk.jpeg')} style={{ display: 'flex', height: '100%' }}>
      <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='ResDetails' component={ResDetailScreen} />
      </Stack.Navigator>
      </NavigationContainer>
      {/* <Home/> */}
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