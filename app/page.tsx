import HomePage from "@/components/home";
import Head from "next/head";

export default async function index() {
  // const data=await prisma.adminUser.findFirst()
  return (
    <>
      <div className="w-full h-screen">
        <HomePage />
      </div>
    </>
  );
}
