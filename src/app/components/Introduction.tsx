import { FaLinkedinIn, FaOrcid } from 'react-icons/fa'
import Image from 'next/image'

export default function Introduction() {
  return (
    <section
      id="introduction"
      className="w-full min-h-screen flex items-center bg-[#D9DCD6] px-8 py-16"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Content */}
        <div className="text-[#2F6690] space-y-4 pb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold ">
            Dr. Oluwasola S. Maitanmi
          </h1>
          <p className="text-lg font-medium">
            Associate Professor | Software Engineer | Researcher
          </p>
          <div className=" space-y-1 text-md">
            <p>Software Engineering Department, Babcock University</p>
            <p>Deputy Director of Academics, BUCODeL</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center space-x-4 pt-4 pl-20 ml-9">
            <a
              href="https://orcid.org/0000-0002-0217-0543"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F6690] hover:opacity-70"
            >
              <FaOrcid size={24} />
            </a>
            <a
              href="https://uk.linkedin.com/in/maitanmi-oluwasola-06aa9327b"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2F6690] hover:opacity-70"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>

          {/* Read More Link */}
          <div className="pt-6">
            <a
              href="#about"
              className="inline-flex items-center text-[#2F6690] font-semibold hover:underline pl-20"
            >
            <span className="ml-6">  Read more →</span>
            </a>
          </div>
        </div>

          <Image
            src="/BGG.png"
            alt="Dr. Maitanmi"
            width={320}
            height={400}
            className="rounded-lg object-cover shadow-lg"
            priority
          />
        </div>
      
    </section>
  )
}
