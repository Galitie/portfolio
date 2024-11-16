import Link from 'next/link'
import { ContainerInner, ContainerOuter } from '@/components/Container'
import Socials from './Socials'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-700 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                <NavLink href="/">Home</NavLink>
                <NavLink href="/portfolio">Portfolio</NavLink>
                <NavLink href="/games">Games</NavLink>
                {/* <NavLink href="/blog">Blog</NavLink> */}
              </div>
              <p className="text-sm text-zinc-600 dark:text-zinc-400">
                &copy; {new Date().getFullYear()} Galit Weinfeld. All rights
                reserved.
              </p>
            </div>
            <div>
              <Socials />
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
