import React from 'react';

import { GET as GET_WORKSPACES} from '../Repo/WorkspaceRepo';


export const WorkspacesContext = React.createContext();
export const ChannelsContext = React.createContext();
export const MessagesContext = React.createContext();
export const MessageDetailContext = React.createContext();

export default ViewModel = ( props ) => {
    const [workspaces, setWorkspaces] = React.useState([]);
    const [workspace, setWorkspace] = React.useState();
    const [channels, setChannels] = React.useState([]);
    const [channel, setChannel] = React.useState();
    const [messages, setMessages] = React.useState([]);
    const [message, setMessage] = React.useState();
    
    React.useEffect( () => {
        const fetchData = async() => {
            var workspaces = await GET_WORKSPACES();
            setWorkspaces(workspaces);
        }
        fetchData();
    }, []);
    
    React.useEffect( () => {
        const fetchChannels = async () => {
            if (workspace) {
                const channels = await GET_WORKSPACES();
                setChannels(channels);
            }
        };
        fetchChannels();
    }, [workspace]);
    
    React.useEffect( () => {
        const fetchMessages = async () => {
            if (channel) {
                const messages = await GET_WORKSPACES();
                setMessages(messages);
            }
        };
        fetchMessages();
    }, [channel]);
    
    React.useEffect( () => {
        const fetchMessageDetail = async () => {
            if (message) {
                const message = await GET_WORKSPACES();
                setMessage(message);
            }
        };
        fetchMessageDetail();
    }, [message]);
    
    return(
        <WorkspacesContext.Provider value={{ workspaces, workspace, setWorkspace}}>
            <ChannelsContext.Provider value={{ channels, channel, setChannel }}>
                <MessagesContext.Provider value={{ messages, message, setMessage }}>
                    {props.children} 
                </MessagesContext.Provider>
            </ChannelsContext.Provider>
        </WorkspacesContext.Provider>
    );
};