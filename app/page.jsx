"use client"
import About from "@/components/About";
import Contact from "@/components/Contact";
import FixedMenu from "@/components/FixedMenu";
import Hero from "@/components/Hero";
import Journey from "@/components/Journey";
import { Services } from "@/components/Services";
import Works from "@/components/Works";
import { useEffect } from "react";
import Footer from '@/components/Footer'

const Home = () => {

  useEffect(() =>{
    const loadLocomotiveScroll = async() =>{
      const LocomotiveScroll = (await import("locomotive-scroll")).default
      new LocomotiveScroll()
    }
    loadLocomotiveScroll()
  },[])
  return (
    <>
      <Hero/>
      <FixedMenu/>
      <Services/>
      <About/>
      <Journey/>
      <Works/>
      <Contact/>
      <Footer/>
      
    </>
  );
}

export default Home 
