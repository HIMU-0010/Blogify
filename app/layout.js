import Header from "./components/Header"
import "./globals.css"

export const metadata = {
  title: "LWS Blogify | Learn with Sumit Assignment",
  description: "A Next.js blog application for Learn with Sumit assignment",
  icons: {
    icon: "/assets/favicon.svg",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="bg-white text-gray-900">
          <Header />
          {children}
        </div>
      </body>
    </html>
  )
}
