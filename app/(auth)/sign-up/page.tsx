import { signup } from './action';

export default function SignUpPage() {
    return (
        <>
            <h1>Create an account</h1>
            <form action={signup} className="border">
                <label htmlFor="email">Email</label>
                <input
                    name="email"
                    id="email"
                    type="email"
                    className="border"
                />
                <br />
                <label htmlFor="username">Username</label>
                <input name="username" id="username" />
                <br />
                <label htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
                <br />
                <button>Continue</button>
            </form>
        </>
    );
}
