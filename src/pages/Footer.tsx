import React from 'react'

export default function Footer() {
    return (
        <div className='flex flex-col md:flex-row md:flex-none justify-center items-center py-8'>
            <a className='pb-8 md:pb-0' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">
                <img className='w-[120px] md:w-[100px]' alt="Creative Commons License" src="https://i.creativecommons.org/l/by-nc-sa/4.0/88x31.png" />
            </a>
            <div className='text-sm md:text-lg tracking-[0.10rem] mx-5 md:ml-4'>
                <h1>This work is licensed under a <a className='italic font-semibold tracking-[0.13rem]' rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a></h1>
            </div>
        </div>
    )
}