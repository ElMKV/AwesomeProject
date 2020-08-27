import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Card = (props) => {
    return(
    <View style = {styles.card}>
        <View>
            <Text>{props.userName}</Text>
        </View>
    </View>
    )
}


const styles = StyleSheet.create ({
    card: {
        marginTop: 30
    }
})

export default Card
