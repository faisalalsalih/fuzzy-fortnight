import React, { useState, useRef } from 'react'

const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [Hasclicked, setHasclicked] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [loadedvideo, setLoadedvideo] = useState(0);

    const totalVideos = 4;
    const nextvideoRef = useRef(null);

    // Take the source of every videos
    const getvideosource = (index) => `videos/hero-${index}.mp4`; 

    const handleminiclicked = () => {
        setHasclicked(true);

        setcurrentIndex((prevIndex) => prevIndex + 1);
    }

    const handlevideoload = () => {
        setLoadedvideo((prev) => prev + 1);
    }

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='videoframe' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className="bg-violet-300 mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">

                    <div onClick={handleminiclicked} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                        <video ref={nextvideoRef} src={getvideosource(currentIndex + 1)} loop muted id='current-video' className='size-64 origin-center scale-150 object-cover object-center'/>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}

export default Hero
