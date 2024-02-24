import { Button, Stack, Text } from '@mantine/core';
import { ChatList } from '@/components/chat/ChatList/ChatList';
import { auth } from '@/auth';

export default async function ChatHistory() {
    const session = await auth();
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
