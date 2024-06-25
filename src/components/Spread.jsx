import React from 'react';

function Spread() {
    return (
        <div className="bg-white py-20 h-[70vh]">
            <div className="max-w-screen-2xl mx-auto px-5 sm:px-10">
                <div className="flex items-center justify-center">
                <svg viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" className="icon w-4" data-v-669b4a84=""><path d="M7.41908 4.56679L6.13722 0L4.85418 4.92566L0 6L4.85418 7.25435L6.13722 12L7.3276 7.25435L12 6L7.41908 4.56679Z" fill="currentColor" data-v-669b4a84=""></path></svg>
                    <h1 className="ml-3">In the media</h1>
                </div>
                <div className="mt-10 text-center">
                    <h1 className="text-6xl sm:text-9xl tracking-tighter">Spread</h1>
                    <h1 className="capitalize text-6xl sm:text-9xl tracking-tighter">the news</h1>
                    <p className="w-2/3 sm:w-1/2 mx-auto mt-5 sm:mt-10 text-md sm:text-xl text-zinc-900">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                    <a className="border-b-[1px] border-zinc-900 pb-1 mt-5 inline-block" href="#">
                        Read more
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Spread;
