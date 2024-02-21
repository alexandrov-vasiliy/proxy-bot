'use client';

import { Button, Stack, TextInput } from '@mantine/core';
import { useState } from 'react';
import Image from 'next/image';
import OpenAI from 'openai';
import { generateImage } from '@/actions/generateImage';

export default function ImageGenerator() {
    const [images, setImages] = useState<OpenAI.Image[]>([]);

    const handleGenerate = async (formData: FormData) => {
        const prompt = formData.get('prompt') as string;
        const imagesFromApi = await generateImage(prompt);
        setImages(imagesFromApi);
    };

    return (
        <Stack>
            <form action={handleGenerate}>
                <TextInput label="Текст" name="prompt" />
                <Button mt="xs" type="submit">Генерировать</Button>
            </form>
            {
                images.map((image) => (
                    image?.url?.length ? <Image src={image.url} alt={image.url} /> : ''
                ))
            }
        </Stack>
    );
}
