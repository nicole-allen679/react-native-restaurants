import React from 'react'
import { Card } from 'react-native-elements'
import { View, Text, Button, StyleSheet } from 'react-native'


function SingleRestaurant({eachRestaurant}) { 
  return (
    <View>
      <Card containerStyle={{ maxWidth: 300 }}>
        <Card.Title> {eachRestaurant.name}</Card.Title>
        <Card.Divider />
        <Card.Image
          source={{
            uri: eachRestaurant.photoUrl,
          }}
        >
          <Text style={styles.containerHeading}>{eachRestaurant.address}</Text>
          <Button
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="VIEW NOW"
          />
        </Card.Image>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
          containerHeading: {
            color: 'white',
            fontSize: 30,
            fontWeight: '800',
            textAlign: 'center',
          },
    }
})

export default SingleRestaurant
