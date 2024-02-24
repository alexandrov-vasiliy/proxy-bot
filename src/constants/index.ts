import { TAvailibleModels } from '@/lib/types';

export const TEXT_MODELS: TAvailibleModels[] = ['gpt-4-turbo-preview', 'gpt-3.5-turbo-16k', 'gpt-3.5-turbo', 'gpt-4', 'gpt-4-vision-preview', 'gpt-4-1106-preview', 'dall-e-2', 'dall-e-3'];
export const IMAGE_MODELS: TAvailibleModels[] = ['dall-e-2', 'dall-e-3'];

export const IMAGE_SIZES = ['256x256', '512x512', '1024x1024', '1792x1024', '1024x1792'];

export const IMAGE_STYLES = ['vivid', 'natural'];

export const IMAGE_QUALITY = ['standard', 'hd'];
