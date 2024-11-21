import Footer from './Components/Footer.jsx';
import Card from './Components/Card.jsx'
import Hero from './Components/Hero.jsx'

export default function Home() {
  return (
  <>
   <Hero />
   <div id='Box' className="flex items-center border-b-8 border-gray-100 sm:h-max h-64 flex-row w-[95%] self-center justify-self-center bg-gray-100 rounded-lg overflow-x-auto overflow-y-hidden">
        <Card image='/images/artwork-440x440 (1).jpg' title='Your Poision' artist='ROY KNOX' link='https://ncs.io/YourPoison?_gl=1*n80wr5*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (2).jpg' title='Desparate' artist='TOKYO MACHINE, NEFFEX' link='https://ncs.io/TM_Desperate?_gl=1*d5u588*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (3).jpg' title='AIWA' artist='THRIST' icon="fa fa-play" link='https://ncs.io/AIWA?_gl=1*d5u588*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (4).jpg' title='Mortals' artist='Warriyo, Laura Brehm' link='https://ncs.io/mortals?_gl=1*d5u588*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (5).jpg' title='Crowded room' artist='Josh Rubin' link='https://ncs.io/CrowdedRoom?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (6).jpg' title='Obssion' artist='More Plastic' link='https://ncs.io/Obsession?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
      </div>

      <h1 className='italic font-bold sm:text-[180%] md:text-[200%] text-[150%] text-center my-5'>Top Hits</h1>
      <div id='Box' className="flex items-center border-b-8 border-gray-100 sm:h-max h-64 flex-row w-[95%] self-center justify-self-center bg-gray-100 rounded-lg overflow-x-auto overflow-y-hidden">
        <Card image='/images/artwork-440x440 (7).jpg' title='I Want U' artist='Rameses B' link='https://ncs.io/iwantu?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (8).jpg' title='Perfection ' artist='Derek Cate, B3nte, Mangoo' link='https://ncs.io/Perfection?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (9).jpg' title='Cyberblade' artist='Extra Tera, Max Brhon' link='https://ncs.io/Cyberblade?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (10).jpg' title='Hinterland' artist='Everen Maxwell' link='https://ncs.io/Hinterlands?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (12).jpg' title='Shoulders og Giants' artist='Halvorsen' link='https://ncs.io/SOG?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (13).jpg' title='Break My Heart' artist='Sapientdream, Slushii' link='https://ncs.io/BreakMyHeart?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />

      </div>


      <h1 className='italic font-bold sm:text-[180%] md:text-[200%] text-[150%] text-center my-5'>Top Hits</h1>
      <div id='Box' className="flex items-center border-b-8 border-gray-100 sm:h-max h-64 flex-row w-[95%] self-center justify-self-center bg-gray-100 rounded-lg overflow-x-auto overflow-y-hidden">
        <Card image='/images/artwork-440x440 (14).jpg' title='From THe Top' artist='Ariis' link='https://ncs.io/FromTheTop?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (15).jpg' title='Alright' artist='Yvvan Back, Marky style, Sync' link='https://ncs.io/Alright_YB?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (16).jpg' title='Notice That' artist='Zaug' link='https://ncs.io/NoticeThat?_gl=1*wdbgbg*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (17).jpg' title='Revolution' artist='Linn Sandin, Midranger, Poylow' link='https://ncs.io/PL_Revolution?_gl=1*s21txm*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (18).jpg' title='Magnetic' artist='Springs' link='https://ncs.io/Magnetic?_gl=1*s21txm*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (19).jpg' title='The Riot' artist='NIVIRO' link='https://ncs.io/TheRiot?_gl=1*s21txm*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (20).jpg' title='Happier Now' artist='Gabrial Eli, SadBois' link='https://ncs.io/HappierNow?_gl=1*qe2myj*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (22).jpg' title='Baby Sweet' artist='Tails, Intouch' link='https://ncs.io/BS_Tails?_gl=1*qe2myj*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (23).jpg' title='Blu' artist='Zachz Winner' link='https://ncs.io/blu?_gl=1*tlj5uq*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNzg2Ni4yLjAuMTczMTUwNzg2Ni4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (24).jpg' title='Like Rain' artist='Rameses B' link='https://ncs.io/LikeRain?_gl=1*tlj5uq*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNzg2Ni4yLjAuMTczMTUwNzg2Ni4wLjAuMA..' />
      </div>

      <div id='Box' className="flex items-center border-b-8 border-gray-100 sm:h-max h-64 flex-row w-[95%] self-center justify-self-center bg-gray-100 rounded-lg overflow-x-auto overflow-y-hidden">
        <Card image='/images/artwork-440x440 (25).jpg' title='Silence' artist='N3B, Entra Terra' link='https://ncs.io/EN_Silence?_gl=1*tlj5uq*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNzg2Ni4yLjAuMTczMTUwNzg2Ni4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (26).jpg' title='Party Pioneers' artist='NOYSE, Rudeejay' link='https://ncs.io/PartyPioneers?_gl=1*tlj5uq*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNzg2Ni4yLjAuMTczMTUwNzg2Ni4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (27).jpg' title='Ride With Me' artist='Luke Alaxender' link='https://ncs.io/RWM?_gl=1*tlj5uq*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNzg2Ni4yLjAuMTczMTUwNzg2Ni4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (29).jpg' title='Win & Lose' artist='Chime' link='https://ncs.io/WinAndLose?_gl=1*tlj5uq*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNzg2Ni4yLjAuMTczMTUwNzg2Ni4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (1).jpg' title='Your Poision' artist='ROY KNOX' link='https://ncs.io/YourPoison?_gl=1*n80wr5*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (2).jpg' title='Desparate' artist='TOKYO MACHINE, NEFFEX' link='https://ncs.io/TM_Desperate?_gl=1*d5u588*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (3).jpg' title='AIWA' artist='THRIST' icon="fa fa-play" link='https://ncs.io/AIWA?_gl=1*d5u588*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (4).jpg' title='Mortals' artist='Warriyo, Laura Brehm' link='https://ncs.io/mortals?_gl=1*d5u588*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (5).jpg' title='Crowded room' artist='Josh Rubin' link='https://ncs.io/CrowdedRoom?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (6).jpg' title='Obssion' artist='More Plastic' link='https://ncs.io/Obsession?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
      </div>

      <div id='Box' className="flex items-center border-b-8 border-gray-100 sm:h-max h-64 flex-row w-[95%] self-center justify-self-center bg-gray-100 rounded-lg overflow-x-auto overflow-y-hidden mb-10">
        <Card image='/images/artwork-440x440 (7).jpg' title='I Want U' artist='Rameses B' link='https://ncs.io/iwantu?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (8).jpg' title='Perfection ' artist='Derek Cate, B3nte, Mangoo' link='https://ncs.io/Perfection?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (9).jpg' title='Cyberblade' artist='Extra Tera, Max Brhon' link='https://ncs.io/Cyberblade?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (10).jpg' title='Hinterland' artist='Everen Maxwell' link='https://ncs.io/Hinterlands?_gl=1*b0lbub*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (12).jpg' title='Shoulders og Giants' artist='Halvorsen' link='https://ncs.io/SOG?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (13).jpg' title='Break My Heart' artist='Sapientdream, Slushii' link='https://ncs.io/BreakMyHeart?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (14).jpg' title='From THe Top' artist='Ariis' link='https://ncs.io/FromTheTop?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (15).jpg' title='Alright' artist='Yvvan Back, Marky style, Sync' link='https://ncs.io/Alright_YB?_gl=1*yj1sif*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (16).jpg' title='Notice That' artist='Zaug' link='https://ncs.io/NoticeThat?_gl=1*wdbgbg*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
        <Card image='/images/artwork-440x440 (17).jpg' title='Revolution' artist='Linn Sandin, Midranger, Poylow' link='https://ncs.io/PL_Revolution?_gl=1*s21txm*_up*MQ..*_ga*MTc3OTc2MzIxNS4xNzMxNTA1NDQz*_ga_PFS54FR7NV*MTczMTUwNTQ0NS4xLjAuMTczMTUwNTQ0NS4wLjAuMA..' />
      </div>

  <Footer/>
  </>
  );
}
