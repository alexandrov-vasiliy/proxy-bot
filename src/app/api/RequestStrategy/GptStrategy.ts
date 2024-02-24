import OpenAI from 'openai';
import { ApiStrategy } from '@/app/api/RequestStrategy/interface';
import { openai } from '@/app/api/chat/route';
import ChatCompletionMessageParam = OpenAI.ChatCompletionMessageParam;

export class GPTStrategy implements ApiStrategy {
    async makeRequest({ messages, model }: { messages: ChatCompletionMessageParam[], model: string }): Promise<any> {
        return openai.chat.completions.create({
            model,
            stream: true,
            messages,
            max_tokens: 4000,
        });
    }
}
