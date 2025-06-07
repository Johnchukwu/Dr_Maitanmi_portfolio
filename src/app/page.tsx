'use client'

import  { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Introduction from './components/Introduction'
import About from './components/About'
import Personal from './components/Personal'
import Publications from './components/Publications'
import Research from './components/Research'
import Contact from './components/Contact'
import './globals.css'
import SkeletonPage from './components/SkeletonPage'


export default function Home() {
  const [loading, setLoading] = useState(true);

    useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <Navbar />
       <main className="pt-20">
        {loading ? (
          <SkeletonPage />
        ) : (
          <>
        <Introduction />
        <About />
        <Personal />
        <Publications />
        <Research />
        <Contact />
  
    </>
        )}
      </main>
    </div>
  )
}
