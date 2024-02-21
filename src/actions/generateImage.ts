'use server';

import { openai } from '@/app/api/chat/route';

export async function generateImage(prompt: string) {
    const response = await openai.images.generate({
        model: 'dall-e-3',
        prompt,
        response_format: 'url',
        n: 1,
        size: '1024x1024',
    });

    return response.data;
}
