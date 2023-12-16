import { ChatBoard, ChatPanel } from '@/Components'
import './ChatCard.css'
import { Box } from '@chakra-ui/react'
import { useChat } from '@/Hooks'


export default function ComponentPage() {
    const roomId = 3
    const {
        messages,
        sendMessage,
        user,
        join
    } = useChat(roomId);
    const handleSend = (message, isAttchment = false) => {
        sendMessage('group-message', {
            "roomId": roomId,
            "isAttchment": isAttchment,
            "type": "teacher",
            "user": {
                "id": 1,
                "username": "sabry dawood"
            },
            "message": message
        });
    }
    return (
        <Box
            className="--dark-theme"
            id='chat'
        >
            <ChatBoard
                messages={messages}
                user={user}
                join={join}
            />
            <ChatPanel
                onSend={handleSend}
            />
        </Box>
    )

}