import Image from 'next/image'
import Link from 'next/link'
import { Card } from '@/components/Card'
import { Cloudinary } from '@cloudinary/url-gen'
import Socials from '@/components/Socials'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import logoDevs from '@/images/logos/100devs_logo.jpeg'
import logoSOA from '@/images/logos/SOA_logo.jpeg'
import logoVC from '@/images/logos/virtualchair_logo.jpeg'
import FeaturedProject from '@/components/FeaturedProject'
import About from '@/components/About'
import { Photos } from '@/components/Photos'

export const tools = [
  'JavaScript',
  'JSX',
  'TypeScript',
  'Python',
  'HTML',
  'CSS',
  'GDScript',
  'React',
  'Next.js',
  'Node',
  'MongoDB',
  'REST API',
  'Tailwind',
  'Git/GitHub',
  'Wordpress',
]

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Role({ role }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full">
        <Image src={role.logo} alt="" className="h-7 w-7" unoptimized />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-400"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume() {
  let resume = [
    {
      company: '100Devs',
      title: 'Software Engineer',
      logo: logoDevs,
      start: '2023',
      end: {
        label: 'Present',
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: 'Virtual Chair',
      title: 'Web Designer & Producer',
      logo: logoVC,
      start: '2022',
      end: '2023',
    },
    {
      company: 'Seasons of Advice Wealth Management',
      title: 'Graphic Designer',
      logo: logoSOA,
      start: '2020',
      end: '2022',
    },
  ]

  return (
    <div className="flex max-w-sm flex-col justify-between rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <div>
        <h2 className="flex text-sm font-semibold text-zinc-900 dark:text-zinc-100">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Work History</span>
        </h2>
        <ol className="mt-6 space-y-4">
          {resume.map((role, roleIndex) => (
            <Role key={roleIndex} role={role} />
          ))}
        </ol>
      </div>
      <div>
        <Button
          href="https://docs.google.com/document/d/14-UH9hPYvC_GFtm55zFInI8R3mKKiXDvwkDXawYMegY/edit?usp=sharing"
          variant="secondary"
          className="group mt-6 w-full dark:text-teal-300"
          target="_blank"
        >
          Download Resume
          <ArrowDownIcon className="h-4 w-4 stroke-teal-700 transition group-active:stroke-zinc-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50" />
        </Button>
      </div>
    </div>
  )
}

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'driui30ox' } })
}

export default async function Home() {
  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Full Stack Software Engineer & Web Developer based in NYC
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Not only do I love to code, but I am passionate about UX, human
            first design, and interactive and gamified experiences.
          </p>
          <div className="pt-1">
            <Card.Badge>{tools}</Card.Badge>
          </div>
          <Socials />
        </div>
        <div className="flex gap-6">
          <Button
            href="/projects"
            variant="secondary"
            className="group mt-6 dark:text-teal-300"
          >
            View All Work
            <ArrowDownIcon className="h-4 w-4 stroke-teal-700 transition group-active:stroke-zinc-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50" />
          </Button>
          <Button
            href="https://docs.google.com/document/d/14-UH9hPYvC_GFtm55zFInI8R3mKKiXDvwkDXawYMegY/edit?usp=sharing"
            variant="secondary"
            className="group mt-6 dark:text-teal-300"
            target="_blank"
          >
            Download Resume
            <ArrowDownIcon className="h-4 w-4 stroke-teal-700 transition group-active:stroke-zinc-600 dark:group-hover:stroke-teal-50 dark:group-active:stroke-teal-50" />
          </Button>
        </div>
      </Container>
      <Photos />
      <Container className="mt-24 md:mt-24">
        <div className="flex flex-wrap justify-center gap-6">
          <FeaturedProject />
          <Resume />
        </div>
      </Container>
      <About />
    </>
  )
}
