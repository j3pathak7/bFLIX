import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {
    return (
        <div className='text-center bg-white pb-10'>
            <div className='w-60 mx-auto'>
                <Image src={'/movie_night.png'} width={400} height={200} layout='responsive' />
            </div>
            <h1 className='text-2xl text-gray-700 uppercase font-bold'>Welcome to bFLIX</h1>
            <p className='text-gray-500'>Watch or download movies for free - A website by JP</p>
            <Link href={'/contact'}>
                <button button className='bg-gray-700 text-white py-3 px-6 rounded text-sm mt-4 hover:bg-white hover:text-gray-700'>Contact Us</button>
            </Link>
        </div >
    )
}

export default Hero