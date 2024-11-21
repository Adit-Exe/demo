import './about.css'
import Nav from '../Components/Nav'
import Image from 'next/image'

function AboutPage() {
  return (
    <>
    <div id="bck" className='flex justify-evenly h-max text-white flex-col gap-8'>
<Nav/>
<Image
        src="/images/logo.png"
        width={500}
        height={500}
        alt="Picture of the "
        className='w-1/3 self-center my-10'
      />
      <div className='p-9 flex justify-evenly h-max text-white flex-col gap-8'>
<p>We are a UK-based record label and music community specialising in electronic music, dedicated to providing opportunity for the next generation of artists and creators through a free-to-use licence model.</p>
<p>NCS (NoCopyrightSounds) started as a YouTube channel born out of the frustration of not being able to find high quality, truly copyright-free music for use on the platform. By showcasing the tracks we loved, we evolved into a music label with an extensive catalogue of electronic music available for creators to use in their content. The NCS YouTube channel is now one of the largest in the world, and forms a part of our digital community that enables us to showcase new artists.</p>
<p>NCS has grown to become the largest copyright-free record label in the world, with a catalogue of over 1500 songs across various moods and genres and generating over 500 billion plays globally. We have been described by Forbes as "a YouTube-first label that allows indie creators to use and even monetize its music freely as long as they give due credit back to the content owners."</p>

<p>We release a wide range of music representing genres from House to Dubstep via Trap, Drum & Bass, Electro Pop and more. Our music has been used in over 250 million videos by some of the biggest creators, streamers and brands such as Mr Beast, The Sidemen and Chloe Ting to name but a few.</p>
<p>Our success comes from providing free-to-use music for creators on platforms like YouTube and Twitch, where creators can use NCS music without fear of risking copyright strikes. Our music catalogue is in high demand because the music we release is not generic stock music from faceless composers, but are actual industry artists who tour, have global fan bases and are often household names.</p>
</div>
      </div>
    </>
  )
}

export default AboutPage