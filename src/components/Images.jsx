import React from 'react';

function Images() {
    return (
        <div className='w-full h-[100vh] bg-white flex items-center justify-center overflow-hidden'>
            <div className='w-[50%] sm:w-[20%] h-1/2 sm:h-[60vh] relative  bg-red-300'>
            <img className='w-full h-full' src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
                <div className='absolute w-20 sm:w-40 h-[10rem] -right-[8vw] top-6'>
                    <img
                        className='w-full h-full object-cover scale-y-125'
                        src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/1200x1703/filters:quality(90)"
                        alt="Image 1"
                    />
                    
                </div>
                <div className='absolute w-[8rem] sm:w-[20rem] aspect-video -left-[18vw] top-[25vw] overflow-hidden'>
                   


                <img 
                        className='w-full h-full object-cover object-top scale-150'
                        src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)"
                        alt="Image 2"
                    />
                </div>
                <div className='absolute w-[6rem] sm:w-[12rem] aspect-video bottom-[20vw] -left-[5vw] transform -translate-x-1/2'>
                   
                     <video
                        autoPlay
                        loop
                        muted
                        className='w-full h-full object-cover scale-125'
                    >
                        <source src="https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1719338436~exp=1719352836~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=e266a1a8dc610a1dadc368e11cc999045a9bf4ece87c0bc258ba212ef5fc2d6b&r=dXMtd2VzdDE%3D" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className='absolute w-[10rem] sm:w-[20rem] aspect-[1.5/1] -right-[50%]  sm:-right-[79%] -bottom-[10%]'>
                    <video
                        autoPlay
                        loop
                        muted
                        className='w-full h-full object-top scale-125'
                    >
                        <source src="https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1719338436~exp=1719352836~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=e266a1a8dc610a1dadc368e11cc999045a9bf4ece87c0bc258ba212ef5fc2d6b&r=dXMtd2VzdDE%3D" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>
        </div>
    );
}

export default Images;
