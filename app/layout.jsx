import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="container">
        Layout Code
        {children}
      </body>
    </html>
  )
}
