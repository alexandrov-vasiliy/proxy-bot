import { ApiStrategy } from '@/app/api/RequestStrategy/interface';

export class OpenAIContext {
    private strategy: ApiStrategy;

    constructor(strategy: ApiStrategy) {
        this.strategy = strategy;
    }

    async executeStrategy(inputData: any): Promise<any> {
        return this.strategy.makeRequest(inputData);
    }
}
