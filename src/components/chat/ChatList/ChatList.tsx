import { cache } from 'react';
import { NavLink, Stack } from '@mantine/core';
import Link from 'next/link';
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
                    <NavLink component={Link} label={chat.title} href={`/chat/${chat.id}`} />
                ))
            }
        </Stack>
    );
}
