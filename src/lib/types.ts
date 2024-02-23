import { Message } from 'ai';

export type ApiResponse<T> = {
    object: string
    data: T
};

export type ResponseChoice = {
    finish_reason: string
    index: number
    logprobs: null
    message: IChatMessage
};

export type SendMessageResponse = {
    choices: ResponseChoice[]
    created: number
    id: string
    model: TAvailibleModels
    object: string
    system_fingerprint: string
};

export type TAvailibleModels =
    'dall-e-3'
    | 'gpt-3.5-turbo-instruct-0914'
    | 'gpt-3.5-turbo-instruct'
    | 'text-embedding-ada-002'
    | 'dall-e-2'
    | 'gpt-3.5-turbo-0613'
    | 'gpt-4-1106-preview'
    | 'gpt-3.5-turbo-16k-0613'
    | 'gpt-4'
    | 'whisper-1'
    | 'davinci-002'
    | 'text-embedding-3-small'
    | 'gpt-4-0613'
    | 'gpt-3.5-turbo-16k'
    | 'text-embedding-3-large'
    | 'tts-1-hd-1106'
    | 'tts-1-hd'
    | 'gpt-3.5-turbo-1106'
    | 'gpt-3.5-turbo-0125'
    | 'gpt-4-vision-preview'
    | 'tts-1-1106'
    | 'gpt-3.5-turbo-0301'
    | 'gpt-3.5-turbo'
    | 'tts-1'
    | 'babbage-002'
    | 'gpt-4-0125-preview'
    | 'gpt-4-turbo-preview';

export type TMessageRole = 'user' | 'system' | 'assistant';

export interface IChatMessage {
    role: TMessageRole
    content: string
}

export type TContentType = 'text' | 'image_url';
export type TImageDetail = 'low' | 'high' | 'auto';

export interface IChatContent {
    type: TContentType
    text?: string
    image_url?: {
        url: string
        detail?: TImageDetail
    }
}
export interface Chat extends Record<string, any> {
    id: string
    title: string
    createdAt: Date
    userId: string
    path: string
    messages: Message[]
    sharePath?: string
}
