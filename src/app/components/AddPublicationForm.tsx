'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AddPublication() {
  const router = useRouter()

  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [title, setTitle] = useState('')
  const [year, setYear] = useState('')
  const [image, setImage] = useState<string>('')

  const [publications, setPublications] = useState<
    { _id?: string; title: string; year: string; image: string }[]
  >([])

  // Initial fetch of publications
  useEffect(() => {
    if (typeof window !== 'undefined' && localStorage.getItem('auth') === 'true') {
      setIsAuthenticated(true)
      fetchPublications()
    }
  }, [])

  const fetchPublications = async () => {
    try {
      const res = await fetch('/api/publications', { method: 'GET' })

      const data = await res.json()
      setPublications(data)
    } catch (error) {
      console.error('Failed to fetch publications', error)
    }
  }

  const handleLogin = async () => {
    try {
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      })
  
      if (!res.ok) {
        const data = await res.json()
        alert(data.error || 'Login failed')
        return
      }
  
      localStorage.setItem('auth', 'true')
      setIsAuthenticated(true)
      fetchPublications()
    } catch (error) {
      alert('An error occurred during login')
      console.error(error)
    }
  }
  

  const handleLogout = () => {
    localStorage.removeItem('auth')
    setIsAuthenticated(false)
    setEmail('')
    setPassword('')
  }

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

  const handleSubmit = async () => {
  if (!title || !year || !image) {
    alert('Please fill all fields and upload an image.')
    return
  }

  try {
    const res = await fetch('/api/publications', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ title, year, image }),
    })

    if (!res.ok) {
      let message = 'Something went wrong'
      try {
        const err = await res.json()
        message = err.error || message
      } catch {
        // if no JSON response
      }
      alert(message)
      return
    }

    const newPub = await res.json()
    setPublications((prev) => [newPub, ...prev])
    setTitle('')
    setYear('')
    setImage('')
    alert('Publication added!')
  } catch (error) {
    alert('Error saving publication')
    console.error(error)
  }
}


  const handleDelete = async (id?: string) => {
    if (!id || !confirm('Are you sure you want to delete this publication?')) return;

    try {
      const res = await fetch(`/api/publications?id=${id}`, {
        method: 'DELETE',
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.error || 'Failed to delete publication');
        return;
      }

      setPublications((prev) => prev.filter((pub) => pub._id !== id));
      alert('Publication deleted successfully');
    } catch (error) {
      console.error('Error deleting publication:', error);
    }
  };

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
            {publications.map((pub) => (
              <li
                key={pub._id}
                className="border p-3 rounded flex items-center justify-between"
              >
                <div>
                  <p className="font-medium">{pub.title}</p>
                  <p className="text-sm text-gray-600">{pub.year}</p>
                </div>
                <img src={pub.image} alt="thumb" className="w-12 h-12 object-cover rounded" />
                <button
                  onClick={() => handleDelete(pub._id)}
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
