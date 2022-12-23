import React from 'react'

export default function Read() {
    return (
        <div className='flex py-20 bg-xgrey-1 flex-col flex-1 md:flex-row px-3 md:px-8 lg:pl-36'>
            <div className='mx-auto px-5 md:px-0'>
                <div className='flex justify-center border-8 rounded md:w-[40vw] lg:w-[450px] max-w-[400px]'>
                    <img src={require('../assets/Enceladus/1.png')} alt="..." className='max-w-full h-auto align-middle' />
                </div>
            </div>
            <div className='flex flex-auto justify-center w-full md:px-8 mt-10'>
                <div className='flex-col my-auto md:text-2xl tracking-wider'>
                    <div className='pb-10 text-2xl md:text-4xl'>
                        <h1 className='my-10'>Online comic coming soon!</h1>
                        <h1>Maybe...</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}