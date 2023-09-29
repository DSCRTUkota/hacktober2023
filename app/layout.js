
import MessageUs from '@/components/global/MessageUs'
import './globals.css'
import { Karla } from 'next/font/google'

const customFont = Karla({ subsets: ['latin'] })

export const metadata = {
  title: 'Hacktoberfest 2023',
  description: 'A Project to contribute in hacktoberfest 2023 and get your name on the list with a PR',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <MessageUs/>
      <body className={`${customFont.className}`}>{children}</body>
    </html>
  )
}
