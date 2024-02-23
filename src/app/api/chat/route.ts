import OpenAI from 'openai';
import { nanoid, OpenAIStream, StreamingTextResponse } from 'ai';
import { NextRequest } from 'next/server';
import { kv } from '@vercel/kv';
import { getServerSession } from 'next-auth';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: process.env.OPENAI_API_HOST,
});

export const runtime = 'edge';

export async function POST(req: NextRequest) {
    const json = await req.json();
    const userId = (await getServerSession())?.user.id;
    const { messages, model } = json;

    if (!userId) {
        return new Response('Unauthorized', {
            status: 401,
        });
    }

    console.log('api chat send messages to: ', model, openai.apiKey, openai.baseURL);
    const response = await openai.chat.completions.create({
        model,
        stream: true,
        messages,
        max_tokens: 4000,
    });

    const stream = OpenAIStream(response, {
        async onCompletion(completion) {
            const title = json.messages[0].content.substring(0, 100);
            const id = json.id ?? nanoid();
            const createdAt = Date.now();
            const path = `/chat/${id}`;
            const payload = {
                id,
                title,
                createdAt,
                path,
                messages: [
                    ...messages,
                    {
                        content: completion,
                        role: 'assistant',
                    },
                ],
            };
            await kv.hmset(`chat:${id}`, payload);
            await kv.zadd(`user:chat:${userId}`, {
                score: createdAt,
                member: `chat:${id}`,
            });
            console.log(completion);
        },
    });
    return new StreamingTextResponse(stream);
}
