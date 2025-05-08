import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";
import Image from "next/image";
import { ClerkProvider } from "@clerk/nextjs";
import Header from "@/components/header";
import { shadesOfPurple } from "@clerk/themes";
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Zcrum",
  description: "Project management tool for developers",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: shadesOfPurple,
        variables: {
          colorPrimary: "#3b82f6",
          colorBackground: "#1a202c",
          colorInputBackground: "#2D3748",
          colorInputText: "#F3F4F6",
        },
        elements: {
          formButtonPrimary: "bg-purple-600 hover:bg-purple-700 text-white",
          card: "bg-gray-800",
          headerTitle: "text-blue-400",
          headerSubtitle: "text-gray-400",
        },
      }}
    >
      <html
        lang="en"
        data-theme="dark"
        style={{ colorScheme: "dark" }}
        className="dark"
      >
        <body className={inter.className}>
          <ThemeProvider attribute="class" defaultTheme="dark">
            {/* Main content */}

            <Header />

            {/* Main Section */}
            <main className="min-h-screen flex flex-col">{children}</main>

            {/* Footer */}
            <footer className="bg-black text-white">
              {/* Top Section */}
              <div className="bg-lime-400 text-black text-4xl font-bold p-10">
                KȝȝP BuildinG...
              </div>

              {/* Footer Content */}
              <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Logo and Image */}
                <div>
                  <Image
                    src="/logo.png"
                    alt="Footer Image"
                    width={500}
                    height={300}
                    className="mb-4"
                  />
                  <p className="text-sm text-gray-400">
                    All rights are reserved by CohortLab.
                  </p>
                </div>

                {/* Product Links */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Product</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>job.CohortLab</li>
                    <li>FreeLance.CohortLab</li>
                    <li>Sync.CohortLab</li>
                  </ul>
                </div>

                {/* Contact Us */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>X</li>
                    <li>LinkedIn</li>
                    <li>Mail</li>
                    <li>+91 8580149535</li>
                  </ul>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">Features</h3>
                  <ul className="text-gray-400 space-y-2">
                    <li>Task Scheduling</li>
                    <li>Real-Time Notification</li>
                    <li>Secure Administration</li>
                  </ul>
                </div>
              </div>
            </footer>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
