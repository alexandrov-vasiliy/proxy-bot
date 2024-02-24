'use client';

import { Button, Container, Group, NumberInput, Select, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import Image from 'next/image';
import OpenAI from 'openai';
import { generateImage } from '@/actions/generateImage';
import MessagesList from '@/components/chat/MessagesList';
import ChatInput from '@/components/chat/ChatInput/ChatInput';
import { IMAGE_MODELS, IMAGE_QUALITY, IMAGE_SIZES, IMAGE_STYLES, TEXT_MODELS } from '@/constants';
import { TAvailibleModels, TImageModels, TImageQuality, TImageSize, TImageStyle } from '@/lib/types';
import { MOCK_MESSAGES } from '@/mock/messages';
import { showError } from '@/utils/notifications';

export default function ImageGenerator() {
    const [images, setImages] = useState<OpenAI.Image[]>([]);
   const [input, setInput] = useState('');

    const [isLoading, setIsLoading] = useState(false);
    const handleGenerate = async (formData: FormData) => {
        try {
            setIsLoading(true);
            const model = formData.get('model') as TImageModels;
            const size = formData.get('size') as TImageSize;
            const quality = formData.get('quality') as TImageQuality;
            const style = formData.get('style') as TImageStyle;
            const n = formData.get('quantity') as unknown as number;
            const imagesFromApi = await generateImage({
                prompt: input,
                model,
                size,
                quality,
                style,
                n,
            });
            setImages(imagesFromApi);
        } catch (e) {
            showError({
               message: `Произошла ошибка при генерации картинки ${e}`,
            });
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Stack>
            <Container w="100%">
                <MessagesList messages={MOCK_MESSAGES} />

                <ChatInput
                  input={input}
                  setInput={setInput}
                  onAction={handleGenerate}
                  isLoading={isLoading}
                >
                    <Group>
                        <Select
                          maw={150}
                          allowDeselect={false}
                          comboboxProps={{ position: 'top' }}
                          data={IMAGE_MODELS}
                          label="models"
                          name="model"
                        />
                        <Select
                          maw={150}
                          label="sizes"
                          allowDeselect={false}
                          comboboxProps={{ position: 'top' }}
                          data={IMAGE_SIZES}
                          name="size"
                        />
                        <Select
                          maw={150}
                          label="quality"
                          allowDeselect={false}
                          comboboxProps={{ position: 'top' }}
                          data={IMAGE_QUALITY}
                          name="quality"
                        />
                        <Select
                          maw={150}
                          label="style"
                          allowDeselect={false}
                          comboboxProps={{ position: 'top' }}
                          data={IMAGE_STYLES}
                          name="style"
                        />
                        <NumberInput maw={60} label="quantity" name="quantity" />
                    </Group>

                </ChatInput>
            </Container>
            {
                images.map((image) => (
                    image?.url?.length ? <Image src={image.url} alt={image.url} /> : ''
                ))
            }
        </Stack>
    );
}
