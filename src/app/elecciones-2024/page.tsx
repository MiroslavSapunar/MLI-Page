'use client'
import { useState, useEffect } from 'react';
import { UAParser } from "ua-parser-js";

import NavBar from "../components/navbar";
import Elections from '../components/elections';
import Achievements from '../components/achievements';
import Proposals from '../components/proposals';
import Candidates from '../components/candidates';

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
      <Achievements isMobile={isMobile} />
      <Proposals />
      <Candidates />
      <Elections/>
    </div>
  )
}
