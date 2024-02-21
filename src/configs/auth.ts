import { AuthOptions } from 'next-auth';

import VkProvider from 'next-auth/providers/vk';

export const authConfig: AuthOptions = {
    providers: [
        VkProvider({
            clientId: '',
            clientSecret: '',
        }),
    ],
};
