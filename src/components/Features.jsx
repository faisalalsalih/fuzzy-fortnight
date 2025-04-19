const BentoCard = ({src, title, description}) => {
    return (
        <div className="relative size-full">
            <video src={src} loop muted autoPlay className="absolute left-0 top-0 object-cover object-center"/>

            <div className="relative z-10 flex size-full flex-col justify-between text-blue-50 p-5">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
}

const Features = () => {
  return (
    <section className='bg-black pb-52'>
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
            <p className='font-circular-web text-lg text-blue-50'>Into the Metagame Layer</p>
            <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'>Immerse Yourself in a rich and ever-expanding universe where a vibrant array of products converge into an interconnected overlay experience on your world.</p>
            </div>
        

        <div className='border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]'>
            <BentoCard 
            src="videos/feature-1.mp4"
            title={<>radi<b>n</b>t</>}
            description="A cross-platform metagames App, turning your activities across Web2 and Web3 games into a rewarding Adventure."
             />
        </div>

        <div className="grid h-[135vh] grid-cols-2 grid-rows-3 gap-7">

            <div className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                <BentoCard 
                src="videos/feature-2.mp4"
                title={<>zig<b>m</b>a</>}
                description="An anime and gaming-inspired NFT collection - the IP primed for expansion."/>
            </div>

            <div className="bento-title_1 row-span-1 ms-32 md:col-span-2">

            </div>
        </div>
        </div>
    </section>
  )
}

export default Features
