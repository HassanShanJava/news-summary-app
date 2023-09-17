import { SignIn } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="clerk-bg w-full h-screen flex justify-center items-center">
            <SignIn />
        </div>
    );
}