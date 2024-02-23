'use client';

import { AppShell, Box, Burger, Drawer, Group, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';
import UserOrLogin from '@/components/layout/UserOrLogin';
import ChatHistory from '@/components/chat/ChatHistory/ChatHistory';

export default function MainShell({ children, drawer }: Readonly<{ children: React.ReactNode, drawer: React.ReactNode }>) {
    const [opened, { close, toggle }] = useDisclosure(false);

    return (
        <AppShell
          header={{ height: 60 }}
         /* navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}*/
          padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={opened} onClick={toggle} size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>

                        <Group ml="xl" gap={10} visibleFrom="sm">
                            <UnstyledButton>Чат | </UnstyledButton>
                            <UnstyledButton component={Link} href="/dalle">Генерация Изображений | </UnstyledButton>
                            <UnstyledButton>GPT4 Vision | </UnstyledButton>

                        </Group>
                        <Box>
                            <UserOrLogin />
                        </Box>
                    </Group>
                </Group>
            </AppShell.Header>
            <Drawer position="left" size="sm" overlayProps={{ backgroundOpacity: 0.1, blur: 4 }} opened={opened} onClose={close}>
                {drawer}
            </Drawer>
            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
