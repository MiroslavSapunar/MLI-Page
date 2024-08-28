'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

import { UAParser } from "ua-parser-js";


import Landing from "./components/landing";
import NavBar from "./components/navbar";

const Achievements = dynamic(() => import('./components/achievements'), { ssr: false })
const Proposals = dynamic(() => import('./components/proposals'), { ssr: false })
const AboutUs = dynamic(() => import('./components/aboutUs'), { ssr: false })

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const parser = new UAParser();
    const userAgent = window.navigator.userAgent;
    const result = parser.setUA(userAgent).getResult();
    const isMobileDevice = /mobile/i.test(result.device.type ? result.device.type : "");
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <div className="font-roboto">
      <NavBar />
      <Landing />
      <Achievements isMobile={isMobile}/>
      <Proposals />
      <AboutUs />
    </div>
  )
}
