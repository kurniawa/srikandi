import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='p-2'>
      <div className='flex justify-end'>
        <Link href={'products/add'} className='btn btn-success btn-xs text-white'>+ Product</Link>
      </div>
      <div className="mt-9 flex justify-center">
      </div>
    </main>
  )
}
