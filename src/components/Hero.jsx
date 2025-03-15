import React, { useState, useRef } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react'


const Hero = () => {
    const [currentIndex, setcurrentIndex] = useState(1);
    const [Hasclicked, setHasclicked] = useState(false);
    const [isLoading, setisLoading] = useState(true);
    const [loadedvideo, setLoadedvideo] = useState(0);

    const totalVideos = 4;
    const nextvideoRef = useRef(null);

    // Take the source of every videos
    const getvideosource = (index) => `videos/hero-${index}.mp4`; 

    // This Function controlled when someone clicked on the video
    const handleminiclicked = () => {
        setHasclicked(true);
        setcurrentIndex(upcomingvideoindex);
    }

    // this function store the data in loadedvideo
    const handlevideoload = () => {
        setLoadedvideo((prev) => prev + 1);
    }

    // This function help in to check our next video index
    const upcomingvideoindex = (currentIndex % totalVideos) + 1; 

    // Gsap Animation is here
    useGSAP(() => {
        if(Hasclicked){
            gsap.set("#next-video", {visibility: 'visible'});

            gsap.to('#next-video')
        }
    })

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        <div id='videoframe' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className="mask-clip-path absolute-center z-50 size-64 cursor-pointer overflow-hidden rounded-lg">

                    <div onClick={handleminiclicked} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                        <video ref={nextvideoRef}
                         src={getvideosource(upcomingvideoindex)}
                          loop
                          muted
                          id='current-video'
                          className='size-64 origin-center scale-150 object-cover object-center'
                          onLoadedData={handlevideoload}/>
                    </div>
                </div>

                <video 
                ref={nextvideoRef}
                src={getvideosource(currentIndex)}
                loop
                muted
                id='next-video'
                className='absolute-center invisible absolute z-20 size-64 object-cover object-center'
                onLoadedData={handlevideoload}/>


                <video 
                src={getvideosource(currentIndex === totalVideos - 1 ? 1 : currentIndex)}
                // autoPlay
                loop
                muted
                className='absolute left-0 top-0 size-full object-cover object-center'
                onLoadedData={handlevideoload}/>
            </div>
            <h1 className='special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75'>G<b>a</b>ming</h1>

            <div className="absolute top-0 left-0 size-full z-40">
                <div className="mt-24 px-5 sm;px-10">
                    <h1 className='special-font hero-heading text-blue-100'>redefi<b>n</b>e</h1>
                    <p className='mb-5 max-w-64 font-robert-regular text-blue-100'>Enter the Metagame Layer <br /> Unleash the Play Economy</p>
                    <Button id='watch-trailer' title='Watch Trailer' leftIcon={<TiLocationArrow />} containerClass={"bg-yellow-300 flex-center gap-1"}/>
                </div>
            </div>
        </div>

        <h1 className='special-font hero-heading absolute bottom-5 right-5  text-blue-75'>G<b>a</b>ming</h1>

    </div>
  )
}

export default Hero
