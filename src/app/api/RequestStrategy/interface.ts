export interface ApiStrategy {
    makeRequest(inputData: any): Promise<any>;
}
