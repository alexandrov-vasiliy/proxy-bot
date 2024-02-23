'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, Button, Group, Text } from '@mantine/core';

export default function UserOrLogin() {
    const { data: session } = useSession();

    if (session?.user) {
        return (
            <Group>
                {session.user.image ?
                    <Avatar src={session.user.image} alt="profile-pickture" /> : ''
                }
                <Text>{session.user.name}</Text>
                <Button onClick={() => signOut()}>Log out</Button>
            </Group>
        );
    }

    return (
        <Button onClick={() => signIn('github')} variant="link" className="-ml-2">
            Login
        </Button>
    );
}
