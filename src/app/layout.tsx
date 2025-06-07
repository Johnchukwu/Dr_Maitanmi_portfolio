import './globals.css'
import { ReactNode } from 'react'
import AOSInitializer from './components/AOSInitializer'

export const metadata = {
  title: 'My Portfolio',
  description: 'Academic portfolio website',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans bg-white text-black">
        <AOSInitializer />
        {children}
      </body>
    </html>
  )
}
