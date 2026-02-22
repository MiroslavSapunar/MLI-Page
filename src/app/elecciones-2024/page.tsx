'use client'
import { useState, useEffect } from 'react';

import NavBar from "../components/navbar";
import Elections from '../components/elections';
import Achievements from '../components/achievements';
import Proposals from '../components/proposals';
import Candidates from '../components/candidates';

export default function Home() {

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    setIsMobile(isMobileDevice);
  }, []);

  return (
    <div>
      <NavBar />
      <Proposals />
      <Achievements isMobile={isMobile} />
      <Candidates />
      <Elections/>
    </div>
  )
}
