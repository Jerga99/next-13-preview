import "../styles/globals.css";
import Navigation from "./shared/Navigation";
import WordGenerator from "./shared/WordGenerator";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body className="container">
        <Navigation />
        {children}
        <br></br>
        <WordGenerator />
      </body>
    </html>
  )
}
