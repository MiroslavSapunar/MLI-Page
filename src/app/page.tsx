import dynamic from 'next/dynamic'

import Landing from "./components/landing";
import NavBar from "./components/navbar";

const Elections = dynamic(() => import('./components/elections'), { ssr: false })
const AboutUs = dynamic(() => import('./components/aboutUs'), { ssr: false })
const Achievements = dynamic(() => import('./components/achievements'), { ssr: false })
const Proposals = dynamic(() => import('./components/proposals'), { ssr: false })

export default function Home() {
  return (
    <>
      {/* <NavBar/> */}
      <Landing />
      <Achievements />
      <Proposals />
      <Elections />
      {/* <Elections/> */}
      <AboutUs/>
    </>
  )
}
