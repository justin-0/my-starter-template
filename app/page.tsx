import { ValidateRequest } from '@/lib/auth';
import { getCurrentUser } from '@/lib/session';

export default async function HomePage() {
    const user = await ValidateRequest();
    console.log(user);
    return <main className=""></main>;
}
