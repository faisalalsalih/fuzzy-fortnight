import React, { useEffect, useRef, useState } from 'react'
import Button from './Button';
import { TiLocationArrow } from 'react-icons/ti';
import { useWindowScroll } from 'react-use';
import gsap from 'gsap';



const navitems = ['Nexus', 'Vault', 'Prologue', 'About', 'Contact'];

const Navbar = () => {

    const navConatinerRef = useRef(null);

    // For Auto the Below is the Ref
    const audioElementRef = useRef(null);

    // A state to control the on off of the Audio
    const [isAudioPlaying, setisAudioPlaying] = useState(false);


    // A State To Control Indicator Active or not
    const [isAndicatorActive, setisAndicatorActive] = useState(false);

    const toggleAudioIndicator = () => {

      setisAudioPlaying((prev) => !prev);

      setisAndicatorActive((prev) => !prev);
    }



    // Now we will Check How we can managed the state of it by useEffect
    useEffect(() => {
      if(isAudioPlaying) {
        audioElementRef.current.play();
      }
      else{
        audioElementRef.current.pause();
      }
    }, [isAudioPlaying])




    // From Here the start of windows scroll Properties

    // Get the Coordinates Here

    const { y: currentScrollY } = useWindowScroll();

    // A useState to check where the scroll Enters

    const [lastScrollY, setlastScrollY] = useState(0);


    const [isNavvisible, setisNavvisible] = useState(true);



    useEffect(() => {
      if(currentScrollY === 0){
        setisNavvisible(true);
        navConatinerRef.current.classList.remove('floating-nav');
      }
      else if (currentScrollY > lastScrollY){
        setisNavvisible(false);
        navConatinerRef.current.classList.add('floating-nav');
      }
      else if (currentScrollY < lastScrollY){
        setisNavvisible(true);
        navConatinerRef.current.classList.add('floating-nav');
      }

      setlastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY])


    useEffect(() => {
      gsap.to(navConatinerRef.current, {
        y: isNavvisible ? 0 : -100,
        opacity: isNavvisible ? 1 : 0,
        duration: 0.2 
      })
    }, [isNavvisible])

  return (
    <div ref={navConatinerRef} className='fixed inset-x-0 top-4 z-50 h-16 border-none  transition-all duration-700 sm:inset-x-6'>
      <header className='absolute top-1/2 w-full -translate-y-1/2'>
      <nav className='flex size-full items-center justify-between p-4'>
        <div className='flex items-center gap-7'>
            <img src="/img/logo.png" alt="logo" className='w-10' />
            <Button id="product-button" title="Products" rightIcon={<TiLocationArrow />} containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"/>
        </div>
        <div className="flex h-full items-center">
            <div className="hidden md:block">
                {navitems.map((item) => (
                    <a key={item} href={`#${item.toLowerCase()}`} className='nav-hover-btn'>
                        {item}
                    </a>
                ))}
            </div>

            <button className='ml-10 flex items-center spac-x-0.5' onClick={toggleAudioIndicator}>
              <audio ref={audioElementRef} className='hidden' src='/audio/emotion.mp3' loop />
              {[1, 2, 3, 4].map((bar) => (
                <div key={bar} className={`indicator-line ${isAndicatorActive ? 'active': ''}`} style={{animationDelay: `${bar * 0.1}s`}} />
              ))}
            </button>
        </div>
      </nav>
      </header>
    </div>
  )
}

export default Navbar
