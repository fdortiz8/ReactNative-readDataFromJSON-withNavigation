import React from 'react';
import{StyleSheet, Text, View, TouchableWithoutFeedback} from 'react-native';

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

import { WorkspacesContext } from '../Model/ViewModel';

const WorkspaceCard = ({workspace, navigation}) => {
    const {setWorkspace} = React.useContext(WorkspacesContext);
    return (
        <TouchableWithoutFeedback
            onPress={async() => {
                try {
                    setWorkspace(workspace);
                    navigation.navigate('Channel List', {title: workspace.name});
                } catch (error){
                    console.error('Error with navigation', error);
                }
            }
            }>
            <View style={styles.container}>
                <Text style={styles.item}>{workspace.name}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default WorkspaceCard;