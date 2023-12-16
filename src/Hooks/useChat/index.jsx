import { SocketClient } from "@/utils";
import { useEffect, useState } from "react";

const useChat = (roomId) => {
    const [messages, setMessages] = useState([]);
    const [user, setUser] = useState(null);
    const [join, setJoin] = useState(null);
    const [send, setSend] = useState(false);
    const socket = new SocketClient();
    useEffect(() => {
        setJoin(false)
        socket.emit("login", {
            "roomId": 1,
            "type": "teacher",
            "user": {
                "id": 1,
                "username": "sabry dawood"
            }
        });

        socket.on('login-success', (userData) => {
            setUser(userData.user);
            if (userData.user) {
                socket.emit("join-room", {
                    roomId: roomId
                });
            }

        })
        if (!join && !send) {   
            socket.on('room-join', (data) => {
                setJoin(data)
                setSend(true)
                socket.emit("get-messages", {
                    roomId: roomId
                });
            })
            socket.on("room-data", (data) =>
                setMessages(data.message)
            );
        }
        socket.on('room-message' , (data) => {
            setMessages((prev) => [...prev, data])
        });
        return () => {
            socket.off("login");
            socket.off("join-room");
            socket.off("room-data" , (data) =>
                setMessages(data.message)
            );
            socket.off("room-join");
            socket.off("get-messages" , (data) =>
                setMessages(data.message)
            );
            socket.off("login-success");

        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [roomId]);
    function sendMessage(event, data) {
        socket.emit(event, data);
    }
    return {
        messages,
        sendMessage,
        user,
        join
    };

}
export default useChat