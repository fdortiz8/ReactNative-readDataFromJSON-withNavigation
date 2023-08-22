import React from 'react';
import {StyleSheet, FlatList, View } from 'react-native';

import { WorkspacesContext } from '../Model/ViewModel';
import ChannelCard from '../UI/ChannelCard';

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

const WorkspaceView = ({navigation}) => {
    const {workspace} = React.useContext(WorkspacesContext);
    return (
        <View style={styles.container}>
            <FlatList
                data={workspace.channels}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <ChannelCard channel={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default WorkspaceView;