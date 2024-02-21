import OpenAI from 'openai';
import { OpenAIStream, StreamingTextResponse } from 'ai';
import { NextRequest } from 'next/server';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_HOST,
});

export const runtime = 'edge';

export async function POST(req: NextRequest) {
        const { messages, model } = await req.json();
        console.log('api chat send messages to: ', model, openai.apiKey, openai.baseURL);
        const response = await openai.chat.completions.create({
            model,
            stream: true,
            messages,
            max_tokens: 4000,
        });

        const stream = OpenAIStream(response, {
            onCompletion(completion) {
                console.log('stream complete', completion);
            },
        });
        return new StreamingTextResponse(stream);
}
