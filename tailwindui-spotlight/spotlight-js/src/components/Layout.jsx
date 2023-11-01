import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import '@/styles/stars.css'

export function Layout({ children }) {
  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 ">
        <div className="flex w-full max-w-7xl lg:px-8">
          <div className="w-full bg-white ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col">
        <Header />
        <div className="stars-container">
          <div id="stars"></div>
          <div id="stars2"></div>
          <div id="stars3"></div>
        </div>
        <main className="flex-auto">{children}</main>
        <Footer />
      </div>
    </>
  )
}
