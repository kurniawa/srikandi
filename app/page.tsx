import Image from 'next/image'

export default function Home() {
  return (
    <main className='p-2'>
      <div className="mt-9 flex justify-center">
          <input type="text" placeholder="nama produk" className="input input-bordered w-1/2" />
      </div>
    </main>
  )
}
