// middleware.ts - used for CSRF protection, this is default in server actions
import { verifyRequestOrigin } from 'lucia';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest): Promise<NextResponse> {
    if (
        request.method === 'GET' ||
        request.method === 'DELETE' ||
        request.method === 'PATCH'
    ) {
        return NextResponse.next();
    }
    const originHeader = request.headers.get('Origin');
    // NOTE: You may need to use `X-Forwarded-Host` instead
    const hostHeader = request.headers.get('Host');
    if (
        !originHeader ||
        !hostHeader ||
        !verifyRequestOrigin(originHeader, [hostHeader])
    ) {
        return new NextResponse(null, {
            status: 403,
        });
    }
    return NextResponse.next();
}
