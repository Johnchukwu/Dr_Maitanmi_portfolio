'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })

  const [sending, setSending] = useState(false)
  const [success, setSuccess] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    setSuccess(null)
    setError(null)
 
    const SERVICE_ID = 'service_erx9mtk'
    const TEMPLATE_ID = 'template_wh75t2g'
    const PUBLIC_KEY = 'iUwgo9VRUdNf_7lG2'

    emailjs
      .send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY)
      .then(() => {
        setSuccess('Message sent successfully!')
        setForm({ name: '', email: '', subject: '', message: '' })
      })
      .catch(() => {
        setError('Failed to send message. Please try again later.')
      })
      .finally(() => setSending(false))
  }

  return (
    <div className="min-h-screen px-8 pt-24 pb-12" id="contact"style={{ backgroundColor: '#F5F5F5', color: '#2F6690' }}>
      {/* Centered Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-extrabold font-grenzegotisch">GET IN TOUCH</h2>
      </div>

      {/* Two-Column Layout */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10">
        {/* Left side contact info */}
        <div className="md:w-1/2 space-y-4 pt-16">
          <p className="text-lg font-semibold"><strong>Email:</strong> Maitanmio@babcock.edu.ng</p>

          <p className="text-xl font-bold mt-6">Office</p>
          <p className="text-lg font-medium">Software Engineering Department</p>
          <p className="text-lg font-medium">Babcock University</p>
          <p className="text-lg font-medium">Ilishan-Remo, Ogun State</p>
          <p className="text-lg font-medium">Nigeria</p>

          <p className="text-xl font-bold mt-6">Office Hours</p>
          <p className="text-lg font-medium">Monday - Thursday: 9:00 AM - 5:00 PM</p>
          <p className="text-lg font-medium">Friday: 9:00 AM - 1:00 PM</p>
          <p className="text-lg font-medium">Or by appointment</p>
        </div>

        {/* Right side form */}
        <div className="md:w-1/2 bg-white p-8 rounded-xl shadow-md">
          <h2 className="text-2xl font-bold mb-6">Send an Inquiry</h2>
          <form onSubmit={handleSubmit} className="space-y-5">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
            />
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={form.subject}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg"
            />
            <textarea
              name="message"
              placeholder="Message"
              value={form.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-lg resize-none"
            ></textarea>

            <button
              type="submit"
              disabled={sending}
              className={`w-full py-3 rounded-lg text-white text-lg font-semibold ${
                sending ? 'bg-gray-400' : 'bg-[#2F6690] hover:bg-[#25587c]'
              }`}
            >
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {success && <p className="text-green-600 mt-3 font-medium">{success}</p>}
            {error && <p className="text-red-600 mt-3 font-medium">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  )
}
