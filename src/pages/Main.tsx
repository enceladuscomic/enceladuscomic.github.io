import React from 'react'

function Main() {
    function directToRead() {
        window.location.href = "/read"
    }

    return (
        <div className='bg-xgrey-1 pb-[2rem] pt-0'>
            <div className='bg-text-color py-5 text-2xl md:text-4xl'>
                <i className=' text-neutral-900 uppercase font-bold tracking-wide'>"All successfull life is..."</i>
            </div>
            <div className='flex flex-col flex-1 md:flex-row pt-8 mx-auto w-[80vw] px-3 md:px-10 lg:pl-36'>
                <div className='mx-auto px-5 md:px-0'>
                    <div className='flex justify-center border-8 rounded md:w-[40vw] lg:w-[450px] max-w-[400px]'>
                        <img src={require('../assets/Enceladus/1.png')} alt="..." className='max-w-full h-auto align-middle' />
                    </div>
                </div>
                <div className='flex flex-auto justify-center w-full px-5 md:px-16 mt-10'>
                    <div className='flex-col my-auto md:text-2xl tracking-[0.08rem]'>
                        <div className='pb-14 text-lg md:text-3xl'>
                            <i className='tracking-widest'>ENCELADUS </i> was created and illustrated by <strong className='tracking-widest'>Laurie Hall</strong>.
                        </div>
                        <div className='leading-10'>
                            Inspired by the fictional religious book "Earthseed" from <span className='font-semibold tracking-widest'>Octavita Butler</span>'s post-apocalyptic science fiction novel <i className=' tracking-widest md:text-2xl font-semibold'>Parable of the Sower</i>, <span className='font-semibold italic underline tracking-widest'>Enceladus</span> explores the notion of change as a means of moving pas our humanistic needs to successfully become <i>post-human</i>.
                            {/* Inspired by the fictional religious book "Earthseed" from <span className='font-semibold tracking-widest'>Octavita Butler</span>'s post-apocalyptic science fiction novel <i className=' tracking-widest md:text-2xl font-semibold'>Parable of the Sower</i>, <span className='font-semibold italic underline tracking-widest'>Enceladus</span> highlights the change necessary to truly become <i>post-human</i>. Pulling from other "famous" novels in science fiction
                            by following a being that has adapted to survive on a distant, hostile world. */}
                            {/* Inspired by the fictional religious book "Earthseed" from <span className='font-semibold tracking-widest'>Octavita Butler</span>'s post-apocalyptic science fiction novel <i className=' tracking-widest md:text-2xl font-semibold'>Parable of the Sower</i>, <span className='font-semibold italic underline tracking-widest'>Enceladus</span> explores the teachings of the religion and it means to become <i>post-human</i> by following a being that has adapted to survive on a distant, hostile world. */}
                        </div>
                        <div className='text-3xl pt-8 md:pt-20'>
                            <button className='hover:opacity-70' onClick={directToRead}>Read Enceladus</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main