import Image from "next/image";
import Landing from "./components/landing";
import Proposals from "./components/proposals";
import Achievements from "./components/achievements";

export default function Home() {
  return (
    <>
      <Landing />
      <Achievements />
      <Proposals />
    </>
  )
}
