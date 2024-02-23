'use client';

import { Container, Stack } from '@mantine/core';

import { useChat } from 'ai/react';
import { useState } from 'react';
import { Message } from 'ai';
import { usePathname } from 'next/navigation';
import MessagesList from '@/components/chat/MessagesList';

import ChatInput from '@/components/chat/ChatInput/ChatInput';
import { TAvailibleModels } from '@/lib/types';
import { TEXT_MODELS } from '@/constants/TextModels';
import { showError } from '@/utils/notifications';

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
                  models={TEXT_MODELS}
                  model={model}
                  setModel={setModel}
                  onSubmit={async value => {
                        await append({
                            content: value,
                            role: 'user',
                        });
                    }}
                  input={input}
                  setInput={setInput}
                  isLoading={isLoading}
                />
            </Container>

        </Stack>
    );
}
