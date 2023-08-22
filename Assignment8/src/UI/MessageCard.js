import React from 'react';
import { TouchableWithoutFeedback, StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 2,
    },
    item: {
        paddingLeft: 5,
        fontSize: 14,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 1,
    },
    tinyDate: {
        fontSize: 12,
        marginBottom: 3,
        paddingRight: 1,
        textAlign: 'right',
    },
});


import {MessagesContext} from '../Model/ViewModel';

const MessageCard = ({message, navigation}) => {
    const {setMessage} = React.useContext(MessagesContext);
    return(
        <TouchableWithoutFeedback
            onPress={ async () => {
                setMessage(message);
                navigation.navigate('Message Detail', {title: message.member.name})}
            }>
            <View style={styles.container}>
                <Text style={styles.title}>{message.member?.name}</Text>
                <Text style={styles.item}>{message.content}</Text>
                <Text style={styles.tinyDate}>{message.posted}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default MessageCard;