import "../styles/globals.css";
import Navigation from "./shared/Navigation";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="container">
        <Navigation />
        {children}
      </body>
    </html>
  )
}
