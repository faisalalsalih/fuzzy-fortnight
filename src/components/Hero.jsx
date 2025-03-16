import React, { useState, useRef, useEffect } from 'react';
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';


gsap.registerPlugin(ScrollTrigger);


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

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
                onStart: () => nextvideoRef.current.play(),
            })

            gsap.from('current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut'
            })
        }
    }, {dependencies: [currentIndex], revertOnUpdate:true})


    // Another gsap for change the clip path
    useGSAP(() => {
        gsap.set('#videoframe', {
            clipPath: 'polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%'
        })

        gsap.from('#videoframe', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0 0 0 0',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#videoframe',
                start: 'center',
                end: 'bottom',
                scrub: true
            }
        })
    })


    // This useEffect Hook will handle tha loadedvideos
    useEffect(() => {
        if(loadedvideo === totalVideos - 1){
            setisLoading(false);
        }
    }, [loadedvideo])

  return (
    <div className='relative h-dvh w-screen overflow-x-hidden'>
        {isLoading && (
            <div className='flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50'>
                <div className="three-body">
                    <div className="three-body__dot"/>
                    <div className="three-body__dot"/>
                    <div className="three-body__dot"/>
                </div>
            </div>
        )}
        <div id='videoframe' className='relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75'>
            <div>
                <div className="mask-clip-path absolute-center  z-50 mt-8 size-54 sm:size-64 cursor-pointer overflow-hidden rounded-lg">

                    <div onClick={handleminiclicked} className='origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100'>
                        <video ref={nextvideoRef}
                         src={getvideosource(upcomingvideoindex)}
                         autoPlay
                          loop
                          muted
                          id='current-video'
                          className='size-64 origin-center scale-150 object-cover object-center'
                          onLoadedData={handlevideoload}/>
                    </div>
                </div>

                {/* invisible video tag is here */}
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
                autoPlay
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

        <h1 className='special-font hero-heading absolute bottom-5 right-5  text-black-400'>G<b>a</b>ming</h1>
    </div>
  )
}

export default Hero
