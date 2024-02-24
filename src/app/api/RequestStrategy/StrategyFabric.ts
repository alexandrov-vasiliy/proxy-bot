import { GPTStrategy } from '@/app/api/RequestStrategy/GptStrategy';
import { DALLEStrategy } from '@/app/api/RequestStrategy/DalleStrategy';
import { ApiStrategy } from '@/app/api/RequestStrategy/interface';

export class StrategyFactory {
    static getStrategy(model: string): ApiStrategy {
        switch (model) {
            case 'gpt-3.5-turbo':
            case 'gpt-4-turbo-preview':
            case 'gpt-3.5-turbo-16k':
            case 'gpt-4':
            case 'gpt-4-1106-preview':
            case 'gpt-4-vision-preview':
                return new GPTStrategy();
            case 'dall-e-2':
            case 'dall-e-3':
                return new DALLEStrategy();
            default:
                throw new Error('Unknown strategy type');
        }
    }
}
