import React from 'react';
import {TouchableWithoutFeedback, StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 2,
    },
    item: {
        paddingLeft: 10,
        fontSize: 18,
    },
    teenyLogo: {
        width: 20,
        height: 20,
    },
});

import {ChannelsContext} from '../Model/ViewModel';

const ChannelCard = ({channel, navigation}) => {
    const {setChannel} = React.useContext(ChannelsContext);
    return(
        <TouchableWithoutFeedback
            onPress={async () => {
                try {
                    setChannel(channel);
                    navigation.navigate('Message List', {title: channel.name});
                } catch (error) {
                    console.error('Error with navigation', error);
                }
            }
            }>
            <View style={styles.container}>
                <Text style={styles.item}>{channel.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default ChannelCard;