
import './Hero.css'
import Nav from './Nav.jsx';
import Image from 'next/image'
function Hero() {
    return <>
        <div id="back">
            <Nav/>

            <div className='w-full h-[650px] flex justify-evenly items-center md:flex-row flex-col'>

                <div className="w-2/5 sm:scale-75 scale-100">
                <Image
        src="/images/logo.png"
        width={500}
        height={500}
        alt="Picture of the "
      />
                </div>
                <div className="text-white backdrop-blur-sm bg-[#1c175981] border-0 border-white text-lg flex justify-evenly items-center flex-col gap-9 p-10 rounded-2xl sm:scale-75 scale-75 md:w-2/5 md:scale-100 " >
                    <h2 className='lg:text-5xl text-4xl  text-left font-bold italic'>Copyright free music for creators.</h2>
                    <p>We work with artists representing all genres of electronic music, generating over 500 billion plays globally. Whether you are MrBeast or just starting to create content, our music will always be free to use, allowing you to monetise without fear of copyright strikes. </p>
                </div>
            </div>
        </div>

    </>
}
export default Hero;