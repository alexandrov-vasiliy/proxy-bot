'use client';

import { Container, Stack } from '@mantine/core';

import { useChat } from 'ai/react';
import { useState } from 'react';
import MessagesList from '@/components/chat/MessagesList';

import ChatInput from '@/components/chat/ChatInput/ChatInput';
import { TAvailibleModels } from '@/lib/types';
import { TEXT_MODELS } from '@/constants/TextModels';

export default function Chat() {
    const [model, setModel] = useState<TAvailibleModels>('gpt-3.5-turbo');

    const { messages, input, setInput, isLoading, append } = useChat({
     body: {
         model,
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
