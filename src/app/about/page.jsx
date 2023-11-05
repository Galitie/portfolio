import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'
import { Photos } from '@/components/Photos'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-teal-400 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Galit Weinfeld. I live in New York City and code.',
}

export default function About() {
  const profilePic =
    'https://res.cloudinary.com/driui30ox/image/upload/f_auto,q_auto/v1/website/x5evgy7znrlaoaqjhr7b'

  return (
    <>
      <Container className="mt-16 sm:mt-32">
        <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
          <div className="lg:pl-20">
            <div className="max-w-xs px-2.5 lg:max-w-none">
              <Image
                src={profilePic}
                alt=""
                sizes="(min-width: 1024px) 32rem, 20rem"
                className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover duration-500 hover:scale-125 dark:bg-zinc-800"
                width="450"
                height="450"
              />
            </div>
          </div>
          <div className="lg:order-first lg:row-span-2">
            <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
              Hey, I’m Galit! A Software Engineer & Web Developer in NYC.
            </h1>
            <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’ve loved making things for as long as I can remember. I made
                my first FTP client/SQL server and website when I was 10 years
                old on my family's Windows 98 computer.
              </p>
              <p>
                I'm currently really excited about React, Nextjs and parallax
                effects.
              </p>
              <p>
                When I'm not making websites, you can find me{' '}
                <Link
                  href="/games"
                  target="_blank"
                  className="text-teal-500 dark:text-teal-400 dark:hover:text-zinc-300"
                >
                  participating in a game jam
                </Link>
                , playing video games,{' '}
                <Link
                  href="https://www.instagram.com/galit_ie/"
                  target="_blank"
                  className="text-teal-500 dark:text-teal-400 dark:hover:text-zinc-300"
                >
                  face painting
                </Link>{' '}
                and{' '}
                <Link
                  href="https://www.youtube.com/watch?v=j933cA2Aq1g&ab_channel=GalitDances"
                  target="_blank"
                  className="text-teal-500 dark:text-teal-400 dark:hover:text-zinc-300"
                >
                  dancing lindy hop.{' '}
                </Link>
              </p>
            </div>
          </div>
          <div className="lg:pl-20">
            <ul role="list">
              <SocialLink
                href="https://twitter.com/galit_ie"
                icon={TwitterIcon}
                target="_blank"
              >
                Follow on Twitter
              </SocialLink>
              <SocialLink
                href="https://www.instagram.com/galit_ie/"
                icon={InstagramIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on Instagram
              </SocialLink>
              <SocialLink
                href="https://github.com/Galitie"
                icon={GitHubIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on GitHub
              </SocialLink>
              <SocialLink
                href="https://www.linkedin.com/in/galit-weinfeld/"
                icon={LinkedInIcon}
                className="mt-4"
                target="_blank"
              >
                Follow on LinkedIn
              </SocialLink>
              <SocialLink
                href="mailto:gsweinfeld@gmail.com"
                icon={MailIcon}
                className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
                target="_blank"
              >
                gsweinfeld@gmail.com
              </SocialLink>
            </ul>
          </div>
        </div>
      </Container>
      <Photos />
    </>
  )
}
