import './globals.scss'

export const metadata = {
  title: 'Positivus - Digital marketing agency',
  description: 'Our digital marketing agency helps businesses grow and succeed online through a range of services including SEO, PPC, social media marketing, and content creation',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en'>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  )
}
