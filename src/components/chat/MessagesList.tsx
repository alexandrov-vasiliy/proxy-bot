"use client"

import {IChatMessage} from "@/lib/types";
import {Divider, ScrollArea} from "@mantine/core";
import MessageItem from "@/components/chat/MessageItem";

interface Props {
    messages: IChatMessage[]
}

export default function MessagesList({messages}: Props) {
    return (
        <ScrollArea.Autosize py={"xl"} type={"always"} offsetScrollbars mah="70vh">
            { messages.map((message, index) => (
                <div key={index}>
                    <MessageItem  message={message}/>
                    {index < messages.length - 1 && (<Divider my={"md"} />)}
                </div>))
            }
        </ScrollArea.Autosize>
    )
}
