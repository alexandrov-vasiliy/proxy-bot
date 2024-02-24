'use client';

import { signIn, signOut, useSession } from 'next-auth/react';
import { Avatar, Button, Group, Text } from '@mantine/core';
import { IconBrandGithub } from '@tabler/icons-react';
import { showError } from '@/utils/notifications';

export default function UserOrLogin() {
    const { data: session } = useSession();

    const logInWithGitHub = async () => {
        try {
            await signIn('github');
        } catch (e) {
            showError({
                message: `Ошибка при авторизации через github ${e}`,
            });
        }
    };

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
        <Button onClick={logInWithGitHub} variant="outline" className="-ml-2">
            <IconBrandGithub /> Login with github
        </Button>
    );
}
