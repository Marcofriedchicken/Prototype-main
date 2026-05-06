import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const geist = Geist({ 
  subsets: ["latin"],
  variable: '--font-geist-sans'
})
const geistMono = Geist_Mono({ 
  subsets: ["latin"],
  variable: '--font-geist-mono'
})

export const metadata: Metadata = {
  title: "Wayne's Detailing | Premium Auto Detailing Services in Marikina",
  description: "GET IT DONE - Premium car detailing services including carwash, engine wash, ceramic coating, wax & buffing, and more. Located in Marikina City.",
  keywords: "car detailing, auto detailing, ceramic coating, car wash, Marikina, Philippines",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} bg-background`}>
      <body className="font-sans antialiased bg-[#0A0A0A] text-white">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
