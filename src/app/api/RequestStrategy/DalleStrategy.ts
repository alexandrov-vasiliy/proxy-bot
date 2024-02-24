import OpenAI from 'openai';
import { ApiStrategy } from '@/app/api/RequestStrategy/interface';
import ImageGenerateParams = OpenAI.ImageGenerateParams;
import { openai } from '@/app/api/chat/route';

export class DALLEStrategy implements ApiStrategy {
    async makeRequest(inputData: ImageGenerateParams) {
        return (await openai.images.generate(inputData)).data;
    }
}
