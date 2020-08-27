import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import Card from './components/Card'

export default function App() {
  return (
    <View>
      <ScrollView>
        <Card></Card>
        <Card 
        userName={'Игорь'}
        userPhoto = 'https://picsum.photos/40'
        ></Card>
        <Card 
        userName={'Игорь'}
        userPhoto = 'https://picsum.photos/40'
        photo = 'https://picsum.photos/400'
        ></Card>
        <Card>
          <Text>Описание фото</Text>
        </Card>
      </ScrollView>


    </View>
  )
}


