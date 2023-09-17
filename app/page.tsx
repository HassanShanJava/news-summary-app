import HomePage from '@/components/home'

export default async function index() {
  // const data=await prisma.adminUser.findFirst()
  return (
    <>
      <div className='w-full h-screen'>
        <HomePage />
      </div>
    </>
  )
}
