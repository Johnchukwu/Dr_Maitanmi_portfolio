'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function AddPublication() {
  const router = useRouter()

  // Auth state
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // Publication state
  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [image, setImage] = useState<string>('')
  const [publications, setPublications] = useState<{ title: string; year: string; image: string }[]>([])

  useEffect(() => {
    const auth = localStorage.getItem('auth')
    if (auth === 'true') {
      setIsAuthenticated(true)
      // Load publications only if authenticated
      const stored = JSON.parse(localStorage.getItem('publications') || '[]')
      setPublications(stored)
    }
  }, [])

  // Login handler
  const handleLogin = () => {
    if (email === 'Maitanmio@babcock.edu.ng' && password === '123456789') {
      localStorage.setItem('auth', 'true')
      setIsAuthenticated(true)
      // Load publications after login
      const stored = JSON.parse(localStorage.getItem('publications') || '[]')
      setPublications(stored)
    } else {
      alert('Invalid credentials')
    }
  }

  // Logout (optional)
  const handleLogout = () => {
    localStorage.removeItem('auth')
    setIsAuthenticated(false)
    setEmail('')
    setPassword('')
  }

  // Image upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setImage(reader.result as string)
      }
      reader.readAsDataURL(file)
    }
  }

  // Save publication
  const handleSubmit = () => {
    if (!title || !year || !image) {
      alert('Please fill all fields and upload an image.')
      return
    }

    const newPub = { title, year, image }
    const updated = [...publications, newPub]

    localStorage.setItem('publications', JSON.stringify(updated))
    setPublications(updated)

    alert('Publication added!')
    setTitle('')
    setYear('')
    setImage('')
  }

  // Delete publication
  const handleDelete = (index: number) => {
    if (confirm('Are you sure you want to delete this publication?')) {
      const updated = publications.filter((_, i) => i !== index)
      localStorage.setItem('publications', JSON.stringify(updated))
      setPublications(updated)
    }
  }

  // If not authenticated, show login form
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
          <h1 className="text-2xl font-bold mb-4 text-center">Admin Login</h1>
          <input
            type="email"
            placeholder="Email"
            className="w-full border p-2 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border p-2 rounded mb-4"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={handleLogin}
            className="bg-[#343a40] text-white py-2 px-4 rounded w-full"
          >
            Login
          </button>
        </div>
      </div>
    )
  }

  // Authenticated view (publication form and list)
  return (
    <div className="max-w-md mx-auto mt-10 p-4 bg-white rounded shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-[#2F6690]">Add Publication</h2>
        <button
          onClick={handleLogout}
          className="text-sm text-red-600 hover:text-red-800"
        >
          Logout
        </button>
      </div>

      <input
        type="text"
        placeholder="Title"
        className="w-full p-2 mb-3 border rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        type="text"
        placeholder="Year"
        className="w-full p-2 mb-3 border rounded"
        value={year}
        onChange={(e) => setYear(e.target.value)}
      />

      <input
        type="file"
        accept="image/*"
        onChange={handleImageUpload}
        className="mb-3"
      />

      {image && (
        <img
          src={image}
          alt="Preview"
          className="w-40 h-40 object-cover mb-3 mx-auto rounded"
        />
      )}

      <button
        onClick={handleSubmit}
        className="bg-[#2F6690] text-white py-2 px-4 rounded w-full hover:bg-[#25587c] mb-4"
      >
        Save Publication
      </button>

      <button
        onClick={() => router.push('/')}
        className="bg-gray-600 text-white py-2 px-4 rounded w-full hover:bg-gray-700"
      >
        Go to Home
      </button>

      {publications.length > 0 && (
        <div className="mt-10">
          <h3 className="text-lg font-semibold mb-3 text-center">Saved Publications</h3>
          <ul className="space-y-4">
            {publications.map((pub, index) => (
              <li
                key={index}
                className="border p-3 rounded flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{pub.title}</p>
                  <p className="text-sm text-gray-600">{pub.year}</p>
                </div>
                <img src={pub.image} alt="thumb" className="w-12 h-12 object-cover rounded" />
                <button
                  onClick={() => handleDelete(index)}
                  className="ml-4 bg-red-500 text-white px-2 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
