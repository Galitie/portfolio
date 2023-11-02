import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import portfolio from '@/images/photos/portfolio.png'
import habitHatcher from '@/images/photos/habitHatcher.png'
import sgs from '@/images/photos/sgs.png'
import kat from '@/images/photos/kat.png'
import virtualchair from '@/images/photos/virtualchair.png'
import lindyhop from '@/images/photos/lindyhop.jpeg'

import Link from 'next/link'

const projects = [
  {
    name: 'Corner Pocket',
    description:
      'A dance registration site made by and for Lindy Hoppers. Find dance classes near you!',
    link: { href: '#', label: 'Coming Soon' },
    github: {
      href: 'https://github.com/jazzyclimber/corner-pocket',
      label: 'Github',
    },
    logo: lindyhop,
    stack: ['React', 'Nextjs', 'Tailwind CSS', 'Docker', 'JSX'],
  },
  {
    name: 'Portfolio',
    description: "You're looking at it - This personal website!",
    link: { href: 'https://www.Galitie.com', label: 'Live link' },
    github: {
      href: 'https://github.com/Galitie/website',
      label: 'Github',
    },
    logo: portfolio,
    stack: ['React', 'Nextjs', 'Tailwind CSS', 'JSX'],
  },
  {
    name: 'Shamrock Government Solutions',
    description:
      'A clean SPA for a client specializing in C Suite level consulting expertise for growing & transitioning companies.',
    link: {
      href: 'https://shamrockgovermentsolutions.com/',
      label: 'Live link',
    },
    logo: sgs,
    stack: ['Wordpress', 'HTML', 'CSS'],
  },
  {
    name: 'Katherine Lund - Portfolio',
    description:
      'A single page site for Katherine Lund, a professional actor and model based in NYC.',
    link: {
      href: 'https://www.kathrinelund.com/',
      label: 'Live link',
    },
    logo: kat,
    stack: ['HTML', 'CSS', 'Google Sites'],
  },
  {
    name: 'Virtual Chair',
    description: '',
    link: {
      href: 'https://www.virtualchair.net/',
      label: 'Live link',
    },
    logo: virtualchair,
    stack: ['Javascript', 'HTML', 'CSS', 'Wix'],
  },
  {
    name: 'Habit Hatcher',
    description:
      'A to-do list with a twist! Complete your tasks to hatch 10 different monsters!',
    link: {
      href: 'https://habit-hatcher.onrender.com/',
      label: 'Live link',
    },
    github: {
      href: 'https://github.com/Galitie/habit-hatcher',
      label: 'Github',
    },
    logo: habitHatcher,
    stack: ['React', 'CSS', 'Local Storage', 'JSX'],
  },
]

function LinkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  )
}

export const metadata = {
  title: 'Portfolio',
  description: 'Things I’ve made trying to put my dent in the universe.',
}

export default function Projects() {
  return (
    <SimpleLayout
      title="Work I've done, click a project to see more info:"
      intro="I’ve worked on tons of projects over the years for clients but these are the ones that I’m most proud of. Many of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved."
    >
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-10 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Card
            as="li"
            key={project.name}
            className="rounded-2xl bg-zinc-100 p-5 transition duration-200 hover:bg-zinc-200 dark:bg-zinc-800/25 dark:hover:bg-zinc-800"
          >
            <Image
              src={project.logo}
              alt=""
              className="aspect-square rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
            <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
              <p>{project.name}</p>
            </h2>
            <Card.Description>{project.description}</Card.Description>
            <Card.Badge>{project.stack}</Card.Badge>
            <p className="relative z-10 mt-6 flex text-sm font-medium text-teal-400 transition hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500 ">
              <LinkIcon className="h-6 w-6 flex-none" />
              <Link href={project.link.href} className="ml-2" target="_blank">
                {project.link.label}
              </Link>
            </p>
            <p className="relative z-10 mt-2 flex text-sm font-medium text-teal-400 transition hover:text-teal-500 dark:text-teal-300 dark:hover:text-teal-500">
              {project.github ? (
                <LinkIcon className="h-6 w-6 flex-none" />
              ) : (
                console.log('hmmm')
              )}

              {project.github ? (
                <Link
                  href={project.github.href}
                  className="ml-2"
                  target="_blank"
                >
                  {project.github.label}
                </Link>
              ) : (
                console.log('hmmm')
              )}
            </p>
          </Card>
        ))}
      </ul>
    </SimpleLayout>
  )
}
