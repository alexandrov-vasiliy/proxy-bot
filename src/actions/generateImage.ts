'use server';

import OpenAI from 'openai/index';
import ImageGenerateParams = OpenAI.ImageGenerateParams;

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_HOST,
});

export async function generateImage(params: ImageGenerateParams) {
    const response = await openai.images.generate(params);

    return response.data;
}
