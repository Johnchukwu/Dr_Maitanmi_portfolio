'use client'

import Image from 'next/image'

const researchAreas = [
  {
    title: 'Cyber-Physical Systems',
    description: 'Exploring the integration of computing and physical processes in smart devices.',
    image: '/cyber.jpeg',
  },
  {
    title: 'Software Engineering',
    description: 'Advancing software development frameworks, methodologies, and best practices.',
    image: '/code.jpeg',
  },
  {
    title: 'Distance Learning',
    description: 'Enhancing virtual education technologies and digital learning platforms.',
    image: '/bucoddel.jpeg',
  },
  {
    title: 'Learning Management Systems',
    description: 'Developing efficient, scalable, and adaptive education management tools.',
    image: '/lms.jpeg',
  },
  {
    title: 'Human-Computer Interaction',
    description: 'Improving user experience through better digital interface designs.',
    image: '/interaction.jpeg',
  },
]

export default function Research() {
  return (
    <section id="research" className="bg-[#2F6690] text-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 font-grenzegotisch">Research Interests</h2>
        <p className="text-lg mb-12 max-w-3xl mx-auto">
          My research focuses on advancing cyber-physical systems, software engineering methodologies, distance learning, and innovative user interactions.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {researchAreas.map((area, idx) => (
            <div
              key={idx}
              className="bg-white text-[#2F6690] rounded-lg shadow-md hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 p-6 flex flex-col items-center text-center"
            >
              <div className="overflow-hidden rounded-md w-full mb-4">
                <Image
                  src={area.image}
                  alt={area.title}
                  width={300}
                  height={180}
                  className="rounded-md object-cover hover:scale-105 transition-transform duration-300 w-full h-[180px]"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
              <p className="text-sm">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
