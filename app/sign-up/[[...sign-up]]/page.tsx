import { SignUp } from "@clerk/nextjs";

export default function Page() {
    return (
        <div className="clerk-bg w-full h-screen flex justify-center items-center">
            <SignUp />
        </div>
    );
}