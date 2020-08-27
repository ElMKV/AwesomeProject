import React from 'react'
import { StyleSheet, Text, View, Image, Button, Alert } from 'react-native'

const Card = ({ userName, children, userPhoto, photo }) => {
    return (
        <View style={styles.card}>
            <View style={styles.userInfo}>
                <Image
                    style={styles.userPhoto}
                    source={{uri: userPhoto}}
                />
                <Text style={styles.userName}>{userName}</Text>
                
            </View>
        <View style={styles.photoContainer}>
            <Image
                style={styles.photo}
                source={{uri: photo}}

            />
        </View>
        <Text>Описание фото</Text>
        <View style = {styles.pressLikeContainer}>
            <Button 
                title = 'Лайк'
                onPress = {() => alert(
                    `Вы оценили фотографию пользоыателя ${userName}`
                )}
            />
        </View>

        <View style = {styles.descriptionStyle}>
            {children}
            </View>
        </View>

    )
}
Card.defaultProps = {
    userName: 'Неизвестный пользователь',
    userPhoto: 'https://picsum.photos/40',
    photo: 'https://picsum.photos/237/500'
}


const styles = StyleSheet.create({
    card: {
        marginTop: 30
    },
    userPhoto: {
        width: 40,
        height: 40,
        borderRadius: 20
    },
    userInfo:{
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10
    },
    userName:{
        marginHorizontal: 10
    },
    photoContainer:{
        aspectRatio: 1

    },
    photo:{
        ...StyleSheet.absoluteFill
    },
    pressLikeContainer:{
        alignItems: 'flex-start',
        paddingHorizontal:10
    },
    descriptionStyle:{
        paddingHorizontal:10


    }

})

export default Card
