'use client';

import { Box, Divider } from '@mantine/core';
import { Message } from 'ai';
import MessageItem from '@/components/chat/MessageItem/MessageItem';
import { IChatMessage } from '@/lib/types';

interface Props {
    messages: IChatMessage[] | Message[],
}

export default function MessagesList({ messages }: Props) {
    return (
            <Box pb={300} pt="xl">
                { messages.map((message, index) => (
                    <Box w="100%" key={index}>
                        <MessageItem message={message} />
                        {index < messages.length - 1 && (<Divider my="md" />)}
                    </Box>))
                }
            </Box>

    );
}
