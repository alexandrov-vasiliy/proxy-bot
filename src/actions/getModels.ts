'use server';

import aiAxios from '@/lib/axios';
import { ApiResponse } from '@/lib/types';

export interface IModel {
    id: string
    object: string
    created: number
    owned_by: string
}

export async function getModels() {
    try {
        const response = await aiAxios.get('/v1/models');

        return response.data as ApiResponse<IModel[]>;
    } catch (e) {
        console.error(e);
        throw e;
    }
}
