import { cache } from 'react';
import { Stack } from '@mantine/core';
import { getChats } from '@/actions/chats';

interface Props {
    userId?: string
}

const loadChats = cache(async (userId?: string) => getChats(userId));

export async function ChatList(props: Props) {
    const chats = await loadChats(props.userId);

    return (
        <Stack>
            {
                chats?.map((chat) => (
                    <div>{chat.title}</div>
                ))
            }
        </Stack>
    );
}
