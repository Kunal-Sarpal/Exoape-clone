import { easeInOut, motion } from 'framer-motion';
import React from 'react';

function Landing() {
    const variants = {
        initial: { rotate: 20, opacity: [0,0.2,0.7] },
        animate: { rotate: 0, opacity: 1 }
    };

    return (
        <div className='w-full h-[200vh] relative overflow-hidden'>
            <div className='w-full h-full' data-scroll data-scroll-speed="-1">
                <img 
                    className='w-full h-full object-cover'
                    src="https://a.storyblok.com/f/133769/1920x2716/5c24d6b467/exo-ape-hero-1.jpg/m/2400x3395/filters:quality(90)"
                    alt="Background"
                />
            </div>
            <div className='absolute top-0 max-w-screen-2xl p-5 sm:px-32 text-white h-full'>
                <div className='text-white font-normal sm:px-6 mt-96 sm:mt-80'>
                    {[
                        "Global digital design studio partnering with",
                        "brands and businesses that create exceptional",
                        "experiences where people live, work, and unwind."
                    ].map((item, index) => (
                        <div className='overflow-hidden' key={index}>
                            <motion.div
                                variants={variants}
                                initial="initial"
                                animate="animate"
                                transition={{ delay: index * 0.1, duration: 1, ease: easeInOut }}
                                className='text-md sm:text-3xl origin-left'
                            >
                                {item}
                            </motion.div>
                        </div>
                    ))}
                </div>
                <div className='heading mt-5'>
                    <h1 className='text-6xl sm:text-[270px] tracking-tighter leading-none text-white'>Digital</h1>
                    <h1 className='text-6xl sm:text-[270px] tracking-tighter leading-none text-white'>Design</h1>
                    <h1 className='text-6xl sm:text-[270px] tracking-tighter leading-none text-white'>Experience</h1>
                </div>
                <div className='para2 mt-20 flex sm:px-6'>
                    <div>
                        <p className='text-md sm:text-2xl font-normal'>We help experience-driven companies thrive</p>
                        <p className='text-md sm:text-2xl font-normal'>by making their audience feel the refined</p>
                        <p className='text-md sm:text-2xl font-normal'>intricacies of their brand and product in</p>
                        <p className='text-md sm:text-2xl font-normal'>digital space. Unforgettable journeys start</p>
                        <p className='text-md sm:text-3xl'>with a click.</p>
                    </div>
                </div>
                <div className='flex justify-between sm:px-6'>
                    <div className='w-fit underline mt-10 text-md'>
                        <a href="">The Studio</a>
                    </div>
                    <div className='hidden sm:flex w-96 justify-between text-xl'>
                        <div>
                            <h1>Work</h1>
                            <h1>Studio</h1>
                            <h1>News</h1>
                            <h1>Contact</h1>
                        </div>
                        <div>
                            <h1>sarpalkunal@gmail.com</h1>
                            <h1>+917814505429</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;
