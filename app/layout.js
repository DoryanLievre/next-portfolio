import './styles/home.scss'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Doryan Lièvre - Portfolio',
  description:
    '\n' +
    'Here is my portfolio, designed to help you get to know me better and to view my projects and skills as a web developer.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
