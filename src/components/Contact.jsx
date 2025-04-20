import React from 'react'
import Button from "./Button"


const ImageClipBox = ({src, clipClass, alt}) => (
  <div className={clipClass}>
    <img src={src} alt={alt}/>
  </div> 
)

const Contact = () => {
  return (
    <div id='contact' className='my-20 min-h-96 w-screen px-10'>
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox alt="image1" src="img/contact-1.webp" clipClass="contact-clip-path-1"/>
          <ImageClipBox alt="image2" src="img/contact-2.webp" clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"/>
        </div>

        <div className="absolute -top-40 left-20 w-60 overflow-hidden sm:top-1/2 md:left-auto md:right-10 lg:top-10 lg:w-80">
        <ImageClipBox 
        src="img/swordman.webp"
        clipClass="sword-man-clip-path md:scale-125"/>
        </div>


        <div className="flex flex-col items-center text-center">
          <p className='font-general text-[10px] uppercase'>Join Zenry</p>
          <p className='special-font mt-10 w-full font-zentry text-5xl leading-[0.9] md:text-[6rem]'>Let's b<b>u</b>ild the <br /> new era of a g<b>a</b>mimg t<b>o</b>gether</p>
          <Button title="contact us" containerClass="mt-10 cursor-pointer bg-blue-50"/>
        </div>
      </div>
    </div>
  )
}

export default Contact
