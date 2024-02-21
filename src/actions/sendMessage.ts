'use server';

import { IChatMessage, SendMessageResponse, TAvailibleModels } from '@/lib/types';
import aiAxios from '@/lib/axios';

export interface ISendMessageParams {
    model: TAvailibleModels
    messages: IChatMessage[]
}

export async function sendMessage(
    {
        model,
        messages,
    }: ISendMessageParams):
    Promise<SendMessageResponse> {
    console.log(`sendMessage to OPENAI model ${model}`);
    try {
        const res = await aiAxios.post<SendMessageResponse>('/v1/chat/completions', { model, messages });

        return res.data;
    } catch (e) {
        console.log('error', e);
        throw e;
    }
}
