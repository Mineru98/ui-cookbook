import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'App UI 용어 정리',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
