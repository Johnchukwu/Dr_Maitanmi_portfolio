import Image from 'next/image'

export default function Personal() {
  return (
    <section id="personal" className="bg-[#dadbda] text-[#2F6690] px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Side Text */}
        <div className="space-y-6 pb-60">
          <h2 className="text-2xl md:text-3xl font-bold font-grenzegotisch">
            Personal Life Beyond Academia
          </h2>

          {/* Family Life */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Family Life</h3>
            <p>
              Professor Maitanmi is happily married to his supportive wife, who has been his pillar of strength throughout his academic journey. Together, they have built a loving home that balances the demands of academic life with the joys of family.
            </p>
            <p className="mt-2">
              As a family-oriented individual, Dr. Maitanmi believes that strong family values provide the foundation for success in all areas of life. He often credits his family`&apos s unwavering support as a crucial factor in his academic achievements and professional growth.
            </p>
          </div>

          {/* Community Involvement */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Community Involvement</h3>
            <p>
              Beyond his academic responsibilities, Professor Maitanmi is actively involved in community development initiatives. He regularly participates in mentorship programs for young students interested in computer science and technology, helping to nurture the next generation of Nigerian tech innovators.
            </p>
          </div>

          {/* Interests & Hobbies */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Interests & Hobbies</h3>
            <p>
              When not engaged in academic pursuits, Dr. Maitanmi enjoys reading books and exploring technological innovations.
            </p>
          </div>
        </div>

        {/* Right Side 4-Image Grid */}
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/dr-with-his-wife.jpeg"
            alt="Family"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-auto shadow-md"
          />
          <Image
            src="/dr-at-a-younger-age.jpeg"
            alt="Community"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-auto shadow-md"
          />
          <Image
            src="/dr-maitanmi-with-staff.png"
            alt="Mentorship"
            width={200}
            height={200}
            className="rounded-lg object-cover w-full h-auto shadow-md"
          />
          <Image
            src="/dr-with-former-student.jpeg"
            alt="Hobbies"
            width={100}
            height={100}
            className="rounded-lg object-cover w-full h-auto shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
