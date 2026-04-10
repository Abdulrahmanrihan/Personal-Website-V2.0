import '../globals.css'
import Providers from '@/components/Providers'

export const metadata = {
  title: 'Abdelrahman Rihan',
  description: 'AI Engineer & Full-Stack Developer',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-gray-900 transition-colors duration-300">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  )
}
