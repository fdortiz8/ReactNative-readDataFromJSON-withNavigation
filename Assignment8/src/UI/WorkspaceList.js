import React from 'react';
import {FlatList, StyleSheet, View } from 'react-native';

import WorkspaceCard from '../UI/WorkspaceCard';
import {WorkspacesContext} from '../Model/ViewModel';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});

const WorkspaceList = ({navigation}) => {
    const { workspaces } = React.useContext(WorkspacesContext);
    return (
        <View style={styles.container}>
            <FlatList 
                data={workspaces}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                    <WorkspaceCard workspace={item} navigation={navigation} />
                )}
            />
        </View>
    );
};

export default WorkspaceList;