'use client'
import { useState, useEffect } from 'react';
import dynamic from 'next/dynamic'

import { UAParser } from "ua-parser-js";

import Landing from "./components/landing";
import NavBar from "./components/navbar";
// import Elections from './components/elections';

const Elections = dynamic(() => import('./components/elections'), { ssr: false })
const Achievements = dynamic(() => import('./components/achievements'), { ssr: false })
const Proposals = dynamic(() => import('./components/proposals'), { ssr: false })
const Candidates = dynamic(() => import('./components/candidates'), { ssr: false })

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
      <Elections/>
      <Achievements isMobile={isMobile} />
      <Proposals />
      <Candidates />
    </div>
  )
}
