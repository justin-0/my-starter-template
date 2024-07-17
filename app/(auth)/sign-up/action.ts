'use server';

import { hash } from '@node-rs/argon2';
import { generateIdFromEntropySize } from 'lucia';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { lucia } from '@/lib/auth';
import prisma from '@/lib/db';

export const signup = async (formData: FormData) => {
    const username = formData.get('username');
    const password = formData.get('password');

    if (
        typeof username !== 'string' ||
        username.length < 3 ||
        username.length > 31 ||
        !/^[a-z0-9_-]+$/.test(username)
    ) {
        return {
            error: 'Invalid username',
        };
    }

    if (
        typeof password !== 'string' ||
        password.length < 6 ||
        password.length > 255
    ) {
        return {
            error: 'Invalid password',
        };
    }

    const passwordHash = await hash(password, {
        memoryCost: 19456,
        timeCost: 2,
        outputLen: 32,
        parallelism: 1,
    });

    const userId = generateIdFromEntropySize(10);

    await prisma.user.create({
        data: {
            id: userId,
            username,
            password_hash: passwordHash,
        },
    });

    const session = await lucia.createSession(userId, {});
    const sessionCookie = await lucia.createSessionCookie(session.id);
    cookies().set(
        sessionCookie.name,
        sessionCookie.value,
        sessionCookie.attributes,
    );
    return redirect('/');
};
