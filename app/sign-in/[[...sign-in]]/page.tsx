import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="clerk-bg w-full h-screen flex justify-center items-center">
            <div className="opacity-100">
                <SignIn />
            </div>
        </div>
    );
}