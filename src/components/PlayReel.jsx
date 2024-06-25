import React from 'react'

function PlayReel() {
    return (
        <div className='h-[100vh] bg-black text-white  '>


            <div className='flex w-full h-full flex-col justify-between  '>
                <div className=' h-full'>
                    <div className='max-w-screen-xl mx-auto h-full  flex flex-col sm:justify-around justify-evenly'>
                        <div className='flex  p-10 w-full justify-center gap-3  border-red-700'> <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>  <span>Work in motion</span></div>
                        <div className='relative flex justify-center  items-center'>
                            <div className='sm:w-96 w-60 h-60 sm:h-96 flex justify-center items-center' >

                                <video muted loop autoPlay className='w-full f-full object-cover' src="https://download-video.akamaized.net/v3-1/playback/3422225a-55be-4749-a973-f6ce4dfa7f6d/1bc4a43a-fc601472?__token__=st=1719344593~exp=1719358993~acl=%2Fv3-1%2Fplayback%2F3422225a-55be-4749-a973-f6ce4dfa7f6d%2F1bc4a43a-fc601472%2A~hmac=1521b48fa76d88695aef9f43109a55705ba130577d62141f95d640849fb2ce59&r=dXMtd2VzdDE%3D"></video>

                            </div>
                            <div className=' text-6xl absolute sm:text-9xl flex justify-between w-[70%] mx-auto border-red-600  '>
                                <div>Play</div>

                                <div>Reel</div>
                            </div>

                        </div>
                        <div className='w-full flex flex-col justify-center items-center'>
                            <p>Our work is best experienced in motion.

                            </p>
                            <p> Don't
                                to put on your headphones.
                                Play</p>
                        </div>
                    </div>

                </div>

            </div>



        </div>
    )
}

export default PlayReel