import React from 'react';

function Work() {
    const data = [
        { imageUrl: "https://a.storyblok.com/f/133769/2400x2990/540fb12941/columbia-pictures-thumbnail.jpg/m/1300x1620/filters:quality(90)", videoUrl: "https://download-video.akamaized.net/v3-1/playback/4bdb3586-71c8-40be-b000-2ba5691333a3/dee0a4f7?__token__=st=1719336623~exp=1719351023~acl=%2Fv3-1%2Fplayback%2F4bdb3586-71c8-40be-b000-2ba5691333a3%2Fdee0a4f7%2A~hmac=0aa32855d4a8cbf2aea2a58cf887d92f30a65eead0af1b6707fecd1d7370ff22&r=dXMtY2VudHJhbDE%3D", title: "Columbia Pictures", description: "Celebrating a Century of Cinema" },
        { imageUrl: "https://a.storyblok.com/f/133769/2400x2990/b66359da25/rino-pelle-hero.jpg/m/1300x1620/filters:quality(90)", videoUrl: "https://download-video.akamaized.net/v3-1/playback/66710880-7060-4d65-965e-38a29da54c52/5ac47112?__token__=st=1719338202~exp=1719352602~acl=%2Fv3-1%2Fplayback%2F66710880-7060-4d65-965e-38a29da54c52%2F5ac47112%2A~hmac=d018f68a2ece6e95a9fdb904fbf9354b93ab42e9411fcd4810d292858f1eb5c0&r=dXMtY2VudHJhbDE%3D", title: "Rino & Pelle", description: "Effortless Chic lifestyle" },
        { imageUrl: "https://a.storyblok.com/f/133769/2400x2990/3e8f8d08f7/aebele-interiors-hero.jpg/m/1300x1620/filters:quality(90)", videoUrl: "https://download-video.akamaized.net/v3-1/playback/57423169-59cb-4b8a-ad09-3bd812a12ee7/4ce94964?__token__=st=1719338425~exp=1719352825~acl=%2Fv3-1%2Fplayback%2F57423169-59cb-4b8a-ad09-3bd812a12ee7%2F4ce94964%2A~hmac=9e37d70d40792b57a178bf51a54a470a0e4bf63e455bb1280a4b471833575626&r=dXMtd2VzdDE%3D", title: "Aebele Interiors", description: "Luxurious desip—perience" },
        { imageUrl: "https://a.storyblok.com/f/133769/2400x2990/20d07e6f0c/pixelflakes-hero.jpg/m/1300x1620/filters:quality(90)", videoUrl: "https://download-video.akamaized.net/v3-1/playback/bfac2114-1cd7-4a50-8b21-ec941cbfb811/1f289d51?__token__=st=1719338436~exp=1719352836~acl=%2Fv3-1%2Fplayback%2Fbfac2114-1cd7-4a50-8b21-ec941cbfb811%2F1f289d51%2A~hmac=e266a1a8dc610a1dadc368e11cc999045a9bf4ece87c0bc258ba212ef5fc2d6b&r=dXMtd2VzdDE%3D", title: "Pixelflakes", description: "Architectural marketing agency" },
    ];

    return (
        <div className='w-full sm:pl-28 text-zinc-900'>
            <div className='max-w-screen-2xl px-5 sm:px-10 mx-auto py-20'>
                <div className='feautured gap-2 sm:hidden'>
                    <div className='flex gap-2'>
                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <div>Featured Projects</div>
                    </div>
                    <div>
                    <p className='tracking-tight leading-1 mt-10'>
                        Highlights of cases that we
                    </p>
                    <p className='tracking-tight leading-1'>
                        passionately built with forward-thinking
                    </p>
                    <p className='tracking-tight leading-1'>
                        clients and friends over the years.
                    </p>
                    </div>
                  
                </div>
                <div className='text-6xl mt-5 sm:text-[15vw]'>Work</div>

                <div className='wadadiv sm:flex sm:justify-between w-full hidden'>
                    <div className='shotaleft w-[50%]'>
                        <div className='videoimage w-full mt-10 p-10 '>
                            <img className='block w-full h-full object-cover' src={data[0].imageUrl} alt="" />
                            <video
                                className='sm:hidden block w-full h-full object-cover scale-[1.02] mb-10'
                                muted
                                loop
                                autoPlay
                            >
                                <source src={data[0].videoUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                            <div className='mt-10'>
                                <h1>{data[0].title}</h1>
                                <h1 className='text-zinc-400 tracking-wide'>{data[0].description}</h1>
                            </div>
                        </div>
                    </div>

                    <div className='shotaright w-[40%]  p-10 flex flex-col justify-between'>
                        <div className='shotarightanderupper w-full h-1/2'>

                            <div className='mt-10 text-2xl   '>
                                <div className='feautured flex gap-2 text-sm'>
                                    <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                                    <div>Featured Projects</div>
                                </div>
                                <div className='mt-20'>
                                    <p className='tracking-tight leading-1'>
                                        Highlights of cases that we
                                    </p>
                                    <p className='tracking-tight leading-1'>
                                        passionately built with forward-thinking
                                    </p>
                                    <p className='tracking-tight leading-1'>
                                        clients and friends over the years.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <div className='shotarightandthale   w-full h-1/2'>
                            <div className='videoimage w-fit h-full  '>
                                <img className='w-full h-full object-contain' src={data[1].imageUrl} alt="" />
                                {/* <video
                                    className=' block w-full h-full object-cover scale-[1.02] mb-10'
                                    muted
                                    loop
                                    autoPlay
                                >
                                    <source src={data[1].videoUrl} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video> */}
                                <div className='mt-10'>
                                    <h1>{data[1].title}</h1>
                                    <h1 className='text-zinc-400 tracking-wide'>{data[1].description}</h1>
                                </div>
                            </div>
                            <div>

                            </div>
                        </div>
                    </div>
                </div>

                <div className='wadadiv2 w-full hidden sm:flex mt-20 h-[120vh] '>
                    <div className='wadadivleft   w-1/2 pt-[35vw] px-10 pr-36'>
                        <div className='wdrimg  w-full h-full'>
                            <img src={data[3].imageUrl} className='object-cover w-full h-full' alt="" />
                            <div className='mt-5'>
                                <h1>{data[2].title}</h1>
                                <h1 className='text-zinc-400 tracking-wide'>{data[2].description}</h1>
                            </div>
                        </div>
                    </div>
                    <div className='wadadivright  w-[70%] pr-48 pb-36 pt-10'>
                        <div className='wdrimg   w-full h-full  '>
                            <img src={data[2].imageUrl} className='object-cover w-full h-full' alt="" />
                            <div className='mt-5'>
                                <h1>{data[3].title}</h1>
                                <h1 className='text-zinc-400 tracking-wide'>{data[3].description}</h1>
                            </div>
                        </div>
                    </div>

                </div>

                {data.map((item, index) => (
                    <div key={index} className='videoimage w-full mt-10 sm:w-96 sm:hidden'>
                        <img className='hidden sm:block w-full h-full object-cover' src={item.imageUrl} alt="" />
                        <video
                            className='sm:hidden block w-full h-full object-cover scale-[1.02] mb-10'
                            muted
                            loop
                            autoPlay
                        >
                            <source src={item.videoUrl} type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                        <div>
                            <h1>{item.title}</h1>
                            <h1 className='text-zinc-400 tracking-wide'>{item.description}</h1>
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
}

export default Work;
