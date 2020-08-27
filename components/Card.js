import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    <View style = {styles.card}>
        <View>
            <Text>{props.userName}</Text>
        </View>
    </View>
}

export default Card

const styles = StyleSheet.create ({
    card: {
        marginTop: 30
    }
})