import React from 'react';
import {StyleSheet, FlatList, View} from 'react-native';

import { ChannelsContext } from '../Model/ViewModel';
import MessageCard from '../UI/MessageCard';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    tinyLogo: {
        width: 80,
        width: 80,
    },
});

const ChannelView = ({navigation}) => {
    const {channel} = React.useContext(ChannelsContext);
    console.log("The value inside channel view is : ", channel);
    return(
        <View style={styles.container}>
            <FlatList 
                data={channel.messages}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <MessageCard message={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default ChannelView;