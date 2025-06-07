'use client'

import { useEffect, useState } from 'react'

type Publication = {
  title: string
  year: string
  image: string
}

export default function Publications() {
  const [publications, setPublications] = useState<Publication[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPublications() {
      setLoading(true)
      setError(null)
      try {
        const res = await fetch('/api/publications')
        if (!res.ok) throw new Error('Failed to fetch publications')
        const data: Publication[] = await res.json()
        setPublications(data)
        localStorage.setItem('publications', JSON.stringify(data))
      } catch (err) {
        setError((err as Error).message)
        // fallback to localStorage if available
        const stored = localStorage.getItem('publications')
        if (stored) {
          setPublications(JSON.parse(stored))
        }
      } finally {
        setLoading(false)
      }
    }
    fetchPublications()
  }, [])

  if (loading) {
    return <p className="text-center mt-10">Loading publications...</p>
  }

  if (error) {
    return <p className="text-center mt-10 text-red-600">Error: {error}</p>
  }

  return (
    <section
      id="publications"
      className="relative bg-[#e5e6e3] text-[#2F6690] px-6 py-20 overflow-hidden font-grenzegotisch"
    >
      {/* Background Dots */}
      <div className="absolute top-0 left-0 w-full h-full z-0 pointer-events-none">
        {[
          { color: 'bg-blue-400', size: 'w-3 h-3', left: '10%', top: '20%', speed: 'animate-bounce' },
          { color: 'bg-pink-500', size: 'w-4 h-4', left: '80%', top: '30%', speed: 'animate-bounce' },
          { color: 'bg-green-500', size: 'w-2 h-2', left: '40%', top: '10%', speed: 'animate-bounce' },
          { color: 'bg-yellow-500', size: 'w-3 h-3', left: '60%', top: '60%', speed: 'animate-bounce' },
          { color: 'bg-purple-400', size: 'w-2.5 h-2.5', left: '25%', top: '75%', speed: 'animate-bounce' },
          { color: 'bg-red-400', size: 'w-3.5 h-3.5', left: '70%', top: '50%', speed: 'animate-bounce' },
          { color: 'bg-cyan-400', size: 'w-3 h-3', left: '15%', top: '60%', speed: 'animate-bounce' },
          { color: 'bg-emerald-400', size: 'w-2.5 h-2.5', left: '50%', top: '85%', speed: 'animate-bounce' },
        ].map((dot, index) => (
          <span
            key={index}
            className={`absolute rounded-full ${dot.color} ${dot.size} ${dot.speed}`}
            style={{ left: dot.left, top: dot.top }}
          />
        ))}
      </div>

      <h2 className="text-3xl font-bold text-center mb-6 relative z-10" data-aos="fade-down">
        Publications
      </h2>

      <div className="relative max-w-5xl mx-auto z-10">
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-4 border-[#2F6690]" />

        <div className="space-y-20">
          {publications.map((pub, idx) => {
            const isLeft = idx % 2 === 0
            const animationType = isLeft ? 'fade-right' : 'fade-left'
            const isDynamicImage = pub.image?.startsWith('data:') || pub.image?.startsWith('blob:')

            return (
              <div
                key={idx}
                className={`relative flex flex-col md:flex-row items-center md:items-start gap-4 md:gap-8 ${
                  isLeft ? 'md:flex-row-reverse' : ''
                }`}
                data-aos={animationType}
                data-aos-duration="800"
                data-aos-delay={idx * 200}
              >
                <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-[#2F6690] rounded-full z-10 border-4 border-[#dce3cf]" />
                <div className="hidden md:block md:w-1/2" />

                <div className="bg-[#d9dad8] rounded-lg shadow-md p-4 w-100% h-100% flex flex-col items-center justify-center text-center z-10">
                  <div className="w-80 h-80 mb-8 rounded-md overflow-hidden">
                    <img
                      src={isDynamicImage ? pub.image : pub.image || '/HCI.jpeg'}
                      alt={pub.title}
                      width={320}
                      height={320}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{pub.title}</h3>
                  <p className="text-sm">Published: {pub.year}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
