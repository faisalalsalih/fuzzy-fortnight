import React, { useState, useRef } from 'react'

const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [Hasclicked, setHasclicked] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [loadedvideo, setLoadedvideo] = useState(0);

    const totalVideos = 4;
    const nextVdRef = useRef(null);

    const handleminiclicked = () => {
        setHasclicked(true);

        setcurrentIndex((prevIndex) => prevIndex + 1);
    }

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='videoframe' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className="bg-violet-300 mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">

                    <div onClick={handleminiclicked}>
                        Minivideoplayer
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
