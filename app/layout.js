export const metadata = {
  title: 'Designer Portfolio',
  description: 'Creative designer portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="zh">
      <body className="bg-dark-bg text-white antialiased">
        {children}
      </body>
    </html>
  )
}
