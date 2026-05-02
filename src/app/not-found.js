import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='w-full bg-black h-[80vh] flex justify-center items-center text-white flex-col gap-3'>
      <h2 className='text-5xl font-bold'>404 Error Page Not Found</h2>
      <p className='text-md'>Could not find requested resource</p>
      <Link href="/"><button className='btn bg-pink-700 px-10 py-4 mt-5 rounded-2xl text-white border-0'>Return Home</button></Link>
    </div>
  )
}