import React from 'react';
import {StyleSheet, View} from 'react-native';

import MessageDetailCard from '../UI/MessageDetailCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    tinyLogo: {
        width: 80,
        height: 80,
    },
});

import {MessagesContext} from '../Model/ViewModel';

const MessageView = () => {
    const {message} = React.useContext(MessagesContext);
    console.log("The value inside MessageView is: ", message);
    return (
        <View style={styles.container}>
            <MessageDetailCard message={message} />
        </View>
    );
};

export default MessageView;