import { ValidateRequest } from './auth';
import { cache } from 'react';

export const getCurrentUser = cache(async () => {
    const session = await ValidateRequest();
    if (!session.user) {
        return undefined;
    }
    return session.user;
});
