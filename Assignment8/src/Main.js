import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import WorkspaceList from './UI/WorkspaceList';
import WorkspaceView from './UI/WorkspaceView';
import ChannelView from './UI/ChannelView';
import MessageView from './UI/MessageView';

import ViewModel from './Model/ViewModel';

const Stack = createStackNavigator();

const Main = () => {
    return (
        <ViewModel>
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name = "Workspaces"
                        component={WorkspaceList}
                    />
                    <Stack.Screen 
                        name="Channel List"
                        component={WorkspaceView}
                        options={({route}) => ({
                            title: route.params.title,
                            headerBackTitle: 'Workspaces',
                            headerBackAccessibilityLabel: 'back to workspaces'
                        })}
                    />
                    <Stack.Screen
                        name="Message List"
                        component={ChannelView}
                        options={({route}) => ({
                            title: route.params.title,
                            headerBackTitle: 'Channels',
                            headerBackAccessibilityLabel: 'back to channels'
                        })}
                    />
                    <Stack.Screen 
                        name="Message Detail"
                        component={MessageView}
                        options={({route}) => ({
                            title: route.params.title,
                            headerBackTitle: "Messages",
                            headerBackAccessibilityLabel: 'back to messages',
                        })}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </ViewModel>
    );
};

export default Main;