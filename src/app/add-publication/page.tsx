// app/add-publication/page.tsx
'use client'
import AddPublicationForm from "../components/AddPublicationForm"

export default function AddPublicationPage() {
  return (
    <main className="min-h-screen px-4 py-20 bg-[#e5e6e3]">
      <h1 className="text-3xl font-bold text-[#2F6690] mb-6">Add a Publication</h1>
        <AddPublicationForm />
      
    </main>
  )
}
