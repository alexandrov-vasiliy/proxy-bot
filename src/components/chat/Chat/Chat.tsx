'use client';

import { Container, Group, Select, Stack } from '@mantine/core';

import { useChat } from 'ai/react';
import { useState } from 'react';
import { Message } from 'ai';
import { usePathname } from 'next/navigation';
import MessagesList from '@/components/chat/MessagesList';

import ChatInput from '@/components/chat/ChatInput/ChatInput';
import { TAvailibleModels } from '@/lib/types';
import { TEXT_MODELS } from '@/constants';
import { showError } from '@/utils/notifications';
import ImageSettings from '@/components/chat/ImageSettings/ImageSettings';

export interface ChatProps {
    initialMessages?: Message[]
    id?: string
}

export default function Chat({ id, initialMessages }: ChatProps) {
    const [model, setModel] = useState<TAvailibleModels>('gpt-3.5-turbo');
    const path = usePathname();
    const {
        messages,
        input,
        setInput,
        isLoading,
        append,
    } = useChat({
        id,
        initialMessages,
        body: {
            id,
            model,
        },
        onResponse(response) {
            if (response.status === 401) {
                showError({
                    message: response.statusText,
                });
            }
        },
        onError(error) {
            showError({
                message: error.message,
            });
        },
        onFinish() {
            if (!path.includes('chat')) {
                window.history.pushState({}, '', `/chat/${id}`);
            }
        },
    });

    return (
        <Stack>

            <Container w="100%">
                <MessagesList messages={messages} />

                <ChatInput
                  onSubmit={async value => {
                        await append({
                            content: value,
                            role: 'user',
                        });
                    }}
                  input={input}
                  setInput={setInput}
                  isLoading={isLoading}
                >
                    <Group>
                        <Select
                          maw={150}
                          label="model"
                          allowDeselect={false}
                          data={TEXT_MODELS}
                          onChange={(val) => setModel(val as TAvailibleModels)}
                          value={model}
                        />
                        {
                            model === 'dall-e-2' || model === 'dall-e-3'
                                ? <ImageSettings /> : ''
                        }
                    </Group>

                </ChatInput>
            </Container>

        </Stack>
    );
}
