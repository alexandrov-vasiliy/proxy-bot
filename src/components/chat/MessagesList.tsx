'use client';

import { Box, Divider, Stack } from '@mantine/core';
import { Message } from 'ai';
import MessageItem from '@/components/chat/MessageItem/MessageItem';
import { IChatMessage } from '@/lib/types';

interface Props {
    messages: IChatMessage[] | Message[],
}

export default function MessagesList({ messages }: Props) {
    return (
            <Stack pt="xl">
                { messages.map((message, index) => (
                    <Box w="100%" key={index}>
                        <MessageItem message={message} />
                        {index < messages.length - 1 && (<Divider my="md" />)}
                    </Box>))
                }
            </Stack>

    );
}
