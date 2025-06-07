import { FaUserGraduate, FaUniversity, FaBookOpen, FaBriefcase } from 'react-icons/fa'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="bg-[#ebebeb] text-[#333] px-8 py-16">
      {/* Image and Text Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Image */}
        <div className="flex justify-center ">
          <Image
            src="/BGG.png"
            alt="Dr. Maitanmi"
            width={500}
            height={320}
            className="rounded-lg object-cover shadow-md"
          />
        </div>

        {/* Right Side Text */}
        <div className="space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold text-[#2F6690] font-grenzegotisch">
            About Dr. Oluwasola S. Maitanmi
          </h2>
          <p>
            Dr. Oluwasola S. Maitanmi is an Associate Professor of Computer Science at Babcock University with over 20 years of experience in software engineering, research, and higher education. He currently serves as the Head of the Software Engineering Department, mentoring students and contributing to innovative research.
          </p>
          <p>
            With a strong academic background, he earned his MSc and PhD from Babcock University and completed his Post-Doctoral Research at Andrews University, USA. His expertise extends across Cyber-Physical Systems, Distance Learning, Learning Management Systems, and Human-Computer Interaction.
          </p>
          <p>
            Dr. Maitanmi is a published author with 5+ books and has contributed to over 40 peer-reviewed journals. His research work has played a significant role in advancing software development, user experience in digital interfaces, and efficient online education technologies.
          </p>
          <p>
            Currently, as the HOD of the Software Engineering Department in Babcock University, he is dedicated to shaping the next generation of developers, researchers, and engineers through quality education, mentorship, and research initiatives.
          </p>
        </div>
      </div>

      {/* Key Achievements Section */}
      <div className="mt-7 max-w-7xl mx-auto ">
        <h3 className="text-[#2F6690] text-xl md:text-2xl font-semibold mb-8 flex justify-center">
          Key Achievements
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <FaUserGraduate size={32} className="text-[#2F6690] mb-2" />
            <p>MSc & PhD: Software Engineering</p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <FaUniversity size={32} className="text-[#2F6690] mb-2" />
            <p>Post-Doctoral Research: Andrews University, USA</p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <FaBookOpen size={32} className="text-[#2F6690] mb-2" />
            <p>Books Published: 5+</p>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
            <FaBriefcase size={32} className="text-[#2F6690] mb-2" />
            <p>Current Role: HOD, Software Engineering Department</p>
          </div>
        </div>
      </div>
    </section>
  )
}
