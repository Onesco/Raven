import Head from 'next/head'
import Image from 'next/image'
import image from '../public/mobile_3in1.jpg'
import image3 from '../public/rider_delivery.jpg'
import google_play_logo from '../public/google_play_logo.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default function Home() {
  return (
    <>
     <Head>
        <title>Raven</title>
        <meta name="description" content="landing page of Raven App" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <header className='h-[50px] mb-3 bg-red-400' >
        {/* <Image  /> */}
        <h1 className="text-white" >Raven</h1>
      </header>
      <Carousel 
        interval={4000} 
        showThumbs={false} 
        infiniteLoop={true} 
        autoPlay={true}
      >
        <div
          className='px-[1.5rem] sm:mx-auto sm:max-w-[60rem] sm:justify-center sm:items-center'
        > 
          <div className='gap-[1.2rem] sm:flex'> 
            <div className='sm:flex sm:flex-col sm:justify-center '>
              <h1 className='text-[1.5rem] font-bold leading-7 mb-3 sm:text-[1.7rem] sm:leading-8'>
                Raven! Your Mobile App for Your Online Presence
              </h1>
              <p className='leading-9 text-[0.75rem] mb-3 sm:max-w-sm sm:text-[0.9rem] sm:leading-8 text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...
              </p>
            </div>
            <div>
              <Image src={image} alt='mobile sample'/>
              <div className='flex max-w-[180px] justify-between'>
                <button>
                  <Image src={google_play_logo} alt='google play logo'/>
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* <div className='bg-red-400 px-[1.5rem] flex flex-col w-full h-[150px]  text-white text-center justify-center items-center my-8' >
            <h1 className='text-[1.5rem] font-bold leading-7 mb-3'>
              Raven Rider
            </h1>
            <h3 className='text-[.8rem] font-bold leading-8 mb-3'>
             Raven Rider will ensure that your package reaches your customer at the best possible time
            </h3>  
        </div> */}
        <div
          className='px-[1.5rem] sm:mx-auto sm:max-w-[60rem] sm:justify-center sm:items-center'
        > 
          <div className='gap-[1.2rem] sm:flex'> 
            <div>
              <Image src={image3} alt='mobile sample' className='mb-2'/>
              <div className='flex max-w-[180px] justify-between'>
                <button>
                  <Image src={google_play_logo} alt='google play logo'/>
                </button>
              </div>
            </div>
            <div className='sm:flex sm:flex-col sm:justify-center '>
              <h1 className='text-[1.5rem] font-bold leading-7 mb-3 sm:text-[1.7rem] sm:leading-8'>
                A smooth link between customer and seller
              </h1>
              <p className='leading-9 text-[0.75rem] m-3 sm:max-w-sm sm:text-[0.9rem] sm:leading-8 text-gray-700'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad...
              </p>
            </div>
          </div>
        </div>
        {/* <div className='flex flex-col justify-center items-center'>

        </div> */}
      </Carousel>
    </>
    
  )
}

