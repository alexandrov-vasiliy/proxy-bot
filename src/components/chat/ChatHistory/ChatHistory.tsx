import { Button, Stack, Text } from '@mantine/core';
import { getServerSession } from 'next-auth';
import { ChatList } from '@/components/chat/ChatList/ChatList';

export default async function ChatHistory() {
    const session = await getServerSession();
    if (!session) {
        return (
            <Stack>
                <Text>Авторизуйтесь для сохранения истории чатов</Text>
                <Button>Log in</Button>
            </Stack>
        );
    }

    return <ChatList userId={session.user.id} />;
}
