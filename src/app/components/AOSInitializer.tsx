'use client'

import { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function AOSInitializer() {
  useEffect(() => {
    AOS.init({
      duration: 800,     // animation duration
      offset: 200,       // offset from the top before triggering
      once: false,       // allow multiple animations, not just once
      mirror: true,      // animate out while scrolling past
    })

    // Refresh on scroll to ensure it tracks new positions
    const handleScroll = () => AOS.refresh()
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return null
}
