'use client';

import { AppShell, Burger, Group, Skeleton, UnstyledButton } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import Link from 'next/link';

export default function MainShell({ children }: Readonly<{ children: React.ReactNode }>) {
    const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
    const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true);
    return (
        <AppShell
          header={{ height: 60 }}
          navbar={{
                width: 300,
                breakpoint: 'sm',
                collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
            }}
          padding="md"
        >
            <AppShell.Header>
                <Group h="100%" px="md">
                    <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                    <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                    <Group justify="space-between" style={{ flex: 1 }}>

                        <Group ml="xl" gap={10} visibleFrom="sm">
                            <UnstyledButton>Чат | </UnstyledButton>
                            <UnstyledButton component={Link} href="/dalle">Генерация Изображений | </UnstyledButton>
                            <UnstyledButton>GPT4 Vision | </UnstyledButton>
                        </Group>
                    </Group>
                </Group>
            </AppShell.Header>

            <AppShell.Navbar p="md">
                Чаты
                {Array(15)
                    .fill(0)
                    .map((_, index) => (
                        <Skeleton key={index} h={28} mt="sm" animate={false} />
                    ))}
            </AppShell.Navbar>

            <AppShell.Main>
                {children}
            </AppShell.Main>
        </AppShell>
    );
}
