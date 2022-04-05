import React from 'react'
import CuriousTable from './OurStorypart/CuriousTable'
import Description from './OurStorypart/Description'
import Download from './OurStorypart/Download'
import Footerforourstory from './OurStorypart/Footerforourstory'
import Heading from './OurStorypart/Heading'
import LearnMore from './OurStorypart/LearnMore'
import Testimony from './OurStorypart/Testimony'


export default function OurStorymain() {
  return (
   <>
   <Heading/>
   <Description/>
   <CuriousTable/>
   <Testimony/>
   <Download/>
   <LearnMore/>
   <Footerforourstory/>
   </>
  )
}
