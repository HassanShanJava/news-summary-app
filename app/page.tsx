import { prisma } from '@/lib/prisma'
import { UserButton } from '@clerk/nextjs'
import Image from 'next/image'

export default async function  Home() {
  // const data=await prisma.adminUser.findFirst()
  return (
    <>
    <div>
      Hello 
      <UserButton afterSignOutUrl='/sign-in'/>
    </div>
    </>
  )
}
