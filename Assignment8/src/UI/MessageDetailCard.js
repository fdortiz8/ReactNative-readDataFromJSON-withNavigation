import React from 'react';
import {StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        padding: 2,
    },
    item: {
        paddingLeft: 10,
        fontSize: 18,
    },
    tinyDate: {
        fontSize: 10,
        textAlign: 'right',
    },
});

import {MessagesContext} from '../Model/ViewModel';

const MessageDetailCard = ({message}) => {
    // const {setMessage} = React.useContext(MessagesContext);
    // setMessage(message);
    console.log("the value inside messageDatailCard: ", )
    return (
        <View style={styles.container}>
            <Text style={styles.item}>{message.content}</Text>
            <Text style={styles.tinyDate}>{message.posted}</Text>
        </View>
    );
};

export default MessageDetailCard;