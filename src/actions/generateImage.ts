'use server';

import aiAxios from '@/lib/axios';

export async function generateImage(prompt: string) {
    const response = await aiAxios.post('/images/generations', {
        model: 'dall-e-3',
        prompt,
        response_format: 'url',
        n: 1,
        size: '1024x1024',
    });

    return response.data;
}
